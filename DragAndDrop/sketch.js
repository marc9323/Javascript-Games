let draggable;

function preload() {

}

function setup() {
    createCanvas(640, 480);
    configDraggable = {
        x: 100,
        y: 100,
        w: 75,
        h: 50

    }

    draggable = new Draggable(configDraggable);

}

function draw() {
    background(0);
    draggable.update();
    draggable.over();
    draggable.show();
}

function mousePressed() {
    draggable.pressed();
}

function mouseReleased() {
    draggable.released();
}