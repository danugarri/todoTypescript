// array of strings
export const array1 : string[]= ['hola', 'esto es un array'];
// numbers
const array2 : number[]= [1, 2];
// numbers
const array3 : boolean[]= [true, false];

//  Ojects

let person : {
    name:string,
    age: number
};
person = {
    name:'Daniel',
    age: 30
};

// Array of objects

let people : {
    name:string,
    age: number
}[];

people = [{
    name:'daniel',
    age: 30
},
{
    name:'daniela',
    age: 24
}];
//  Type inference

let nombre= 'Daniel';

// nombre = 2 devuelve un error

// Union types

let age : string | number = '30' || 30;

//  type allias

type Person = {
    name:string,
    age: number
};

const daniel: Person = {
    name: 'Daniel',
    age: 30
};

// interface

interface IAnimal {
    breed: string,
    age: number | string
};

//  functions

function oldVersion (a: number,b: number) {

    return a+b;
};

const newVersion = (a: number, b: number) => a+b;

//  Generics

//  We want a function to add whichever element type to an existing array
const addElementAtBeginning = (array: any[], value:any) => {
    const newArray = [value, ...array];

    return newArray;
};
addElementAtBeginning(['hola','adios'], 'hello');

// if we put mouse on typescript do not specify which kind of type de array is, it says any[]

// Solution

const addElementAtBeginning2 = <T>(array: T[], value:T) => {
    const newArray = [value, ...array];

    return newArray;
};

addElementAtBeginning2(['hola','adios'], 'hello');
// Now typescript tell us the specific type it has
