const prompt=require("prompt-sync")();

let nota,suma;
suma=0;
for(let i=1;i<9;i++){
    nota=parseInt(prompt("Introduce nota "+i+":"));
    suma=suma+nota;
}
media=suma/8;
console.log("Tu nota media es: ",media);