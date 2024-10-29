function skipSpace(string) {
  const first = string.search(/\S/);
  if (first === -1) return "";
  // Skip over comments
  const withoutComments = string.slice(first).replace(/#.*\n/g, "");
  return withoutComments.trim();
}

function parseApply(expr, program) {
  program = skipSpace(program);
  if (program[0] !== "(") return {expr: expr, rest: program};
  program = skipSpace(program.slice(1));
  expr = {type: "apply", operator: expr, args: []};
  while (program[0] !== ")") {
    const arg = parseExpression(program);
    expr.args.push(arg.expr);
    program = skipSpace(arg.rest);
    if (program[0] === ",") program = skipSpace(program.slice(1));
    else if (program[0] !== ")") throw new SyntaxError("Expected ',' or ')'");
  }
  return parseApply(expr, program.slice(1));
}

function parseExpression(program) {
  program = skipSpace(program);
  let match, expr;
  if ((match = /^"([^"]*)"/.exec(program)))
    expr = {type: "value", value: match[1]};
  else if ((match = /^\d+\b/.exec(program)))
    expr = {type: "value", value: Number(match[0])};
  else if ((match = /^[^\s(),"]+/.exec(program)))
    expr = {type: "word", name: match[0]};
  else throw new SyntaxError("Unexpected syntax: " + program);
  return parseApply(expr, program.slice(match[0].length));
}

function parse(program) {
  const result = parseExpression(program);
  if (skipSpace(result.rest).length > 0)
    throw new SyntaxError("Unexpected text after program");
  return result.expr;
}

// console.log(parse("+(a, 10)"));
/*
{
  type: 'apply',
  operator: { type: 'word', name: '+' },
  args: [ { type: 'word', name: 'a' }, { type: 'value', value: 10 } ]
}
*/

const specialForms = Object.create(null);

// The Evaluator
function evaluate(expr, env) {
  switch (expr.type) {
    case "value":
      return expr.value;
    case "word":
      if (expr.name in env) return env[expr.name];
      else throw new ReferenceError("Undefined variable: " + expr.name);
    case "apply":
      if (expr.operator.type === "word" && expr.operator.name in specialForms)
        return specialForms[expr.operator.name](expr.args, env);
      const op = evaluate(expr.operator, env);
      if (typeof op != "function")
        throw new TypeError("Applying a non-function.");
      return op.apply(
        null,
        expr.args.map(function (arg) {
          return evaluate(arg, env);
        })
      );
  }
}

specialForms["if"] = function (args, env) {
  if (args.length !== 3) throw new SyntaxError("Bad number of args to if");
  if (evaluate(args[0], env) !== false) return evaluate(args[1], env);
  else return evaluate(args[2], env);
};

specialForms["while"] = function (args, env) {
  if (args.length !== 2) throw new SyntaxError("Bad number of args to while");
  while (evaluate(args[0], env) !== false) evaluate(args[1], env);
  // Since undefined does not exist in Egg, we return false,
  // for lack of a meaningful result.
  return false;
};

specialForms["do"] = function (args, env) {
  let value = false;
  args.forEach(function (arg) {
    value = evaluate(arg, env);
  });
  return value;
};

specialForms["define"] = function (args, env) {
  if (args.length !== 2 || args[0].type !== "word") throw new SyntaxError("Bad use of define");
  const value = evaluate(args[1], env);
  env[args[0].name] = value;
  return value;
};


const topEnv = Object.create(null);
topEnv["true"] = true;
topEnv["false"] = false;

// const prog = parse("if(true, false, true)");
// console.log(evaluate(prog, topEnv)); // false

["+", "-", "*", "/", "==", "<", ">"].forEach(function (op) {
  topEnv[op] = new Function("a, b", "return a " + op + " b;");
});

topEnv["print"] = function (value) {
  console.log(value);
  return value;
};

specialForms["fun"] = function (args, env) {
  if (!args.length) throw new SyntaxError("Functions need a body");
  const body = args[args.length - 1];
  const params = args.slice(0, args.length - 1).map((expr) => {
    if (expr.type !== "word") throw new SyntaxError("Parameter names must be words");
    return expr.name;
  });

  return function () {
    if (arguments.length !== params.length)
      throw new TypeError("Wrong number of arguments");
    const localEnv = Object.create(env);
    for (let i = 0; i < arguments.length; i++) {
      localEnv[params[i]] = arguments[i];
    }
    return evaluate(body, localEnv);
  };
};

specialForms["array"] = function (args, env) {
  return args.map((arg) => evaluate(arg, env));
};

specialForms["length"] = function (args, env) {
  if (args.length !== 1) throw new SyntaxError("Bad number of arguments to length");
  return evaluate(args[0], env).length;
};

specialForms["element"] = function (args, env) {
  if (args.length !== 2) throw new SyntaxError("Bad number of arguments to element");
  const array = evaluate(args[0], env);
  const index = evaluate(args[1], env);
  if (!Array.isArray(array)) throw new TypeError("Expected an array");
  return array[index];
};

// Add Error Handling Using try Special Form
// Introduce a try special form to handle errors gracefully.
specialForms["try"] = function (args, env) {
  if (args.length !== 2) throw new SyntaxError("Bad number of arguments to try");
  try {
    return evaluate(args[0], env);
  } catch (e) {
    return evaluate(args[1], env);
  }
};

// Add Block Scope with let
// Introduce a let special form to allow variable declarations with block scope, enabling better control over variable visibility.
specialForms["let"] = function (args, env) {
  if (args.length < 2) throw new SyntaxError("Bad use of let");
  const newEnv = Object.create(env);
  let i = 0;
  for (; i < args.length - 1; i++) {
    const assignment = args[i];
    if (assignment.type !== "apply" || assignment.operator.type !== "word" || assignment.operator.name !== "=") {
      throw new SyntaxError("Bad binding in let");
    }
    const varName = assignment.args[0];
    const varValue = assignment.args[1];
    if (varName.type !== "word") {
      throw new SyntaxError("Variable name must be a word");
    }
    newEnv[varName.name] = evaluate(varValue, env);
  }
  return evaluate(args[i], newEnv);
};

specialForms["object"] = function (args, env) {
  const obj = {};
  for (let i = 0; i < args.length; i += 2) {
    const key = evaluate(args[i], env);
    obj[key] = evaluate(args[i + 1], env);
  }
  return obj;
};

topEnv["get"] = function (obj, prop) {
  return obj[prop];
};

topEnv["set"] = function (obj, prop, value) {
  obj[prop] = value;
  return value;
};


function run() {
  const env = Object.create(topEnv);
  const program = Array.prototype.slice.call(arguments, 0).join("\n");
  return evaluate(parse(program), env);
}

// run("do(define(total, 0),",
//   " define(count, 1),",
//   " while(<(count, 11),",
//   " do(define(total, +(total, count)),",
//   " define(count, +(count, 1)))),",
//   " print(total))");

// run("do(define(f, fun(a, b, +(a, b))),",
//   "print(f(5, 5)))");

// run("do(define(arr, array(1, 2, 3)),",
//   "print(length(arr)),",  // Output: 3
//   "print(element(arr, 1)))");  // Output: 2

// run("do(try(print(+(a, 10)), print('Error occurred')))");  // Output: Error occurred
// else if (program[0] !== ")") throw new SyntaxError("Expected ',' or ')'");
// SyntaxError: Expected ',' or ')'c

// Add Recursion Support with Closures
// With functions in place, you can now implement recursive functions like the factorial function.
// run("do(define(fact, fun(n,",
//   "if(==(n, 0),",
//   "  1,",
//   "  *(n, fact(-(n, 1)))))),",
//   "print(fact(5)))");  // Output: 120

// run("# This is a comment\n",
//   "print(+(5, 5))");  // Output: 10


// NOTE: THIS WILL CAUSE AN ERROR
// run("do(define(x, 10),",
//   "   let((= (x, 20)),",
//   "       print(x)),",
//   "   print(x))");
// Output:
// 20
// 10

// NOTE: THIS WILL CAUSE AN ERROR
// run(`
//   do(
//     define(person, object("name", "Alice", "age", 30)),
//     print(get(person, "name")),  // Output: Alice
//     set(person, "age", 31),
//     print(get(person, "age"))    // Output: 31
//   )
// `);
