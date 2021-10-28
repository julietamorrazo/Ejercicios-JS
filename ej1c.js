//1)Escribir una función que tome por parámetro una lista de enteros calcular el promedio


let listaDeNumeros2 = [18, 5, 3, 12, 37, 100];
let a = mediaDeLista(listaDeNumeros2);

function mediaDeLista(ListaDeNumeros2) {
    let i = 0, suma = 0, lista = listaDeNumeros2.length;
    while (i < lista) {
        suma = suma + listaDeNumeros2[i++];
}
    return suma / lista;
}

console.log(a)



















