let Person={
    name:"Tushar",
    isadult:true,
    age:23
}
let P1=Object.create(Person)

console.log(Person.name);
console.log(Person.isadult);
console.log(Person.age);

// let iswinter=true;
// undefined
// typeof(iswinter);
// 'boolean'
// iswinter.__proto__===Boolean.prototype
// true
// let arr=[10,20,30,40];
// undefined
// typeof(arr)
// 'object'
// arr.__proto__===Array.prototype
// true
// Array.prototype.__proto__===Object.prototype
// true
// Boolean.prototype.__proto__===Object.prototype
// true
