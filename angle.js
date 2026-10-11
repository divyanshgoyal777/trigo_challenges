const r = require("raylib");

const HEIGHT = 400;
const WIDTH = 600;
const TITLE = "Angle";
const FPS = 60

const points = {
    a: { x: 100, y: 300 },
    b: { x: 350, y: 150 },
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


function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const dx = points.b.x - points.a.x;
    const dy = points.b.y - points.a.y;
    const radians = Math.atan2(-dy, dx);
    const degrees = radians * (180 / Math.PI);

    r.DrawCircle(points.a.x, points.a.y, 5, r.WHITE);
    r.DrawCircle(points.b.x, points.b.y, 5, r.WHITE);
    r.DrawLine(points.a.x, points.a.y, points.b.x, points.b.y, r.RED);
    r.DrawLine(points.a.x, points.a.y, points.b.x, points.a.y, r.GREEN);
    r.DrawLine(points.b.x, points.a.y, points.b.x, points.b.y, r.BLUE);
    r.DrawText("A", points.a.x - 20, points.a.y + 10, 20, r.WHITE);
    r.DrawText("B", points.b.x + 10, points.b.y - 10, 20, r.WHITE);
    r.DrawText(`dx = ${dx}`, 180, 315, 18, r.GREEN);
    r.DrawText(`dy = ${Math.abs(dy)}`, 365, 220, 18, r.BLUE);
    r.DrawText(`Angle = ${degrees.toFixed(2)} degrees`, 20, 20, 22, r.WHITE);

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