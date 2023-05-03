import React, { useEffect } from "react";

const CursorEffect = () => {
  useEffect(() => {
    const canvas = document.getElementById("cursorCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouseX = 200;
    let mouseY = 200;

    document.addEventListener("mousemove", (event) => {
      mouseX = event.clientX ;
      mouseY = event.clientY ;
    });

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${Math.random() * 10 + 10}, 100%, 50%)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const particles = [];

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.size <= 0.5) {
          particles.splice(index, 1);
        }
      });

      if (Math.random() < 0.5) {
        particles.push(new Particle(mouseX, mouseY));
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      id="cursorCanvas"
      style={{ position: "fixed",
       zIndex: 99999, 
       pointerEvents: "none",
       top: 0,
       left: 0,
       width: "100vw",
       height: "100vh"
     }}
    />
  );
};

export default CursorEffect;

