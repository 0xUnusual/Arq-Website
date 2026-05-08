class ScrollManager {
  constructor() {
    this.header = document.querySelector('.header');
    this.progressBar = document.querySelector('.scroll-progress');
    this.lastScroll = 0;
    
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => {
      this.handleScroll();
      this.updateProgress();
    }, { passive: true });
    
    this.initSmoothScroll();
  }

  handleScroll() {
    const currentScroll = window.pageYOffset;
    
    // Sticky Header Logic
    if (currentScroll > 50) {
      this.header.classList.add('scrolled');
      
      if (currentScroll > this.lastScroll && currentScroll > 200) {
        this.header.style.transform = 'translateY(-100%)';
      } else {
        this.header.style.transform = 'translateY(0)';
      }
    } else {
      this.header.classList.remove('scrolled');
      this.header.style.transform = 'translateY(0)';
    }
    
    this.lastScroll = currentScroll;
  }

  updateProgress() {
    if (!this.progressBar) return;
    
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    this.progressBar.style.height = scrolled + '%';
  }

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ScrollManager();
});
