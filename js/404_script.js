//document.getElementById("myImage").innerHTML = "Hello Spongebob!";

var imgObj = null;

window.onload = init;
            
function init() {
   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'relative'; 
   imgObj.style.left = '0px'; 
}
function moveRight() {
    document.getElementById("myImage").style.left = parseInt(document.getElementById("myImage").style.left) + 150 + 'px';
}

