
let backgroundimage = new Image();
backgroundimage.src = "cards/bg.png";
let playces = [];
let clicked = false;
let hovered = [];
let currentCart;
let xh;
let currentIndex;
window.addEventListener("mousedown", () => {
    for (let i = 0; i < caf.length; i++) {
        if (event.clientX < caf[i].x + 100 && event.clientX > caf[i].x) {
            if (event.clientY < caf[i].y + 140 && event.clientY > caf[i].y) {
                clicked = true;
                currentCart = caf[i];
                xh = currentCart.x;
                currentIndex = i;

            }
        }
    }
    if (currentCart && currentCart.w == 120) {
        currentCart.w *= 1.2;
        currentCart.h *= 1.2;
        currentCart.y -= 20;
    }
});

window.addEventListener("mousemove", (event) => {

    let closest = Infinity;
    let lastPos;
    let index;
    if (clicked) {
        currentCart.update(event.clientX - 50, event.clientY - 70)
        for (let i = 0; i < playces.length; i++) {
            if (Math.abs(currentCart.x - playces[i]) < closest) {
                lastPos = playces[i];
                index = i;
                closest = Math.abs(currentCart.x - playces[i])
            }
        }
        if (Math.abs(currentCart.x - lastPos) < 7) {
            if (caf[index] != currentCart)
                caf[index].update(xh, 800);
            xh = currentCart.x;
            let aux = caf[currentIndex];
            caf[currentIndex] = caf[index];
            caf[index] = aux;
            currentIndex = index;
        }

    }

})

window.addEventListener("mouseup", () => {
    let closest = Infinity;
    let lastPos;
    let index;
    if (clicked) {
        for (let i = 0; i < playces.length; i++) {
            if (Math.abs(currentCart.x - playces[i]) < closest) {
                lastPos = playces[i];
                index = i;
                closest = Math.abs(currentCart.x - playces[i])
            }
        }

        if (lastPos != xh || currentCart.x > 1180 || currentCart.x < 480) {//moved
            caf[index].update(xh, 800);
            caf[currentIndex].update(lastPos, currentCart.y);
            let aux = caf[currentIndex];
            caf[currentIndex] = caf[index];
            caf[index] = aux;
            let flag = false;
            for (let i = 0; i < hovered.length; i++) {
                if (hovered[i] == currentCart) {
                    flag = true;
                }
            }
            if (!flag) {
                currentCart.w /= 1.2;
                currentCart.h /= 1.2;
                if (currentCart.y != 800)
                    currentCart.y = 800; // must be updated fo place
            } else {
                currentCart.w = 120 * 1.2;
                currentCart.h = 190 * 1.2;
                currentCart.y = 780; // must be updated fo place
            }
        }
        else { // only cliked
            let flag = false;
            for (let i = 0; i < hovered.length; i++) {
                if (hovered[i] == currentCart) {
                    currentCart.w /= 1.2;
                    currentCart.h /= 1.2;
                    if (currentCart.y != 800)
                        currentCart.y = 800;
                    hovered.splice(i, 1);
                    flag = true;
                    break;
                }
            }
            if (!flag)
                hovered.push(currentCart);
        }
    }
    clicked = false
    click()
});

for (let i = 0; i < caf.length; i++) {
    if (caf[i] != undefined) {
        caf[i].x = i * 50 + 480;
        playces.push(caf[i].x);
    }
}
let stop = false;
function draw() {
    c.drawImage(backgroundimage, 0, 0, innerWidth, innerHeight);
    c.drawImage(back, 70, 150, 120, 190);
    // cards[5].y = 350;
    // cards[5].x = 70;
    for (let i = 0; i < caf.length; i++) {
        if (caf[i] === undefined)
            return
        caf[i].drawCard();
    }
    click()
    if (!stop)
        requestAnimationFrame(draw);

}
draw()


