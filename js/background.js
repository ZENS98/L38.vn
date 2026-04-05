const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let particleCount = 70;

/* resize canvas */

window.addEventListener("resize", () => {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});

/* tạo particle */

for (let i = 0; i < particleCount; i++) {

particles.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
vx: (Math.random() - 0.5) * 0.4,
vy: (Math.random() - 0.5) * 0.4,
size: Math.random() * 2 + 1
});

}

/* animation */

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

/* vẽ particle */

particles.forEach(p => {

p.x += p.vx;
p.y += p.vy;

/* đụng biên */

if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
if(p.y < 0 || p.y > canvas.height) p.vy *= -1;

/* vẽ hạt */

ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fillStyle = "rgba(200,169,106,0.8)";
ctx.fill();

});

/* vẽ line nối */

for(let i=0;i<particles.length;i++){

for(let j=i+1;j<particles.length;j++){

let dx = particles[i].x - particles[j].x;
let dy = particles[i].y - particles[j].y;
let distance = Math.sqrt(dx*dx + dy*dy);

if(distance < 120){

ctx.beginPath();
ctx.moveTo(particles[i].x,particles[i].y);
ctx.lineTo(particles[j].x,particles[j].y);

ctx.strokeStyle = "rgba(200,169,106,0.08)";
ctx.lineWidth = 1;
ctx.stroke();

}

}

}

requestAnimationFrame(animate);

}

animate();