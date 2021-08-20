let secciones = [];
let botones_menu = [];
let botones_volver;
let opciones;
let respuestas = [4,3];
let pregunta_actual = 0;

window.onload = inicio;

function inicio(){
	iniciarVariables();
	asignarEventosMenu();
	asignarVolver();
	asignarBotonesJuego();
	setTimeout(function(){
		irA(1);
	},1000);
}

function asignarVolver(){
	botones_volver = document.querySelectorAll(".volver");
	for(var i of botones_volver)
	{
		i.addEventListener("click",function(evento){
			evento.preventDefault();
			irA(1);
		});
	}
}

function asignarBotonesJuego(){
	opciones = document.querySelectorAll(".opcion");
	for(var i of opciones)
	{
		i.addEventListener("click",function(evento){
			
			if(evento.target.id.split("_")[1] == respuestas[pregunta_actual])
			{
				alert("Respuesta correcta");
				pregunta_actual++;
				foto_juego.src='imgs/Drawing-icon.png';
				respuesta_1.innerHTML = "Picaso";
				respuesta_2.innerHTML = "Frida";
				respuesta_3.innerHTML = "Debora";
				respuesta_4.innerHTML = "Pedro Nel";
				//Actualizar interfaz
			}
			else{
				alert("Error, respuesta incorrecta");
			}
		});
	}
}

function ocultar(){
	for (var i = 0; i < secciones.length; i++) 
	{
		secciones[i].classList.add("ocultar"); 
	}
}
function irA(id){
	if(id<0 || id>=secciones.length)
	{
		return;
	}
	ocultar();
	secciones[id].classList.remove("ocultar");
	
}

function iniciarVariables(){
	secciones.push(document.getElementById("splash"));
	secciones.push(document.getElementById("home"));
	secciones.push(document.getElementById("juego"));
	secciones.push(document.getElementById("creditos"));
	secciones.push(document.getElementById("instrucciones"));
	botones_menu.push(document.getElementById("item_juego__2"));
	botones_menu.push(document.getElementById("item_instrucciones__3"));
	botones_menu.push(document.getElementById("item_creditos__4"));
}

function asignarEventosMenu(){
	for(var i of botones_menu)
	{
		//console.log(secciones[i],i);
		i.addEventListener("click",function(evento){
			//console.log(event.target);
			let seccion = evento.target.id.split("__")[1];
			irA(seccion);
		});
	}
}

function validarPregunta(){
	//Drawing-icon.png
}