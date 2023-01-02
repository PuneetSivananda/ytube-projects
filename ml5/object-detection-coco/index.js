let img

function preload() {
    img = loadImage('images/puffin.jpg')
}

function setup() {
    createCanvas(640, 480);
    image(img, 0, 0, height, width)
    // background(0)
}

