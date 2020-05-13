

// changing individual properties with code and using setInterval
var rotationSpeed = 0.07;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 32); //equivalent to 60 fps