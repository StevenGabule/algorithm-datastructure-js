// const noisy = f => {
//     return (arg) => {
//         console.log('calling with', arg)
//         const val = f(arg)
//         console.log('called with', arg, '- got', val)
//         return val;
//     }
// }
//
// noisy((x) => x * x)(2)

// const newString = JSON.stringify({name: 'John Paul L. Gabule', born: 1993});
// console.log(newString);
// console.log(JSON.parse(newString).born);
const ANCESTRY_FILE = JSON.stringify([
    {
        "name": "Carolus Haverbeke",
        "sex": "m",
        "born": 1832,
        "died": 1905,
        "father": "Carel Haverbeke",
        "mother": "Maria van Brussel"
    },
    {
        "name": "Emma de Milliano",
        "sex": "f",
        "born": 1876,
        "died": 1956,
        "father": "Petrus de Milliano",
        "mother": "Sophia van Damme"
    },
    {
        "name": "Maria de Rycke",
        "sex": "f",
        "born": 1683,
        "died": 1724,
        "father": "Frederik de Rycke",
        "mother": "Laurentia van Vlaenderen"
    },
    {
        "name": "Jan van Brussel",
        "sex": "m",
        "born": 1714,
        "died": 1748,
        "father": "Jacobus van Brussel",
        "mother": "Joanna van Rooten"
    },
    {
        "name": "Philibert Haverbeke",
        "sex": "m",
        "born": 1907,
        "died": 1997,
        "father": "Emile Haverbeke",
        "mother": "Emma de Milliano"
    },
    {
        "name": "Jan Frans van Brussel",
        "sex": "m",
        "born": 1761,
        "died": 1833,
        "father": "Jacobus Bernardus van Brussel",
        "mother": null
    },
    {
        "name": "Pauwels van Haverbeke",
        "sex": "m",
        "born": 1535,
        "died": 1582,
        "father": "N. van Haverbeke",
        "mother": null
    },
    {
        "name": "Clara Aernoudts",
        "sex": "f",
        "born": 1918,
        "died": 2012,
        "father": "Henry Aernoudts",
        "mother": "Sidonie Coene"
    },
    {
        "name": "Emile Haverbeke",
        "sex": "m",
        "born": 1877,
        "died": 1968,
        "father": "Carolus Haverbeke",
        "mother": "Maria Sturm"
    },
    {
        "name": "Lieven de Causmaecker",
        "sex": "m",
        "born": 1696,
        "died": 1724,
        "father": "Carel de Causmaecker",
        "mother": "Joanna Claes"
    },
    {
        "name": "Pieter Haverbeke",
        "sex": "m",
        "born": 1602,
        "died": 1642,
        "father": "Lieven van Haverbeke",
        "mother": null
    },
    {
        "name": "Livina Haverbeke",
        "sex": "f",
        "born": 1692,
        "died": 1743,
        "father": "Daniel Haverbeke",
        "mother": "Joanna de Pape"
    },
    {
        "name": "Pieter Bernard Haverbeke",
        "sex": "m",
        "born": 1695,
        "died": 1762,
        "father": "Willem Haverbeke",
        "mother": "Petronella Wauters"
    },
    {
        "name": "Lieven van Haverbeke",
        "sex": "m",
        "born": 1570,
        "died": 1636,
        "father": "Pauwels van Haverbeke",
        "mother": "Lievijne Jans"
    },
    {
        "name": "Joanna de Causmaecker",
        "sex": "f",
        "born": 1762,
        "died": 1807,
        "father": "Bernardus de Causmaecker",
        "mother": null
    },
    {
        "name": "Willem Haverbeke",
        "sex": "m",
        "born": 1668,
        "died": 1731,
        "father": "Lieven Haverbeke",
        "mother": "Elisabeth Hercke"
    },
    {
        "name": "Pieter Antone Haverbeke",
        "sex": "m",
        "born": 1753,
        "died": 1798,
        "father": "Jan Francies Haverbeke",
        "mother": "Petronella de Decker"
    },
    {
        "name": "Maria van Brussel",
        "sex": "f",
        "born": 1801,
        "died": 1834,
        "father": "Jan Frans van Brussel",
        "mother": "Joanna de Causmaecker"
    },
    {
        "name": "Angela Haverbeke",
        "sex": "f",
        "born": 1728,
        "died": 1734,
        "father": "Pieter Bernard Haverbeke",
        "mother": "Livina de Vrieze"
    },
    {
        "name": "Elisabeth Haverbeke",
        "sex": "f",
        "born": 1711,
        "died": 1754,
        "father": "Jan Haverbeke",
        "mother": "Maria de Rycke"
    },
    {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father": null, "mother": null},
    {
        "name": "Bernardus de Causmaecker",
        "sex": "m",
        "born": 1721,
        "died": 1789,
        "father": "Lieven de Causmaecker",
        "mother": "Livina Haverbeke"
    },
    {
        "name": "Jacoba Lammens",
        "sex": "f",
        "born": 1699,
        "died": 1740,
        "father": "Lieven Lammens",
        "mother": "Livina de Vrieze"
    },
    {
        "name": "Pieter de Decker",
        "sex": "m",
        "born": 1705,
        "died": 1780,
        "father": "Joos de Decker",
        "mother": "Petronella van de Steene"
    },
    {
        "name": "Joanna de Pape",
        "sex": "f",
        "born": 1654,
        "died": 1723,
        "father": "Vincent de Pape",
        "mother": "Petronella Wauters"
    },
    {
        "name": "Daniel Haverbeke",
        "sex": "m",
        "born": 1652,
        "died": 1723,
        "father": "Lieven Haverbeke",
        "mother": "Elisabeth Hercke"
    },
    {
        "name": "Lieven Haverbeke",
        "sex": "m",
        "born": 1631,
        "died": 1676,
        "father": "Pieter Haverbeke",
        "mother": "Anna van Hecke"
    },
    {
        "name": "Martina de Pape",
        "sex": "f",
        "born": 1666,
        "died": 1727,
        "father": "Vincent de Pape",
        "mother": "Petronella Wauters"
    },
    {
        "name": "Jan Francies Haverbeke",
        "sex": "m",
        "born": 1725,
        "died": 1779,
        "father": "Pieter Bernard Haverbeke",
        "mother": "Livina de Vrieze"
    },
    {
        "name": "Maria Haverbeke",
        "sex": "m",
        "born": 1905,
        "died": 1997,
        "father": "Emile Haverbeke",
        "mother": "Emma de Milliano"
    },
    {
        "name": "Petronella de Decker",
        "sex": "f",
        "born": 1731,
        "died": 1781,
        "father": "Pieter de Decker",
        "mother": "Livina Haverbeke"
    },
    {
        "name": "Livina Sierens",
        "sex": "f",
        "born": 1761,
        "died": 1826,
        "father": "Jan Sierens",
        "mother": "Maria van Waes"
    },
    {
        "name": "Laurentia Haverbeke",
        "sex": "f",
        "born": 1710,
        "died": 1786,
        "father": "Jan Haverbeke",
        "mother": "Maria de Rycke"
    },
    {
        "name": "Carel Haverbeke",
        "sex": "m",
        "born": 1796,
        "died": 1837,
        "father": "Pieter Antone Haverbeke",
        "mother": "Livina Sierens"
    },
    {
        "name": "Elisabeth Hercke",
        "sex": "f",
        "born": 1632,
        "died": 1674,
        "father": "Willem Hercke",
        "mother": "Margriet de Brabander"
    },
    {
        "name": "Jan Haverbeke",
        "sex": "m",
        "born": 1671,
        "died": 1731,
        "father": "Lieven Haverbeke",
        "mother": "Elisabeth Hercke"
    },
    {
        "name": "Anna van Hecke",
        "sex": "f",
        "born": 1607,
        "died": 1670,
        "father": "Paschasius van Hecke",
        "mother": "Martijntken Beelaert"
    },
    {
        "name": "Maria Sturm",
        "sex": "f",
        "born": 1835,
        "died": 1917,
        "father": "Charles Sturm",
        "mother": "Seraphina Spelier"
    },
    {
        "name": "Jacobus Bernardus van Brussel",
        "sex": "m",
        "born": 1736,
        "died": 1809,
        "father": "Jan van Brussel",
        "mother": "Elisabeth Haverbeke"
    }
])

const filters = (arr, test) => {
    const passed = []
    const ancestry = arr.length;
    for (let i = 0; i < ancestry; i++) {
        if (test(arr[i])) {
            passed.push(arr[i])
        }
    }
    return passed
}

const maps = (arr, transform) => {
    const mapped = []
    for (let i = 0; i < arr.length; i++) {
        mapped.push(transform(arr[i]))
    }
    return mapped;
}

const ancestry = JSON.parse(ANCESTRY_FILE)
// console.log(filters(ancestry, (p) => p.born > 1900 && p.born < 1925))
// console.log(ancestry.filter(person => person.father === "Carel Haverbeke"))

const overNinety = ancestry.filter(person => person.died - person.born > 90)
// console.log(maps(overNinety, person => person.name))
// [ 'Clara Aernoudts', 'Emile Haverbeke', 'Maria Haverbeke' ]


const reduce = (arr, combine, start) => {
    let current = start;
    for (let i = 0; i < arr.length; i++) {
        current = combine(current, arr[i])
    }
    return current
}

// console.log(reduce([1,2,3,4], (a,b) => a + b, 0)) // 10
// console.log(ancestry.reduce((min, cur) => {
//     if (cur.born < min.born) return cur;
//     else return min
// }))
// {
//   name: 'Pauwels van Haverbeke',
//   sex: 'm',
//   born: 1535,
//   died: 1582,
//   father: 'N. van Haverbeke',
//   mother: null
// }

// Compatibility
let min = ancestry[0];
for (let i = 1; i < ancestry.length; i++) {
    const cur = ancestry[i];
    if (cur.born < min.born) min = cur;
}
// console.log(min);

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }
function male(p) { return p.sex === "m"; }
function female(p) { return p.sex === "f"; }

