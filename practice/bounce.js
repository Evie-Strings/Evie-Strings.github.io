const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

let vx = 1;
let vy = 2;
let gravity = 1;

function animate () {
    ctx.clearRect(0,0,800,800);
    x = x + vx;
    y = y + vy;
    vy = vy + gravity;

    if (x > 700 || x < 0) {
        vx = vx * -1;
    }
    if (y > 700 || y < 0) {
        vy = vy * -1;
    }
    ctx.fillRect(x,y,100,100);
    requestAnimationFrame(animate);
}

animate ();