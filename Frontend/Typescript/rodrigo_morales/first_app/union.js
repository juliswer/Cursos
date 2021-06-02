function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    else if (typeof padding === 'string') {
        return padding + value;
    }
    else {
        throw new Error("Espera unstring pero recibi '" + padding + "'.");
    }
}
console.log(padLeft('Hola mundo', 20));
