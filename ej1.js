//1a)Escribir una función que tome por parámetro una lista de enteros encontrar el número más alto

var ListaDeEnteros = [1, 30, 55, 100, 102, 150,380];

var maxValor = Math.max.apply(null, ListaDeEnteros);
    
console.log(maxValor);
