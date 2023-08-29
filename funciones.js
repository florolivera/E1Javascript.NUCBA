// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.


function parImpar(numero)
{
    var consulta = numero % 2;
    if(consulta == 0)
    {
        console.log("es par");
    }
    else
    {
        console.log("es impar");
    }
}

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, 
// y si ninguno lo es, indicar por consola que son iguales.

function mayor(numero1, numero2)
{
    if(numero1 > numero2)
    {
        console.log(numero1 + " es mayor");
    }
    else if (numero2 > numero1)
    {
        console.log(numero2 + " es mayor")
    }
    else
    {
        console.log("son iguales");
    }
}

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiploCinco(numero)
{
    var multiplo = numero % 5;

    if(multiplo == 0)
    {
        console.log(numero + " es multiplo de 5");
    }
    else
    {
        console.log(numero + "no es multiplo de 5");
    }
}

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el
//  0 hasta llegar a ese número.

function desdeCero(numero)
{
    for (let index = 0; index <= numero; index++)
    {
        console.log(index);
    }
}

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  
// esa palabra la cantidad correspondiente al número indicado.
function palabraRepetida(palabra, numero)
{
    for (let index = 0; index < numero; index++) 
    {
        console.log(palabra);
    }
}


// 6 - Crear una función que rarrayeciba un array por parámetro e imprima por consola todos los valores de ese array.
function arrayValores(myArray)
{
    for (let index = 0; index < myArray.length; index++) {
        console.log(myArray[index]);
        
    }
}

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array,
//  menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function arrayNumeros(array)
{
    for (let index = 0; index < 10; index++) {
        if(index != 4)
        {
            console.log(array[index]);
        }
        
    }

}

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada
//  número del array multiplicado por el número pasado por parámetro.

function multiplicarArray(myArray, numero)
{
    for (let index = 0; index < myArray.length; index++) {
        console.log(myArray[index] * numero);
        
    }
}
