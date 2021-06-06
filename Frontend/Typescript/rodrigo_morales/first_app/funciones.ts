const sumar = (valor1: number, valor2: number) : number => {
    return valor1 + valor2;
}

const dividir = (a: number, b: number) : number => {
    return a/b;
}

function imprimir():void{
    console.log(sumar(2, 2));
    return null;
}

const throwError = (message:string) => {
    if(!message){
        throw new Error(message);
    }
    
    return message;
};

const throwError2 = (message:string) : never => {
    throw new Error(message);
};

imprimir();

let sumar2;
sumar2 = sumar;


console.log(sumar2(2, 3));

function imprimir2(): void {
    console.log('Test');
}

let sumar3;
sumar3 = imprimir2;