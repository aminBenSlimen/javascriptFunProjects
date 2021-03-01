var canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var c = canvas.getContext("2d");
let circles = [];
const nbCircles = 1500;
let Mx, My;
const draw = () => {
  c.clearRect(0, 0, innerWidth, innerHeight);
  circles.forEach((circle) => {
    circle.checkForCloseCircles(circles, c);
    circle.checkForMouseColition(Mx, My);
    circle.update();
    circle.draw(c);
  });
  requestAnimationFrame(draw);
};

const setup = () => {
  for (let i = 0; i < nbCircles; i++) {
    let c = new Circle();
    c.setup();
    circles.push(c);
  }
};

window.addEventListener("mousemove", (event) => {
  Mx = event.clientX;
  My = event.clientY;
});
setup();
draw();
