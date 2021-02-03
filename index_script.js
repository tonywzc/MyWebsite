document.getElementById("myImage").innerHTML = "Hello Spongebob!";

var SpongeTumbling = [
    { transform: 'rotate(0) translate3D(-50%, -50%, 0)'}, 
    { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)'}
  ];
  
  var SpongeTiming = {
    duration: 3000,
    iterations: Infinity
  }


document.getElementById("myImage").animate(
    SpongeTumbling,
    SpongeTiming
)