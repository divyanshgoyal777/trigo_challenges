const r = require("raylib");

const HEIGHT = 400;
const WIDTH = 400;
const TITLE = "Circle Points";
const FPS = 60

const circle = {
    points: 12,
    radius: 150,
    x: 200,
    y: 200
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(HEIGHT, WIDTH, TITLE);
    r.SetTargetFPS(FPS);
}

function drawCirclePoint(x, y) {
    r.DrawCircle(x, y, 10, r.RED);
}

function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawCircleLines(circle.x, circle.y, circle.radius, r.WHITE);

    const gap = 360 / circle.points;

    for (let i = 0; i < circle.points; i++) {
        const angle = i * gap;
        const radians = angle * Math.PI / 180;
        const pointX = circle.x + circle.radius * Math.cos(radians);
        const pointY = circle.y + circle.radius * Math.sin(radians);
        drawCirclePoint(pointX, pointY);
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