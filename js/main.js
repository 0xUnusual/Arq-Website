class App {
  constructor() {
    this.preloader = document.querySelector('.preloader');
    this.menuBtn = document.querySelector('.menu-btn');
    this.navLinks = document.querySelector('.nav-links');
    
    this.init();
  }

  init() {
    // Handle Preloader
    if (this.preloader) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling while loading
      
      let progress = 0;
      const bar = this.preloader.querySelector('.preloader-bar');
      const percentText = this.preloader.querySelector('.percentage-text');
      
      const updateProgress = (val) => {
        if (bar) bar.style.width = `${val}%`;
        if (percentText) percentText.textContent = `${val}%`;
      };

      // Animate progress up to 90% before window load event
      const duration = 1200; // 1.2s to reach ~90%
      const intervalTime = 30;
      const step = 90 / (duration / intervalTime);
      
      const progressInterval = setInterval(() => {
        if (progress < 90) {
          progress += step + (Math.random() * 1.5 - 0.75); // Slight jitter for drafting effect
          if (progress > 90) progress = 90;
          updateProgress(Math.round(progress));
        }
      }, intervalTime);

      const completeLoading = () => {
        clearInterval(progressInterval);
        
        // Fill to 100% smoothly upon window loading finished
        let current = Math.round(progress);
        const finishInterval = setInterval(() => {
          if (current < 100) {
            current += 4; // Faster transition to feel Snappy
            if (current > 100) current = 100;
            updateProgress(current);
          } else {
            clearInterval(finishInterval);
            setTimeout(() => {
              this.hidePreloader();
            }, 300); // Small pause at 100% to let visual settle
          }
        }, 15);
      };

      if (document.readyState === 'complete') {
        completeLoading();
      } else {
        window.addEventListener('load', completeLoading);
      }
    } else {
      document.body.style.overflow = '';
    }

    // Handle Mobile Menu
    if (this.menuBtn && this.navLinks) {
      this.menuBtn.addEventListener('click', () => this.toggleMenu());
      
      // Close menu when clicking a link
      const links = this.navLinks.querySelectorAll('.nav-link');
      links.forEach(link => {
        link.addEventListener('click', () => {
          if (this.navLinks.classList.contains('active')) {
            this.toggleMenu();
          }
        });
      });
    }
  }

  hidePreloader() {
    if (!this.preloader) {
      document.body.style.overflow = '';
      return;
    }
    
    this.preloader.classList.add('hidden');
    document.body.style.overflow = ''; // Ensure scroll is enabled
    
    setTimeout(() => {
      this.preloader.style.display = 'none';
    }, 1000); // Remove from display block after transition is complete
  }

  toggleMenu() {
    this.menuBtn.classList.toggle('active');
    this.navLinks.classList.toggle('active');
    
    if (this.navLinks.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
