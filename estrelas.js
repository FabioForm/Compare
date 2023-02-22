var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [];
var count = 100;

for (var i = 0; i < count; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random(),
    vx: -0.5 + Math.random(),
    vy: -0.5 + Math.random()
  });
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  context.globalCompositeOperation = 'lighter';
  
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
    
    context.fillStyle = '#fff';
    context.beginPath();
    context.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    context.fill();
    
    s.x += s.vx;
    s.y += s.vy;
    
    if (s.x < -s.radius) s.x = canvas.width + s.radius;
    if (s.y < -s.radius) s.y = canvas.height + s.radius;
    if (s.x > canvas.width + s.radius) s.x = -s.radius;
    if (s.y > canvas.height + s.radius) s.y = -s.radius;
  }
  
  requestAnimationFrame(draw);
}

draw();
