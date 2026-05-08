class AnimationManager {
  constructor() {
    this.initCursor();
    this.initScrollReveal();
    this.initParallax();
    this.initStatsCounter();
  }

  initCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.custom-cursor-follower');
    
    if (!cursor || !follower) return;
    
    // Check if device supports hover
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    // Follower smooth animation
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
      
      requestAnimationFrame(animateFollower);
    };
    animateFollower();

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .service-item');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  initScrollReveal() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: Stop observing after reveal
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-fade, .image-reveal-wrapper, .stagger-children');
    revealElements.forEach(el => observer.observe(el));
  }

  initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-img');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.2;
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    }, { passive: true });
  }

  initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    if (stats.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endValue = parseInt(target.getAttribute('data-target'));
          const duration = 2000;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Easing out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(endValue * easeOutProgress);
            
            target.innerText = current + (target.getAttribute('data-suffix') || '');
            
            if (frame === totalFrames) {
              clearInterval(counter);
            }
          }, frameDuration);
          
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new AnimationManager();
});
