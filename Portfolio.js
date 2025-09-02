// Dynamic Black & Blue Gradient Animation
const body = document.body;
let gradientAngle = 0;

function animateGradient() {
    gradientAngle += 0.2;
    body.style.background = `linear-gradient(${gradientAngle}deg, #000000, #0d47a1, #000000)`;
    requestAnimationFrame(animateGradient);
}
animateGradient();

// Interactive Mouse Movement Effect
document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    body.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});

// Typing Effect for Frontend Developer
const roleText = "FRONTEND DEVELOPER";
const roleElement = document.getElementById("role");
let index = 0;

function typeEffect() {
    if (index <= roleText.length) {
        roleElement.textContent = roleText.slice(0, index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();