//1)Escribir una función que enumere los valores de un array indicando la posición en la que se encuentran

let listaDeNumeros = [2,4,6,8,10,400,333];

listaDeNumeros.forEach (function (valor, indice, array){
console.log (" En el índice "  + indice + " hay este valor:" + valor);

})

//Escribir una funcion que me devuelva el numero mas alto de una lista

function numeroMasAltoDeLista(lista){    
    let numeroMasAlto = 300
    lista.forEach(element => {
              
        if(element > numeroMasAlto){
            numeroMasAlto = element
        }
    });
    
    return numeroMasAlto
}

console.log (numeroMasAltoDeLista (listaDeNumeros))


//Escribir una funcion que me devuelva el numero mas bajo de una lista

function numeroMasBajoDeLista(lista){    
    let numeroMasAlto = 800
    lista.forEach(element => {
              
        if(element < numeroMasAlto){
            numeroMasAlto = element
        }
    });
    
    return numeroMasAlto
}

console.log (numeroMasBajoDeLista (listaDeNumeros))


// Escribir una función que tome por parámetro una lista de enteros y calcular el promedio

          
function promedio(listaDeNumeros){
    
    let suma= lista.reduce (function (valoresAcumulados = 0, nuevoElemento){
        return valoresAcumulados + nuevoElemento;

    });

    let mediaDeLista = (suma / listaDeNumeros.lengt); 

}

console.log (promedio)
           










