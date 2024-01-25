function a(inside)   // hof
{
    inside();
    console.log("inside a");
}

// when we pass the entire function as a parameter inside another function is known as hof[HIGHER ORDER FUNCTION]
function b()
{
    console.log("inside b");
}
// a(b);
// when we return entire function inside  from another function is known as hof
 function outer()   // higher order function 
 {
    console.log('Outer');

    function inner()
    {
        console.log('inner');
    }
    return inner;
 }

let ans=outer();
ans();



let radii=[2,3,4,5,6,7];
let area=[]
let perimeter=[];