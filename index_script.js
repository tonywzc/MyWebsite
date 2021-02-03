document.getElementById("myImage").innerHTML = "Hello Spongebob!";
document.getElementById("myImage").animate([
    // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-300px)' }
  ], {
    // timing options
    duration: 1000,
    iterations: Infinity
  });