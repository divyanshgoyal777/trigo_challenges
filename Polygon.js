const r = require("raylib");

const HEIGHT = 400;
const WIDTH = 400;
const TITLE = "Regular Polygon";
const FPS = 60

const polygonX = 200;
const polygonY = 200;
const polygonRadius = 150;
const polygonSides = 7;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(HEIGHT, WIDTH, TITLE);
    r.SetTargetFPS(FPS);
}

function drawPolygonPoint(x, y) {
    r.DrawCircle(x, y, 10, r.RED);
}

function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawCircleLines(polygonX, polygonY, polygonRadius, r.WHITE);

    const gap = 360 / polygonSides;
    const vertices = [];

    for (let i = 0; i < polygonSides; i++) {
        const angle = i * gap;
        const radians = angle * Math.PI / 180;
        const pointX = polygonX + polygonRadius * Math.cos(radians);
        const pointY = polygonY + polygonRadius * Math.sin(radians);
        vertices[i] = { pointX, pointY };
        drawPolygonPoint(pointX, pointY);
    }

    for (let i = 0; i < vertices.length; i++) {
        r.DrawLine(vertices[i].pointX, vertices[i].pointY, vertices[(i + 1) % vertices.length].pointX, vertices[(i + 1) % vertices.length].pointY, r.RED);
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