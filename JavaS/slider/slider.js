var slides=new Array("shibert3.jpg", "shibert4.jpg", "shibert2.jpg", "shibert1.jpg");
var tam=slides.length;
var satual=1;
var tmpSlider;

function trocaAutomatica(){
	satual++;
	if (satual >= tam) {
		satual=0;
	}
	document.getElementById("dvSlider").style.backgroundImage="url('"+slides[satual]+"')";
}

function iniciaSlider(){
	document.getElementById("dvSlider").style.backgroundImage="url('"+slides[satual]+"')";
	tmpSlider=setInterval(trocaAutomatica,3000);
}

function parar(){
	clearInterval(tmpSlider);
}

function troca(dir){
	satual+=dir;
	if(satual <0){
		satual=2;
	}
	else if (satual >= tam){
		satual=0;
	}
	document.getElementById("dvSlider").style.backgroundImage="url('"+slides[satual]+"')";
	clearInterval(tmpSlider);
	tmpSlider=setInterval(trocaAutomatica,3000);
}