const r = require("raylib");

const WIDTH = 1000;
const HEIGHT = 1000;
const TITLE = "Trigonometry Pattern";
const FPS = 60

let time = 0;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI)
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);
}

function update() {
    time += 0.02;
}

function getRadius(baseRadius, angle, time, pattern) {
    switch (pattern) {
        case "PATTERN1":
            return baseRadius + 90 * Math.sin(42 * angle + time) + 25 * Math.cos(24 * angle - time);
        case "PATTERN2":
            return baseRadius + 190 * Math.sin(2 * angle + time) + 215 * Math.cos(224 * angle - time);
        case "PATTERN3":
            return baseRadius + 190 * Math.sin(2 * angle + time) + 215 * Math.cos(24 * angle - time);
        case "PATTERN4":
            return baseRadius + 190 * Math.sin(2 * angle + time) + 215 * Math.cos(124 * angle - time);
        case "PATTERN5":
            return baseRadius + 190 * Math.sin(2 * angle + time) + 25 * Math.cos(124 * angle - time);
        case "PATTERN6":
            return baseRadius + 90 * Math.sin(2 * angle + time) + 25 * Math.cos(124 * angle - time);
        case "PATTERN7":
            return baseRadius + 0 * Math.sin(2 * angle + time) + 25 * Math.cos(124 * angle - time);
        default:
            return baseRadius + 910 * Math.sin(2 * angle + time) + 725 * Math.cos(124 * angle - time);
    }
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const centerX = 500;
    const centerY = 500;
    const baseRadius = 120;
    const points = 2000;
    const pattern = "PATTERN1"

    for (let i = 0; i < points; i++) {
        const step = (2 * Math.PI) / points;
        const angle = i * step;

        const red = Math.floor(127 + 128 * Math.sin(angle * 3));
        const green = Math.floor(127 + 128 * Math.sin(angle * 5));
        const blue = Math.floor(127 + 128 * Math.sin(angle * 7));
        const color = { r: red, g: green, b: blue, a: 255 };

        const radius = getRadius(baseRadius, angle, time, pattern);

        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        r.DrawCircle(x, y, 2.5, color);
    }

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};