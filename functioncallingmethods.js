//Function Declaration
function doAddition(a,b){
    let c = a+b;
    return c;
}
//Function Expression
const doMultiplication = function(a,b){
     let c=a*b;
    return c;
}
console.log(doAddition(5,2));
console.log(doMultiplication(5,2));

//Immediately Invoked Function Expression
(function(){
let a = 22;
let b = 2;
let c = doAddition(a,b);
console.log(c);}
)();