


const amar = {
    skill : "singer",
    place : "Goa",
    skillExchange: function (akbar){
    console.log(`my skill is ${akbar.skill} Now I am ${this.skill}`)
}
}
const akbar = {
    skill : "Chef",
    place : "Mumbai",
}
const anthony = {
    skill : "Magician",
    place : "Kashmir"
}
amar.skillExchange.call(amar,akbar)