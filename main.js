//////////////////////////////////Arrays//////////////////////////////////
//Concept:
let myAutos = ['BMW', 'Bugatti', 'Mercedes'];

let myCars = {
    0: 'BMW', 
    1: 'Bugatti',
    2: 'Mercedes'
}

console.log(myAutos);
console.log(myCars);


let myPhone = ['black', 500, 20, 1000] 

let myPhoneObj = {
    color: 'black',
    storage: 500,
    camera: 20,
    Processor: 1000
}

//////////////////////////////////////////////////////////////////////////
///Syntax:
//et myFirstArray = ['item1', 'item2', ...];
let myFirstArray = [];

console.log(myFirstArray);
//////////////////////////////////////////////////////////////////////////

myFirstArray[0] = 'test';

console.log(myFirstArray);
//////////////////////////////////////////////////////////////////////////
let x = myFirstArray.length;

myFirstArray[x] = 'Hop';

myFirstArray[10] = 'Hey';

x = myFirstArray.length;

myFirstArray[x] = 'Yey';


myFirstArray.push('Yep');

myFirstArray[2] = undefined;

console.log(myFirstArray[0]);
console.log(myFirstArray[1]);
console.log(myFirstArray[2]);
console.log(myFirstArray[12]);
console.log(myFirstArray[13]);


let myNextArray = [];

myNextArray.push('Bosch');
myNextArray.push('Siemens');

console.log(myNextArray);

myNextArray.unshift('Delonghi');

console.log(myNextArray);

//////////////////////////////////////////////////////////////////////////
//pop and shift

myNextArray.pop();
console.log(myNextArray);

myNextArray.shift();
console.log(myNextArray);

//////////////////////////////////////////////////////////////////////////
//splice

let myTestArr = ['Js', 'React', 'Node', 'Mongo'];

myTestArr.splice(2,1);

console.log(myTestArr);

//////////////////////////////////////////////////////////////////////////
//slice
//myTestArr = ['Js', 'React', 'Mongo'];
let item = myTestArr.slice(1,3);

console.log(item);