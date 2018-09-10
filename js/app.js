// // ==========string initiation==========
// var firstname = 'Adnaan';
// // console.log(firstname);
//
// var lastname = 'Mamaniat';
// // console.log(lastname);
//
// // ==========Number Initiation==========
// var age = 21;
// // console.log(age);
//
// var floatvalue = 4.56;
// // console.log(floatvalue);
//
// var sum = age + floatvalue;
// // console.log(sum);
//
// // ==========Booleans==========
// var bool1 = true;
// // console.log(bool1);
// var bool2 = false;
// // console.log(bool2);
//
// // ==========Arrays==========
// var array1 = ['My Name is', firstname,lastname, [] ];
// console.log(array1[1] + array1[2]);
//
// var array2 = [array1];
// // console.log(array2);
//
// //To count number of items in arrays... console.log(array1.length);
//
// var Arraysum = (array1[1] + array1[2]);
// // console.log(Arraysum);
//
// //pushes/adds field at the end of an array
// array1.push(Arraysum);
// // console.log(array1);
//
// //unshift adds on beginning
// array1.unshift(Arraysum);
//
// // 1 - where in existing array you want it to go
// // 2 - how many items after index you want to replace
// // 3 - data you want to input in the array
// array1.splice(3, 0, "Spliced");
// // console.log(array1);
//
// //==========Add elementsinto array==========
//
// // POP removes items from the end of an array
// array1.pop();
// // console.log(array1);
//
// // SHIFT removes items from the start of an array
// array1.shift();
// console.log(array1);
//
// array1.slice(1,2);
// console.log(array1);

// //==========Objects==========
var obj1 = {
  intro: 'My Name is ',
  name: prompt('What is your name?'),
  agedesc: ' and i am ',
  age: 21,
  objfloat: 2.36,
  objarray: [1,2,3,4,5,6],
  OBJinaOBJ: {
    houseno:6,
    Street:'Grange Avenue',
    city: 'London',
    Postcode:'HD21JD'
  },
  // prompt:prompt('I`m part of an object'),
  objboolean: true
};

obj1.jobaddintoobj = 'Consultant';

obj1.NameAge = obj1.intro + obj1.name + obj1.agedesc + obj1.age;
console.log(obj1);