// console.log(average(ancestry.filter(male).map(age)));
// console.log(average(ancestry.filter(female).map(age)));

const byName = {}

ancestry.forEach(function(person) {
    byName[person.name] = person
})

// console.log(byName["Philibert Haverbeke"])

function reduceAncestors(person, f, defaultValue) {
    function valueFor(person) {
        if (person == null) {
            return defaultValue
        } else {
            return f(person, valueFor(byName[person.mother]), valueFor(byName[person.father]))
        }
    }
    return valueFor(person)
}

function sharedDNA(person, fromMother, fromFather) {
    if (person.name === "Pauwels van Haverbeke") {
        return 1;
    } else {
        return (fromMother + fromFather) / 2;
    }
}

const currentPerson = byName["Philibert Haverbeke"];
// console.log(reduceAncestors(currentPerson, sharedDNA, 0) / 4)

const countAncestors = (person, test) => {
    const combine = (person, fromMother, fromFather) => {
        const thisOneCounts = test(person)
        return fromMother + fromFather + (thisOneCounts ? 1 : 0)
    }
    return reduceAncestors(person, combine, 0)
}

const longLivingPercentage = (person) => {
    const all = countAncestors(person, (person) => true)
    const longLiving = countAncestors(person, (person) => (person.died - person.born) >= 70)
    return longLiving / all;
}
// console.log(longLivingPercentage(byName["Emile Haverbeke"]))

//  collect those person objects whose names are in a speciﬁc set
const theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];
const isInSet = (set, person) => set.indexOf(person.name) > -1;
console.log(ancestry.filter((person) => isInSet(theSet, person)))
console.log(ancestry.filter(isInSet.bind(null, theSet)))
