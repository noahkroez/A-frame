
var rotationSpeed = 0.001;
var myOtherBox = document.getElementById('myOtherBox');


function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z += rotationSpeed/2;
	//console.log(myOtherBox.object3D.rotation);
}
setInterval(spin, 20);


myOtherBox.addEventListener('mouseenter', function(){
	rotationSpeed = 0.05;
	console.log('entered');
	myOtherBox.object3D.position.set(2,4,-3);
});

myOtherBox.addEventListener('mouseleave', function(){
	rotationSpeed = 0.001;
	console.log('left');
	myOtherBox.object3D.position.set(2,1,-3);
});




/*
 * click-events can use a fuse (default on mobile). So the event only fires, if the cursor is on the object for a specified time. 
 */

var growspeed = 1.5;

function grow(){
	myOtherBox.object3D.scale.x *= growspeed;
	myOtherBox.object3D.scale.y *= growspeed;
	myOtherBox.object3D.scale.z *= growspeed;
	//console.log(myOtherBox.object3D.scale);
}

myOtherBox.addEventListener('click', function(){ // uses a fuse
	grow();
	console.log('grew');
});