var sumar = function (valor1, valor2) {
    return valor1 + valor2;
};
var dividir = function (a, b) {
    return a / b;
};
function imprimir() {
    console.log(sumar(2, 2));
    return null;
}
var throwError = function (message) {
    if (!message) {
        throw new Error(message);
    }
    return message;
};
var throwError2 = function (message) {
    throw new Error(message);
};
imprimir();
var sumar2;
sumar2 = sumar;
console.log(sumar2(2, 3));
function imprimir2() {
    console.log('Test');
}
var sumar3;
sumar3 = imprimir2;
