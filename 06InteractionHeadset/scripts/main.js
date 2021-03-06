
var rotationSpeed = 0.001;
var myOtherBox = document.getElementById('myOtherBox');
var myRotationBox = document.getElementById('myRotationBox');


function spin(){
	myRotationBox.object3D.rotation.x += rotationSpeed;
	myRotationBox.object3D.rotation.y += rotationSpeed;
	myRotationBox.object3D.rotation.z += rotationSpeed/2;
	//console.log(myOtherBox.object3D.rotation);
}
setInterval(spin, 20);


myOtherBox.addEventListener('mouseenter', function(){
	if (!myOtherBox.classList.contains('floating')) {
		myOtherBox.object3D.position.set(2,4,-3);
		myOtherBox.classList.add('floating');
	}
	setTimeout(function() {
		myOtherBox.object3D.position.set(2,1,-3);
		}, 1000);
	setTimeout(function() {
		myOtherBox.classList.remove('floating');
		}, 2000);
});

myRotationBox.addEventListener('mouseenter', function(){
	rotationSpeed = 0.05;
	console.log('entered');
});

myRotationBox.addEventListener('mouseleave', function(){
	rotationSpeed = 0.001;
	console.log('left');
	// myOtherBox.object3D.position.set(2,1,-3);
});




/*
 * click-events can use a fuse (default on mobile). So the event only fires, if the cursor is on the object for a specified time. 
 */

var growspeed = 1.5;

function grow(){
	myRotationBox.object3D.scale.x *= growspeed;
	myRotationBox.object3D.scale.y *= growspeed;
	myRotationBox.object3D.scale.z *= growspeed;
	//console.log(myOtherBox.object3D.scale);
}

myRotationBox.addEventListener('click', function(){ // uses a fuse
	grow();
	console.log('grew');
});