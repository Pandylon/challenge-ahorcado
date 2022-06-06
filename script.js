var start=document.getElementById("boton-inicio");
start.addEventListener("click",inicio);
var verificar=document.getElementById("boton");
verificar.addEventListener("click",comprobar);









   

var palabras=["mesa","casa","arbol","sillon","mate","termo","heladera"];

var palabraA
var palabrao
var vidas;
var canvas;
var letrasusadas;
var btn=document.getElementById("btnIngresarPalabra");
        btn.addEventListener("click", ingresePalbabra);

function ingresePalbabra(){
    
        
        var input =document.getElementById('input-nueva-palabra');
        
        
        if(!input.checkValidity()) {
          alert('El campo no es válido,solo letra Mayúscula.');
        } else {
           
            palabras.push(input.value);
            console.log(palabras)
            
            document.getElementById("input-nueva-palabra").style.display="none";
            document.getElementById("btnIngresarPalabra").style.display="none";
            document.getElementById("img").style.display="none";
            start.style.display="block";
        }

      
 }





function inicio(){
    
    start.style.display="block";
    document.getElementById("vidas").style.display="none";
    document.getElementById("frase").style.display="block";
    document.getElementById("letra").style.display="block";
    document.getElementById("boton").style.display="block";
     palabraA="";
     palabrao="";
     vidas=5;
     letrasusadas=[];
     
     

palabrao=palabras[Math.floor(Math.random()*palabras.length)].toLowerCase();
for(var i=0; i<palabrao.length; i ++){
palabraA= palabraA + "_ "}
document.querySelector("#frase").innerHTML=palabraA;
document.querySelector("#vidas").innerHTML=vidas;
canvasIncio()
console.log(palabrao);
}






function comprobar(){
    
var letras=document.getElementById("letra").value.toUpperCase(); 
    
palabrao=palabrao.toUpperCase();
var nuevo="";



for(var i =0 ; i<palabrao.length; i++){
if(letras== palabrao[i]){
    nuevo=nuevo + letras + " ";
} else{nuevo= nuevo + palabraA[i*2]+ " ";

}}
if(nuevo==palabraA){
vidas--;
document.getElementById("vidas").style.display="block";
document.querySelector("#vidas").innerHTML= "Te quedan " + vidas + " vidas" ;
letrasusadas.push(letras);
document.getElementById("letras-usadas").innerHTML=letrasusadas;

dibujar();



}

palabraA=nuevo;
document.getElementById("frase").innerHTML=palabraA;




if(vidas==0){
alert("Fin del juego");
start.style.display="block";
}

if(palabraA.search("_")==-1){
alert("ganaste");
start.style.display="block";
console.log("ganaste");

}

document.getElementById("letra").value="";
document.getElementById("letra").focus();

    
}
console.log(palabras)

