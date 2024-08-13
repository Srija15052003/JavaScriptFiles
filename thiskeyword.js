let laptop1={
cpu: 12,
ram: 4,
brand:'HP',

compare : function(other) {
    if(this.cpu>other.cpu)
        console.log(this.cpu);
    else
        console.log(other.cpu);
},

getConfig : function () {
    console.log(this.cpu)
}
}

let laptop2={
    cpu:16,
    ram: 4,
    brand:'HP',
    
    getConfig : function () {
        console.log(this.cpu)
    }
    }

    laptop1.compare(laptop2);