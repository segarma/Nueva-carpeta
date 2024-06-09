const prompt=require("prompt-sync")();
console.clear();
let valor,pFinal;

valor=parseInt(prompt("Introduzca valor del producto: "));
pFinal=valor*0.85;
console.log("");
console.log("Valor del producto: %s\nPrecio con descuento: %s",valor,pFinal);
