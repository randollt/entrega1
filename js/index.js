window.alert("Bienvenido con esta App usted puede cotizar el Dolar/Pesos");

const COTIZACION_DOLAR = 220;
const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;
const cotizarPesos = (dolar) => dolar * COTIZACION_DOLAR;

function seleccion() {
  let seleccionado = prompt(
    "SELECCIONAR COTIZACION \n 1 - DOLARES A PESOS \n 2 -  PESOS A DOLAR "
  );
  let valor = prompt("Por favor ingrese el monto que desea cotizar");
  switch (seleccionado) {
    case "1":
      alert(cotizarPesos(valor));
      break;
    case "2":
      alert(cotizarDolar(valor));
      break;
    default:
      alert("Por favor seleccione una de las opciones");
    break;
  }
}
seleccion();

function repreguntar() {
  let repregunta = prompt("Quieres realizar una nueva cotización? \n 1 - SI \n 2- NO ");

  if (repregunta == "SI" || repregunta == "1") {
    seleccion();
  } else if (repregunta == "NO" || repregunta == "2") {
    alert("Gracias por utilizar nuestros servicios");
  }
}
repreguntar();
repreguntar();