document.body.style.backgroundColor = "white";

const page = document.getElementById('body');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const brushRadius = (canvas.width / 100) * 5;

ctx.font = "30px Arial";
ctx.fillText("Scratch and good luck", 10, 50);

ctx.beginPath();
ctx.rect(200, 200, 500, 500);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
var box_num;
ctx.font = "12px Arial black";
for (box_num = 1; box_num <= 3; box_num++)
{
    ctx.rect(210+(box_num-1)*165, 220, 150, 150);
    ctx.fillStyle = "yellow";
    ctx.fillText("Scratch and good luck", 230+(box_num-1)*165, 220);
}
for (box_num = 4; box_num <= 6; box_num++)
{
    ctx.rect(210+(box_num-4)*165, 380, 150, 150);
    ctx.fillStyle = "yellow";
    ctx.fillText("Scratch and good luck", 10, 50);
}
for (box_num = 7; box_num <= 9; box_num++)
{
    ctx.rect(210+(box_num-7)*165, 540, 150, 150);
    ctx.fillStyle = "yellow";
    ctx.fillText("Scratch and good luck", 10, 50);
}
ctx.fill();
ctx.closePath();

ctx.beginPath();
for (box_num = 4; box_num <= 6; box_num++)
{
    ctx.rect(210+(box_num-4)*165, 380, 150, 150);
    ctx.fillStyle = "yellow";
}
ctx.fill();
ctx.closePath();

