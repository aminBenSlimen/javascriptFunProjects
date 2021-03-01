
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

function Card(number, type) {
    this.number = number;
    this.type = type;
    this.src;
    this.id = (this.number + this.type);
    this.image = new Image();
    this.x = 0;
    this.y = 800;
    this.w = 120;
    this.h = 190;

    this.getCard = function () {
        if (this.number != 0)
            this.src = "cards/" + this.number + this.type + ".png";
        else
            this.src = "cards/jocker.jpg";

        this.image.src = this.src;
    }

    this.drawCard = function () {
        c.beginPath();
        c.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    this.update = function (x1, y1) {
        this.x = x1;
        this.y = y1;
    };

}