const r = require("raylib");

const WIDTH = 600;
const HEIGHT = 400;
const TITLE = "Sine and Cosine Waves";
const FPS = 60;

const originX = 50;
const originY = 200;

const graphWidth = 520;
const graphHeight = 100;
const step = 10;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);
}

function update() { }

function getScreenPoint(angle, isSine) {
    const value = isSine ? Math.sin(angle) : Math.cos(angle);

    return {
        x: originX + (angle / (2 * Math.PI)) * graphWidth,
        y: originY - value * graphHeight
    };
}

function drawWave(isSine, color) {
    let previous = getScreenPoint(0, isSine);

    for (let x = step; x <= graphWidth; x += step) {
        const angle = (x / graphWidth) * 2 * Math.PI;
        const current = getScreenPoint(angle, isSine);

        r.DrawLine(previous.x, previous.y, current.x, current.y, color);
        previous = current;
    }
}

function drawMarker(angle, isSine, color) {
    const point = getScreenPoint(angle, isSine);
    r.DrawCircle(Math.round(point.x), Math.round(point.y), 5, color);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawLine(originX, 20, originX, HEIGHT - 20, r.WHITE);
    r.DrawLine(originX, originY, WIDTH - 20, originY, r.WHITE);

    r.DrawText("1", originX - 20, originY - graphHeight - 8, 16, r.WHITE);
    r.DrawText("0", originX - 20, originY - 8, 16, r.WHITE);
    r.DrawText("-1", originX - 25, originY + graphHeight - 8, 16, r.WHITE);

    drawWave(true, r.BLUE);
    drawWave(false, r.ORANGE);

    drawMarker(0, true, r.BLUE);
    drawMarker(Math.PI, true, r.BLUE);
    drawMarker(2 * Math.PI, true, r.BLUE);
    drawMarker(Math.PI / 2, true, r.BLUE);
    drawMarker(3 * Math.PI / 2, true, r.BLUE);

    drawMarker(0, false, r.ORANGE);
    drawMarker(Math.PI, false, r.ORANGE);
    drawMarker(2 * Math.PI, false, r.ORANGE);
    drawMarker(Math.PI / 2, false, r.ORANGE);
    drawMarker(3 * Math.PI / 2, false, r.ORANGE);

    r.DrawText("Sine", 500, 40, 18, r.BLUE);
    r.DrawText("Cosine", 500, 65, 18, r.ORANGE);

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