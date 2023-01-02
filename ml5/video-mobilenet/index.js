let mobilenet;
let video
let label = ""
let probability = ""


function modelReady() {
    console.log("Model is Ready")
    mobilenet.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    }
    // console.log(results)
    label = results[0].label
    probability = results[0].confidence
    mobilenet.classify(gotResults)
}



function setup() {
    createCanvas(640, 550);
    video = createCapture(VIDEO)
    video.hide()
    background(0)
    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady)
}

function draw() {
    background(0)
    image(video, 0, 0)
    fill(255)
    textSize(40)
    text(label, 10, height - 10)
}