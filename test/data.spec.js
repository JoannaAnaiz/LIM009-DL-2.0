global.window = global;
require('./data.spec.js');
require('../src/data');

const input = [
  {"name": "Harry Potter",
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "31-07-1980",
    "yearOfBirth": 1980,
    "ancestry": "half-blood",
    "eyeColour": "green",
    "hairColour": "black",
    "wand": {
      "wood": "holly",
      "core": "phoenix feather",
      "length": 11
    },
    "patronus": "stag",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Daniel Radcliffe",
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/harry.jpg"
  },
  {
    "name": "Cedric Diggory",
    "species": "human",
    "gender": "male",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": 1977,
    "ancestry": "",
    "eyeColour": "grey",
    "hairColour": "brown",
    "wand": {
      "wood": "ash",
      "core": "unicorn hair",
      "length": 12.25
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Robert Pattinson",
    "alive": false,
    "image": "http://hp-api.herokuapp.com/images/cedric.png"
  },
  {
    "name": "Mrs Norris",
    "species": "cat",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "ancestry": "",
    "eyeColour": "yellow",
    "hairColour": "brown",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Maxime, Alanis and Tommy the cats",
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/norris.JPG"
  },

  {
    "name": "Lord Voldemort",
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "31-12-1926",
    "yearOfBirth": 1926,
    "ancestry": "half-blood",
    "eyeColour": "red",
    "hairColour": "bald",
    "wand": {
      "wood": "yew",
      "core": "phoenix feather",
      "length": 13.5
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Ralph Fiennes",
    "alive": false,
    "image": "http://hp-api.herokuapp.com/images/voldemort.jpg"
  }
];

describe('showData', () => {
  it('es una función', () => {
    expect(typeof magic.showData).toBe('function');
  });
  it('retorna un array modificado con propiedad year y rol', () => {
    expect(magic.showData(input)).toEqual(output1);
  });
  it('retorna un nuevo array', () => {
    expect(magic.showData(input)).not.toBe(output1);
  });
});

const output1 = [
  {actor: "Daniel Radcliffe", gender: "male", house: "Gryffindor", image: "http://hp-api.herokuapp.com/images/harry.jpg", name: "Harry Potter", rol: "Student", species: "human", year: 39}, 
  {actor: "Robert Pattinson", gender: "male", house: "Hufflepuff", image: "http://hp-api.herokuapp.com/images/cedric.png", name: "Cedric Diggory", rol: "Student", species: "human", year: 42},
  {actor: "Maxime, Alanis and Tommy the cats", gender: "female", house: "", image: "http://hp-api.herokuapp.com/images/norris.JPG", name: "Mrs Norris", rol: "Staff", species: "cat", year: 2019},
  {actor: "Ralph Fiennes", gender: "male", house: "Slytherin", image: "http://hp-api.herokuapp.com/images/voldemort.jpg", name: "Lord Voldemort", rol: "ninguno", species: "human", year: 1926}
];

const inputGen = [{name: "Harry Potter", gender: "male"}, {name: "Hermione Granger", gender: "female"}];
const conditionGen = "female";
const outputGen = [{name: "Hermione Granger", gender: "female"}];
const inputHou = [{name: "Ron Weasley", house: "Gryffindor"}, {name: "Cedric Diggory", house: "Hufflepuff"}];
const conditionHou = "Hufflepuff";
const outputHou = [{name: "Cedric Diggory", house: "Hufflepuff"}];
const inputStud = [{name: "Cedric Diggory", rol: "Student"}, {name: "Minerva McGonagall", rol: "Staff"}];
const conditionStud = "Student";
const outputStud = [{name: "Cedric Diggory", rol: "Student"}];
const inputStaf = [{name: "Cedric Diggory", rol: "Student"}, {name: "Minerva McGonagall", rol: "Staff"}];
const conditionStaf = "Staff";
const outputStaf = [{name: "Minerva McGonagall", rol: "Staff"}];
const inputSort1 = [{ year: 39}, { year: 40}];
const outputSort1 = [{year: 39}, {year: 40}];
const inputSort2 = [{year: 40}, {year: 39}, {year: 39}];
const outputSort2 = [{year: 39}, {year: 40}];

describe('filtraGenero', () => {
  it('deberia ser una funcion', () => {
    expect(typeof magic.filtraGenero).toBe('function');
  });

  it('Esta funcion deberia filtrar por genero', () => {
    expect(magic.filtraGenero(inputGen, conditionGen)).toEqual(outputGen);
  });  
});

describe('filtraCasa', () => {
  it('deberia ser una funcion', () => {
    expect(typeof magic.filtraCasa).toBe('function');
  });

  it('Esta funcion deberia filtrar por casa', () => {
    expect(magic.filtraCasa(inputHou, conditionHou)).toEqual(outputHou);
  });
});

describe('filtraRol', () => {
  it('deberia ser una funcion', () => {
    expect(typeof magic.filtraRol).toBe('function');
  });

  it('Esta funcion deberia filtrar por rolStudent', () => {
    expect(magic.filtraRol(inputStud, conditionStud)).toEqual(outputStud);
  });
});

describe('filtraRol', () => {
  it('deberia ser una funcion', () => {
    expect(typeof magic.filtraRol).toBe('function');
  });

  it('Esta funcion deberia filtrar por rolStaff', () => {
    expect(magic.filtraRol(inputStaf, conditionStaf)).toEqual(outputStaf);
  });
});

describe('sortAge', () => {
  it('deberia ser una funcion', () => {
    expect(typeof magic.sortAge).toBe('function');
  });

  it('Esta funcion deberia dar un array ordenado', () => {
    expect(magic.sortAge(inputSort1)).toEqual(outputSort1);
  });
  it('deberia retornar el mismo array', () => {
    expect(magic.sortAge(inputSort2)).toEqual(outputSort2);
  });
});

