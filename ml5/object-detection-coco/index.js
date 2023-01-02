let img
let detector

function preload() {
    img = loadImage('images/bird.jpeg')
    detector = ml5.objectDetector('cocossd')
}

function gotDetections(error, results) {
    if (error) {
        console.error(error)
    }
    console.log(results)
    for (let i = 0; i < results.length; i++) {
        let object = results[i]
        stroke(0, 234, 0)
        strokeWeight(3)
        noFill()
        rect(object.x, object.y, object.width, object.height)
        fill(255)
        textSize(24)
        text(object.label, object.x + 10, object.y + 24)
    }
}

function setup() {
    createCanvas(640, 480);
    image(img, 0, 0, height, width)
    detector.detect(img, gotDetections)
}

