"use strict";
/* partir del array de pilotos siguiente, realizar las siguientes operaciones:
rebels: devolver únicamente los pilotos rebeldes, utilizando la función filter
totalFaction: devolver el número de pilotos de una determinada facción
avgYears: calcular la media de edad de los pilotos de una facción
*/
const assert = require("assert").strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10,
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20,
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30,
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35,
  },
];

function iterateSimple() {
  for (let i = 0; i < (pilots.length); i++) {
    console.log(pilots[i]);
  }
}

function iterateForEach() {
  pilots.forEach((pilots) => console.log(pilots));
}

function mapIds() {
  let newarray = pilots.map((pilot) => pilot.id);
  return newarray;
}

function rebels() {
  let newarray = pilots.filter((pilot) => pilot.faction === "Rebels");
  return newarray;
}
function totalFaction(faction) {}
function avgYears(faction) {}

// use console.log
iterateSimple();
iterateForEach();
try {
  assert.deepStrictEqual(mapIds(), [2, 8, 40, 66]);
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])

  //   assert.deepStrictEqual(totalFaction('Rebels'), 2)

  //   assert.deepStrictEqual(avgYears('Rebels'), 22.5)
  //   assert.deepStrictEqual(avgYears('Empire'), 25)
} catch (error) {
  console.error(error);
}
