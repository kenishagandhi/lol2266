var mouseEvent="empty";
var lastX, lastY;


canvas=document.getElementById('canvas1');
ctx= canvas.getContext("2d");

color="blue";
widthofline=5;

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e)
{

    mouseEvent="mouse_up";

}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e)
{

    mouseEvent="mouse_leave";

}

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e)
{

    mouseEvent="mouse_down";

}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e)
{

    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouse_down")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;

        console.log("Last Position of X & Y coordinates=");
        console.log("X="+lastX +",Y="+lastY);
        ctx.moveTo(lastX, lastY);

        console.log("Current Position of X & Y coordinates=");
        console.log("X="+currentX +",Y="+currentY);
        ctx.lineTo(currentX, currentY);

        ctx.stroke();

    }
    lastX=currentX;
    lastY=currentY;
    
    

}