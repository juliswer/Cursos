const deserializado = {
    variable1: "Pedro",
    variable22: "Jorge"
}

const serializado = JSON.stringify(deserializado);

const serializado2 = {
    variable1: "Pedro",
    variable22: "Jorge"
}

const deserializado2 = JSON.parse(serializado2);

console.log(typeof serializado)
console.log(typeof deserializado)
console.log(typeof serializado2)
console.log(typeof deserializado2)