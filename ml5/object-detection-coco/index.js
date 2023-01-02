let video
let detector
let detections = []

function preload() {
    img = loadImage('images/bird.jpeg')
    detector = ml5.objectDetector('cocossd')
}

function gotDetections(error, results) {
    if (error) {
        console.error(error)
    }
    detections = results
    detector.detect(video, gotDetections)
}

function setup() {
    createCanvas(700, 500);
    // for video capture
    video = createCapture(VIDEO)
    video.size(640, 480)
    video.hide()
    detector.detect(video, gotDetections)
}

function draw() {
    image(video, 0, 0)
    if (detections != undefined && detections.length > 0) {
        for (let i = 0; i < detections.length; i++) {
            let object = detections[i]
            stroke(0, 234, 0)
            strokeWeight(3)
            noFill()
            rect(object.x, object.y, object.width, object.height)
            fill(255)
            textSize(24)
            text(object.label, object.x + 10, object.y + 24)
        }
    }
}
