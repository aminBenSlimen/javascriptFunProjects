
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
//canvas.style.backgroundImage="url(bg.png)";
//canvas.style.backgroundImage.size="cover";
var y = 100,
    speed = 3;
xr = 900,
    xrD = 900,
    yrD = (-250),
    score = 0,
    yr = (-250),
    dy = 2;
var audio = new Audio('baa.mp3');

var bird = new Image();
bird.src = "bird.png";
var ses = new Image();
ses.src = "ses.png";
var sesma9lob = new Image();
sesma9lob.src = "sesma9lob.png";
do {
    yr = (Math.random()) * (-500);
} while (yr > -120);
yrD = yr;
function draw() {
    requestAnimationFrame(draw);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.drawImage(bird, 200, y, 200, 200);
    c.fill();
    c.drawImage(sesma9lob, xr, yr, 250, 700);
    c.drawImage(ses, xr, yr + 1000, 250, 800);
    xr -= speed;
    window.addEventListener("keydown", function (event) {  // press space button
        if (event.keyCode == 32) {
            dy = -13;
        }
    });
    // if (jump) {
    //     dy = -13;
    // }
    c.drawImage(sesma9lob, xrD, yrD, 250, 700);
    c.drawImage(ses, xrD, yrD + 1000, 250, 800);
    if (xr < 350) {
        xrD = xr;
        setTimeout(function () { score++; }, 1500);
        if (score % 10 == 0 && score != 0) {
            speed += 1;
        }
        yrD = yr;
        xr = 900;
        do {
            yr = (Math.random()) * (-500);
        } while (yr > -120);
    } else {
        xrD -= speed;
    }
    y += dy;
    dy += .8;
    // console.log(y + "=" + Number(yrD+1700));
    if (xrD < 325 && xr > 600 && y < 625 + yrD || xrD < 325 && xr > 600 && y > 890 + yrD || y + 30 > innerHeight) {
        setTimeout(function () {
            y = 10;
        }, 30);
        // audio.play();

    }
    if (y < 0) {
        y = 10;
    }

    document.getElementById("score").innerHTML = "score :" + score;

}

draw();