class App {
  constructor() {
    this.preloader = document.querySelector('.preloader');
    this.menuBtn = document.querySelector('.menu-btn');
    this.navLinks = document.querySelector('.nav-links');
    
    this.init();
  }

  init() {
    // Handle Preloader
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.hidePreloader();
      }, 1500); // Minimum 1.5s to show the animation
    });

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
    if (!this.preloader) return;
    
    const bar = this.preloader.querySelector('.preloader-bar');
    if (bar) {
      bar.style.width = '100%';
      
      setTimeout(() => {
        this.preloader.classList.add('hidden');
        // Remove from DOM after transition to free up memory
        setTimeout(() => {
          this.preloader.style.display = 'none';
          document.body.classList.remove('loading');
        }, 1000);
      }, 500);
    }
  }

  toggleMenu() {
    this.menuBtn.classList.toggle('active');
    this.navLinks.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    if (this.navLinks.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Add loading class to prevent scrolling during preloader
  document.body.classList.add('loading');
  document.body.style.overflow = 'hidden';
  
  // Re-enable scroll when preloader hides
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class' && !document.body.classList.contains('loading')) {
        document.body.style.overflow = '';
      }
    });
  });
  
  observer.observe(document.body, { attributes: true });

  new App();
});
