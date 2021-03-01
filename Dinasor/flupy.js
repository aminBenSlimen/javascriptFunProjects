
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
var line = 400;
function Dinasour() {
    this.x = 0;
    this.y = 0;
    this.v = 0;
    this.gravity = 0.3;
    this.maxVelocity = 3;
    this.minVelocity = -3;
    this.jumpForce = -13;
    this.updateDinasorPos = function () {
        if (this.v < this.maxVelocity)
            this.v += this.gravity;
        if (this.y + 50 < line)
            this.y += this.v;

        // if (this.v < this.minVelocity)
        //     this.v = -8;

    }
    this.jump = function () {

        console.log(this.y + 50);
        if (Math.abs(this.y + 50 - line) < 2) {
            this.v = this.jumpForce;

        }

    }
    this.draw = function () {
        c.fillRect(this.x, this.y, 50, 50)
    }
}
d = new Dinasour();

function draw() {
    requestAnimationFrame(draw);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillRect(0, line, canvas.width, 2)
    d.draw()
    window.addEventListener("keydown", function (event) {  // press space button
        if (event.keyCode == 32) {
            d.jump();
        }
    });
    d.updateDinasorPos();


}
draw();