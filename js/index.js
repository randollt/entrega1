
window.alert("Bienvenido con esta App usted puede cotizar el Dolar/Pesos");

const COTIZACION_DOLAR = 220;
const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;
const cotizarPesos = (dolar) => dolar * COTIZACION_DOLAR;
let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - DOLARES A PESOS \n 2 -  PESOS A DOLAR ");
let valor = prompt("Por favor ingrese el monto que desea cotizar");
switch (seleccion) {
    case "1":
        alert(cotizarPesos(valor));
        break;
    case "2":
        alert(cotizarDolar(valor));
        break;
    default:
        break;
}