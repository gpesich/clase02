let mensaje = "Hola Mundo"
console.log(mensaje)

let contador = 0
let body = document.querySelector("body")

body.addEventListener("click",function(){
	console.log("Se han hecho "+contador+" clicks!");
	contador = contador+1
})