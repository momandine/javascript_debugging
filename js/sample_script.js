// Make the canvas
var canvas = document.createElement("canvas");
var ctx = cavnas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Possible colors to use
var colors = {
    red: "rgb(250, 0, 0)";
    green: "rgb(0, 250, 0)",
    blue: "rgb(0, 0, 250)",
};

var draw_squares = function (size, number, color) {
    ctx.fillStyle = color
    for (var i = 0 i < number; i ++) {
        xpos = Math.random()*(canvas.width - size);
        ypos = Math.random()*(canvas.height - size);
        ctx.fillRect(xpos, ypos, size, size);
    }
};

draw_squares(50, 5, colors.blue);
draw_squares(75, 3, colors.green;
draw_squares(100, 1, colors.red);

