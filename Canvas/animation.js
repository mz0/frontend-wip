const canvas = document.getElementById('screen1');
const context = canvas.getContext("2d");

let speed = 4;
let position = 0;
let moveSpeed = speed;
let radius = 40;

function moveBall() {
    if (640 < position + radius) {
        moveSpeed = -speed;
    } else if (position - radius < 0) {
        moveSpeed = speed;
    }
    position += moveSpeed;
}

function drawBall() {
    context.clearRect(0, 0, 640, 480);
    context.fillStyle = "#62687f";
    context.beginPath();
    context.arc(position, 50, radius, 0, 2 * Math.PI);
    context.fill();
}

function animate() {
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);