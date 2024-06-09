const prompt=require("prompt-sync")();
let tiempo,minutos,restantes;
console.clear();

tiempo=parseInt(prompt("Introduzca nº de segundos: "));

minutos=Math.trunc(tiempo/60);
restantes=tiempo%60;

console.log("Segundos calculados: ",tiempo);
console.log("Minutos completos: ",minutos);
console.log("Te quedan %ssg para completar el siguiente minuto.",restantes);
