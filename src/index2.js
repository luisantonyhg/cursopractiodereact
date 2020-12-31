import React from 'react';
import ReactDOM from 'react-dom';



// ----------------------------------------------------------
//                    EJEMPLOS N° 1
// -----------------------------------------------------------

// const jxs = <h1>Hola Platzi</h1>
// const container = document.getElementById('root');


// ----------------------------------------------------------
//                    EJEMPLOS N° 2
// -----------------------------------------------------------

// const elemento =  React.createElement
// (
// 'a',
// {
//   href: 'https://google.com'
// },
// 'Ir a google'
// );

// const container = document.getElementById('root');


// ----------------------------------------------------------
//                    EJEMPLOS N° 3
// -----------------------------------------------------------

// const nombre = 'Luis Antony';
// const que = React.createElement(
//   'h1',
//   {},
//   `Hola soy , ${nombre}`
// )
// const apellido = document.getElementById('root');

// ----------------------------------------------------------
//                    EJEMPLOS N° 4
// -----------------------------------------------------------

// const nombres = "Lui Antony Huamani Gonzales";
// const elementos = <h1> Hola ,{nombres} </h1>

// const containers = document.getElementById('root')
// ----------------------------------------------------------
//                    EJEMPLOS N° 5
// -----------------------------------------------------------

// const suma =  <h1>La suma de 2 x 9 es =  {2 * 9}</h1>
// const resultado = document.getElementById('root')

// ----------------------------------------------------------
//                    EJEMPLOS N° 6
// -----------------------------------------------------------

const suma1 = () => 2 * 9;
const elemento1 = <h1> La suma de 2+9 = {suma1()}</h1>
const resultado1 = document.getElementById('root');
// ----------------------------------------------------------
//                    EJEMPLOS N° 7
// -----------------------------------------------------------


ReactDOM.render(elemento1,resultado1);
