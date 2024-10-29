const map = {};

function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

Object.prototype.nonsense = "hi";

for (const name in map) console.log(name, map[name]);

console.log("nonsense" in map);
console.log("toString" in map);

/**
 * Laying Out a Table
 * we will write a program that, given an array of arrays of table cells,
 * builds up a string that contains a nicely laid out table
 *
 * This is the interface:
 * minHeight() returns a number indicating the minimum height this cell requires (in lines).
 * minWidth() returns a number indicating this cell’s minimum width (in characters).
 * draw(width, height) returns an array of length height, which contains a series of strings that are each width characters wide.
 * This represents the content of the cell.
 */

/**
 * It uses reduce to compute the maximum height of an array of cells and
 * wraps that in map in order to do it for all rows in the rows array
 */
function rowHeights(rows) {
  return rows.map(function (row) {
    return row.reduce(function (max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

/**
 * Builds up an array with one element for every column index.
 * The call to reduce runs over the outer rows array for each index
 * and picks out the width of the widest cell at that index.
 */
function colWidths(rows) {
  return rows[0].map(function (_, i) {
    return rows.reduce(function (max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

/**
 * uses the internal helper function drawRow to draw all rows
 * and then joins them together with newline characters.
 * @param rows
 * @returns {*}
 */
function drawTable(rows) {
  const heights = rowHeights(rows);
  const widths = colWidths(rows);

  /**
   * extracts lines that should appear next to each other from an array of blocks
   * and joins them with a space character to create a one-character gap between the table’s columns.
   * @param blocks
   * @param lineNo
   * @returns {*}
   */
  function drawLine(blocks, lineNo) {
    return blocks.map(function (block) {
      return block[lineNo];
    }).join(" ");
  }

  /**
   * Itself ﬁrst converts the cell objects in the row to blocks,
   * which are arrays of strings representing the content of the cells, split by line
   * @param row
   * @param rowNum
   * @returns {*}
   */
  function drawRow(row, rowNum) {
    const blocks = row.map(function (cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function (_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}

/**
 * which builds a string whose value is the string argument repeated times number of times.
 * @param string
 * @param times
 * @returns {string}
 */
function repeat(string, times) {
  let result = "";
  for (let i = 0; i < times; i++)
    result += string;
  return result;
}


/**
 * Splits a string into an array of lines using the string method split,
 * which cuts up a string at every occurrence of its argument and returns an array of the pieces.
 *
 * @param text
 * @constructor
 */
function TextCell(text) {
  this.text = text.split("\n");
}

// Finds the maximum line width in this array
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};

TextCell.prototype.minHeight = function() {
  return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
  const result = [];
  for (let i = 0; i < height; i++) {
    const line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

// const rows = [];
// for (let i = 0; i < 5; i++) {
//   const row = [];
//   for (let j = 0; j < 5; j++) {
//     if ((j + i) % 2 === 0) row.push(new TextCell("##"));
//     else row.push(new TextCell(" "));
//   }
//   rows.push(row);
// }
// console.log(drawTable(rows));


/**
 * It reports its minimum size as being the same as that of its inner cell
 * (by calling through to that cell’s minWidth and minHeight methods)
 * but adds one to the height to account for the space taken up by the underline.
 */
function UnderlinedCell(inner) {
  this.inner = inner;
}

UnderlinedCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};

UnderlinedCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};

UnderlinedCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height - 1).concat([repeat("-", width)]);
};


const MOUNTAINS = [
  {
    Name: "Kilimanjaro",
    Height: 5895,
    Country: "Tanzania",
    City: "Valencia city",
    PostalCode: "1122",
    Job: "Data Scientist",
    Bio: "My name is oboo"
  },
  {
    Name: "Everest",
    Height: 8848,
    Country: "Nepal",
    City: "Valencia city",
    PostalCode: "1132",
    Job: "Data Scientist",
    Bio: "My name is oboo"
  },
  {
    Name: "Mount Fuji",
    Height: 3776,
    Country: "Japan",
    City: "Valencia city",
    PostalCode: "12222",
    Job: "Data Scientist",
    Bio: "My name is oboo"
  },
  {
    Name: "Mont Blanc",
    Height: 4808,
    Country: "Italy/France",
    City: "Valencia city",
    PostalCode: "1122",
    Job: "Data Scientist",
    Bio: "My name is oboo"
  },
  {
    Name: "Vaalserberg",
    Height: 323,
    Country: "Netherlands",
    City: "Valencia city",
    PostalCode: "1122",
    Job: "Data Scientist",
    Bio: "My name is oboo"
  },
  {
    Name: "Denali",
    Height: 6168,
    Country: "United States",
    City: "Valencia city",
    PostalCode: "1122",
    Job: "Data Scientist",
    Bio: "My name is oboo"
  },
  {
    Name: "Popocatepetl",
    Height: 5465,
    Country: "Mexico",
    City: "Valencia city",
    PostalCode: "1122",
    Job: "Data Scientist",
    Bio: "My name is oboo"
  }
];

// Inheritance - It allows us to build slightly different data types from existing
// data types with relatively little work
function RTextCell(text) {
  TextCell.call(this, text);
}

// returns an array of property names in an object
function dataTable(data) {
  const keys = Object.keys(data[0]);
  const headers = keys.map(function (name) {
    return new UnderlinedCell(new TextCell(name));
  });

  const body = data.map(function (row) {
    return keys.map(function (name) {
      const value = row[name];
      // This was changed:
      if (typeof value == "number") return new RTextCell(String(value));
      else return new TextCell(String(value));
    });
  });
  return [headers].concat(body);
}

RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
  const result = [];
  for (let i = 0; i < height; i++) {
    const line = this.text[i] || "";
    result.push(repeat(" ", width - line.length) + line);
  }
  return result;
};

console.log(drawTable(dataTable(MOUNTAINS)));


















































