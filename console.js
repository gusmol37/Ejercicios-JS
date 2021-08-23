/*var numb = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0]
for (var i = 0; i < numb.length; i++) {
   if ( numb[i] > 3) {
    console.log(numb[i])
   }   
           
}*/

/*var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
*/



/* var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a); */

/*var dispositivo = {
  tipo: "Laptop",
  marca: "Toshiba",
  modelo: "MBL2400",
  OS: "Linux",
  RAM: "16 GB",

}

console.log(dispositivo.tipo,dispositivo.marca,dispositivo.modelo,dispositivo.OS,dispositivo.RAM,);
console.log(dispositivo.tipo);
console.log(dispositivo.marca);
console.log(dispositivo.modelo);
console.log(dispositivo.OS);
console.log(dispositivo.RAM);*/



var dispositivo = {
  tipo: "Laptop",
  marca: "Toshiba",
  modelo: "MBL2400",
  OS: "Linux",
  RAM: "16 GB",
}
console.log(dispositivo);
delete dispositivo.OS;
console.log(dispositivo);