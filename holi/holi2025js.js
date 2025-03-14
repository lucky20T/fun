// // Initialize Particles.js
// particlesJS("particles-js", {
//     particles: {
//         number: { value: 150 },
//         size: { value: 5 },
//         move: { speed: 2 },
//         color: { value: ["#ff0000", "#ff7300", "#fffb00", "#00ff04", "#0091ff", "#ff00ff"] },
//         line_linked: { enable: false }
//     }
// });

// // Fireworks Effect
// document.getElementById("wishButton").addEventListener("click", function() {
//     createFireworks();
//     playHoliMusic();
// });

// // Function to create fireworks effect
// function createFireworks() {
//     const canvas = document.getElementById("canvas");
//     const ctx = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     let particles = [];

//     function Particle(x, y, color) {
//         this.x = x;
//         this.y = y;
//         this.size = Math.random() * 6 + 2;
//         this.speedX = (Math.random() - 0.5) * 6;
//         this.speedY = (Math.random() - 0.5) * 6;
//         this.color = color;
//         this.life = 50;
//     }

//     Particle.prototype.update = function() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//         this.life--;
//     };

//     Particle.prototype.draw = function() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         ctx.fill();
//     };

//     function createParticles(x, y) {
//         for (let i = 0; i < 30; i++) {
//             let color = ["#ff0000", "#ff7300", "#fffb00", "#00ff04", "#0091ff", "#ff00ff"][Math.floor(Math.random() * 6)];
//             particles.push(new Particle(x, y, color));
//         }
//     }

//     function animate() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         particles.forEach((particle, index) => {
//             particle.update();
//             particle.draw();
//             if (particle.life <= 0) {
//                 particles.splice(index, 1);
//             }
//         });
//         requestAnimationFrame(animate);
//     }

//     setInterval(() => createParticles(Math.random() * canvas.width, Math.random() * canvas.height), 500);
//     animate();
// }

// Function to play Holi music
document.addEventListener("DOMContentLoaded", function() {
    // Particle Effect Initialization
    particlesJS("particles-js", {
        particles: {
            number: { value: 80 },
            shape: { type: "circle" },
            size: { value: 4 },
            color: { value: ["#FF0000", "#FF7300", "#FFFB00", "#00FF04", "#0091FF", "#FF00FF"] },
            move: { enable: true, speed: 2 }
        }
    });

    // Play Music & Show Message
    
});



