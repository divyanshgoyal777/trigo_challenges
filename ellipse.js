const r = require("raylib");

const HEIGHT = 400;
const WIDTH = 600;
const TITLE = "Ellipse";
const FPS = 60

const ellipse = {
    hRadius: 200,
    vRadius: 100,
    x: 300,
    y: 200,
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);
}

function update() { }

function calcFourMainPoints(e) {
    return {
        left: { x: e.x - e.hRadius, y: e.y, },
        right: { x: e.x + e.hRadius, y: e.y, },
        top: { x: e.x, y: e.y - e.vRadius, },
        bottom: { x: e.x, y: e.y + e.vRadius, }
    }
}

function calcEllipsePoints(e) {
    const points = [];
    const gap = 1;

    for (let i = 0; i < 360; i++) {
        const angle = i * gap;
        const radians = angle * Math.PI / 180;
        const pointX = e.x + Math.cos(radians) * e.hRadius;
        const pointY = e.y + Math.sin(radians) * e.vRadius;

        points.push({ x: pointX, y: pointY });
    }
    return points;
}

function drawEllipsePoint(x, y) {
    r.DrawCircle(x, y, 2, r.RED);
}

function drawMainPoints(point) {
    r.DrawCircle(point.x, point.y, 5, r.WHITE);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const points = calcEllipsePoints(ellipse);

    for (const point of points) {
        drawEllipsePoint(point.x, point.y);
    }

    const mainPoints = calcFourMainPoints(ellipse);

    for (const key in mainPoints) {
        drawMainPoints(mainPoints[key]);
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