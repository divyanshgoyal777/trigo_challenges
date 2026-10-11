// const sketch = require("./sketch");
// const sketch = require("./circle_points")
// const sketch = require("./polygon");
// const sketch = require("./waves");
const sketch = require("./ellipse");

function loop() {
    while (sketch.running()) {
        sketch.update();
        sketch.draw();
    }
}

function main() {
    sketch.setup();
    loop();
    sketch.teardown();
}

main();