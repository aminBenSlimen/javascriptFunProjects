const colors = ["#336b87", "#0F6b50"];
function Circle() {
  this.setup = (r) => {
    this.r = Math.random() * 3 + 2;
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight + this.r;
    this.xd = Math.random() * 2;
    this.yd = Math.random() * 2;
    this.realxd = this.xd;
    this.realyd = this.yd;
    this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  this.update = () => {
    if (Math.abs(this.xd - this.realxd) > 2) {
      let sign = Math.sign(this.realxd - this.xd);
      this.xd += 2 * sign;
    }

    if (Math.abs(this.yd - this.realyd) > 2) {
      let sign = Math.sign(this.realyd - this.yd);
      this.yd += 2 * sign;
    }

    if (this.x + this.r > window.innerWidth) {
      this.x = window.innerWidth - 10;
      this.xd *= -1;
      this.realxd *= -1;
    } else if (this.x - this.r < 0) {
      this.x = 10;
      this.xd *= -1;
      this.realxd *= -1;
    } else if (this.y + this.r > window.innerHeight) {
      this.y = window.innerHeight - 10;
      this.yd *= -1;
      this.realyd *= -1;
    } else if (this.y - this.r < 0) {
      this.y = 10;
      this.yd *= -1;
      this.realyd *= -1;
    }
    this.x += this.xd;
    this.y += this.yd;
  };

  this.draw = (ctx) => {
    ctx.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fill();
  };

  this.checkForCloseCircles = (circles, ctx) => {
    ctx.beginPath();
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    ctx.strokeStyle = "#" + randomColor;

    circles.forEach((circle) => {
      d = distance(this.x, this.y, circle.x, circle.y);
      if (d < 100) {
        ctx.lineWidth = 0.2;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(circle.x, circle.y);
      }
    });
    ctx.stroke();
  };
  this.checkForMouseColition = (Mx, My) => {
    d = distance(this.x, this.y, Mx, My);
    if (d < 100) {
      if (this.x > Mx) this.xd += 7;
      else if (this.x < Mx) this.xd -= 7;

      if (this.y > My) this.yd += 7;
      else if (this.y < My) this.yd -= 7;
    }
  };
  let distance = (x1, y1, x2, y2) => {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  };
}
