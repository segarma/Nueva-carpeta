const prompt=require("prompt-sync")();
let nota,total,media;
total=0;
console.clear();
console.log("CALIFICACIÓN DE ALUMNOS\nRango de notas 0-20")
console.log("");
for (var i=1;i<6;i++){
    nota=parseInt(prompt("Introduzca nota "+i+":"));
    total=total+nota;
}
media=total/(i-1);
console.log("");
console.log("Tu nota media es: ",media)
if(media>=13){
    console.log("Enhorabuena, has aprobado.");
}
else{
    console.log("Lo siento, has suspendido.");
}