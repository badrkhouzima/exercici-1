
function miFuncion(){
var nom = prompt("Si us plau, introdueix el teu nom:");
var cognom = prompt("Si us plau, introdueix el teu cognom:");
var edat = prompt("Si us plau, introdueix la teva edat:");
    let mensaje = document.getElementById("cajaTexto").value;//Recoger valor de un input text
    document.getElementById("mostrarDatos").innerHTML = mensaje + ": " + nom+ " " +  cognom + "i tinc, " + edat +" anys";//Dar valor por ejemplo a un párrafo
    window.alert( "=> " + "el meu nom és " + nom + "i el meu cognom és " + cognom + ", i tinc " + edat + " anys.");
    console.log("el meu nom és " + nom + "i el meu cognom és " + cognom + ", i tinc " +edat+ " anys.")
    
}

