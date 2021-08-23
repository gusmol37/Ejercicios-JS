const gasto_max = 200;
const impuesto = 0.08;
const precio = 99.99;
const costo accesorio = 9.99;
var saldo = 303.91;
var cantidad = 0;
function calculoImpuesto (amount) {
 return cantidad * impuesto;
}
function formatoFuente(cantidad) {
 return "$" + cantidad.toFixed( 2 );
}

while (cantidad < saldo) {

 cantidad = cantidad + precio;
 
 if (cantidad < gasto_max) {
    cantidad = cantidad + costo accesorio;
 }
}

cantidad = cantidad + calculoImpuesto( cantidad );
console.log(
 "Your purchase: " + formatoFuente( cantidad )
);


if (cantidad > saldo) {
 console.log(
 "You can't afford this purchase. :("
 );
}
