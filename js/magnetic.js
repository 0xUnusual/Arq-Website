class Magnetic {
  constructor() {
    this.magneticElements = document.querySelectorAll('.magnetic');
    this.init();
  }

  init() {
    if (window.matchMedia('(pointer: coarse)').matches) return; // Disable on touch devices

    this.magneticElements.forEach(el => {
      el.addEventListener('mousemove', (e) => this.moveElement(e, el));
      el.addEventListener('mouseleave', (e) => this.resetElement(e, el));
    });
  }

  moveElement(e, el) {
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center
    const x = (e.clientX - centerX) * 0.4; // 0.4 is the magnetic strength
    const y = (e.clientY - centerY) * 0.4;

    // Apply transformation to the element
    el.style.transform = `translate(${x}px, ${y}px)`;
    
    // If there's a child element (like text or icon), move it more for a parallax effect
    const text = el.querySelector('.magnetic-text') || el.querySelector('span') || el.querySelector('i');
    if (text) {
      text.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
    }
  }

  resetElement(e, el) {
    // Reset position with a smooth transition
    el.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
    el.style.transform = `translate(0px, 0px)`;
    
    const text = el.querySelector('.magnetic-text') || el.querySelector('span') || el.querySelector('i');
    if (text) {
      text.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
      text.style.transform = `translate(0px, 0px)`;
    }

    // Remove transition after it's done to avoid lag during next move
    setTimeout(() => {
      el.style.transition = '';
      if (text) text.style.transition = '';
    }, 500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Magnetic();
});
