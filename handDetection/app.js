const modelParams = {
    flipHorizontal: false,   // flip e.g for video 
    imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.79,    // confidence threshold for predictions.
}
let lastY = 0;
let x = 0, y = 0;
//navigator.getUserMedia;

const video = document.querySelector("video")
const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d");
let model;

handTrack.startVideo(video).then(statut => {
    if (statut) {

        navigator.getUserMedia({ video: {} }, stream => {
            video.srcObject = stream;
            update()
            //  context.clearRect(0, 0, innerWidth, innerHeight)
        },
            err => { console.error(err) })
    }
})

function update() {
    runDetaction();
    requestAnimationFrame(update)
}

function runDetaction() {
    model.detect(video).then(predection => {
        if (predection.length > 0) {
            x = predection[0].bbox[0] + predection[0].bbox[3] / 2;
            y = predection[0].bbox[1] + predection[0].bbox[3] / 2;
            //console.log(predection);
            model.renderPredictions(predection, canvas, context, video);
            // window.scrollBy(0, window.screenY + y);
            let def = y - lastY;
            window.scrollBy(0, window.screenY + def);
            lastY = y;

        }
    })
}

handTrack.load(modelParams).then(lmodel => { model = lmodel })