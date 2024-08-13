let num = [12,54,35,68,95,14];

/*num.filter(n=> n%2===0)
.map(n=> n*2)
.forEach(n => {
    console.log(n);
});*/

let result=num.filter(n=> n%2===0)
.map(n=> n*2)
.reduce((a,b)=> a+b)

console.log(result);