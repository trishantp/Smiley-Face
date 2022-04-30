canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "grey".
    Use lineWidth and set the width to 1.
    Use rect() to create a rectangle at 150 and 143
with 430 width and 200 height.
*/



/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "blue".
    Use lineWidth and set the width to 5.
    Use arc() to create a circle at x = 150 and y = 143
with 40 as radius, 0 startAngle and 2 * Math.PI endAngle.
*/

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(300,200, 47, 0, 2 * Math.PI);
ctx.stroke();

// Similarly, create a black circle with position 350 and 210
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(390,300, 200, 0, 2 * Math.PI);
ctx.stroke();

// Similarly, create a red circle with position 210 and 40
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(480, 200, 47, 0, 2 * Math.PI);
ctx.stroke();


// Similarly, create a green circle with position 400 and 250
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(388, 290, 40, 31, 7 * Math.PI);
ctx.stroke();