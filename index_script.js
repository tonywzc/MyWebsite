document.getElementById("myImage").innerHTML = "Hello Spongebob!";
document.getElementById("myImage").animate([
    // keyframes
    { transform: 'rotate(360deg)' }
  ], {
    // timing options
    duration: 1000,
    iterations: Infinity
  });