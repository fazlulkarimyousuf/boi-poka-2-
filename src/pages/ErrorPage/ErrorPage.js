// /scripts/luxury.js

window.luxuryBackgroundAnimation = function (elementId) {
  const bg = document.getElementById(elementId);
  if (!bg) return;

  let angle = 0;

  function animate() {
    angle += 0.015;
    const x = Math.sin(angle) * 50 + 50;
    const y = Math.cos(angle) * 50 + 50;
    bg.style.backgroundPosition = `${x}% ${y}%`;
    requestAnimationFrame(animate);
  }

  animate();
};
