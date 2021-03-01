let cards = [];
let types = ["t", "c", "p", "h"];
let playCards = cards;
let caf = [];
let poinchet = new Image();
let poster = new Image();
let jette = new Image();
let back = new Image();
let etat;
function setup() {
    jette.src = "cards/jette.png";
    poster.src = "cards/toPose.png";
    poinchet.src = "cards/draw.png";
    back.src = "cards/back.png";
    let k = 0;

    for (let t = 0; t < 3; t++) {
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j <= 13; j++) {
                cards.push(new Card(j, types[i], 0, 0));
                cards[k].getCard();
                k++;
            }
            if (t == 0) {
                cards.push(new Card(0, 0));
                cards[k].getCard();
                k++;
            }
        }
    }
}
setup();
function begin() {

    for (let j = 0; j < 15; j++) {
        let random = Math.floor(Math.random() * (playCards.length - 1));
        caf.push(playCards[random]);
        playCards.splice(random, 1);
    }

}
begin()
function click() {
    if (caf.length == 14) {
        c.drawImage(poinchet, 850, 700, 100, 80); // tejbed
        etat = "draw";
    } else if (hovered.length == 1) {
        c.drawImage(jette, 850, 700, 100, 80); // tarmi
        etat = "throw"
    } else if (hovered.length > 2) {
        c.drawImage(poster, 850, 700, 100, 80); // tefrech
        etat = "post"
    } else
        etat = null;

}
window.addEventListener("mousedown", (event) => {
    // alerts
    if (event.clientX > 850 && event.clientX < 950 && event.clientY < 780 && event.clientY > 700) {
        if (etat != null) {
            if (etat == "draw") {
                this.console.log("draw")
            } else if (etat == "throw") {
                this.console.log("throw")
            } else if (etat == "post") {
                this.console.log("post")
            }
        }
    }
    // poicher

});
function checkForBakou() {
    let sortType = [];
    let colorType = [];
    let b1 = true, b2 = true, b3 = true, b4 = true;
    hovered.forEach((elm) => {
        colorType.push(elm.type)
        sortType.push(elm.number)
    });
    sortType.sort((a, b) => { a - b })
    for (let i = 0, k = sortType[0]; i < sortType.length; i++) {
        if (k + i != sortType[i])
            b1 = false; // perfectly sorted
        if (b2 && k != sortType[i])
            b2 = false; // all the same number
        if (b3 && colorType[0] != colorType[i])
            b3 = false; // all the same type
    }
    //console.log(b3)
    b4 = 0 == colorType.filter((item, index) => colorType.indexOf(item) != index) // no duplication
    if (b2 && b4) {
        console.log("bako mt3 kifkif")
    } else if (b1 && b3) {
        console.log("bako mt3 croi")
    }
    // we did it :)
}
