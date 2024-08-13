let alien = {
    name:"Srija",
    tech: "JS",
    work_exp: 2,
    laptop: {
        brand: "HP",
        ram: 8,
        colour: "white"
    }
}
delete alien.laptop.ram;
console.log(alien.laptop);
console.log(alien);