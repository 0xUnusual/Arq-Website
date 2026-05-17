class Transitions {
  constructor() {
    this.curtain = document.createElement('div');
    this.curtain.className = 'page-transition-curtain';
    document.body.appendChild(this.curtain);
    
    this.init();
  }

  init() {
    // Add styles for the curtain
    const style = document.createElement('style');
    style.innerHTML = `
      .page-transition-curtain {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--clr-text);
        z-index: 99999;
        transform: translateY(100%);
        pointer-events: none;
      }
      
      .page-transition-curtain.active {
        animation: curtainSwipe 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
      }

      @keyframes curtainSwipe {
        0% { transform: translateY(100%); }
        40% { transform: translateY(0); }
        60% { transform: translateY(0); }
        100% { transform: translateY(-100%); }
      }

      .page-transition-curtain.exit {
        transform: translateY(100%);
        animation: curtainClose 0.6s cubic-bezier(0.77, 0, 0.175, 1) forwards;
      }

      @keyframes curtainClose {
        0% { transform: translateY(100%); }
        100% { transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);

    this.bindLinks();
  }

  bindLinks() {
    document.querySelectorAll('a').forEach(link => {
      // Only internal links, not hashes or external
      if (
        link.hostname === window.location.hostname && 
        link.pathname !== window.location.pathname &&
        !link.getAttribute('href').startsWith('#') &&
        !link.target
      ) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          this.transitionTo(href);
        });
      }
    });
  }

  transitionTo(href) {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      // Prevent interactions during transition
      document.body.style.pointerEvents = 'none';
      
      // Slide the preloader back down to cover the screen
      preloader.style.transition = 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)';
      preloader.classList.remove('hidden');
      preloader.style.transform = 'translateY(0)';
      
      // Ensure the progress indicators look complete on transition out
      const bar = preloader.querySelector('.preloader-bar');
      const text = preloader.querySelector('.percentage-text');
      if (bar) bar.style.width = '100%';
      if (text) text.textContent = '100%';

      setTimeout(() => {
        window.location.href = href;
      }, 800);
    } else {
      this.curtain.classList.add('exit');
      setTimeout(() => {
        window.location.href = href;
      }, 600);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Transitions();
});
