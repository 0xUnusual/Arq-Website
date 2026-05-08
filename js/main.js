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
    if (!this.preloader) {
      document.body.style.overflow = '';
      return;
    }
    
    const bar = this.preloader.querySelector('.preloader-bar');
    if (bar) {
      bar.style.width = '100%';
      
      setTimeout(() => {
        this.preloader.classList.add('hidden');
        document.body.style.overflow = ''; // Ensure scroll is enabled
        
        setTimeout(() => {
          this.preloader.style.display = 'none';
        }, 1000);
      }, 500);
    } else {
      this.preloader.classList.add('hidden');
      document.body.style.overflow = '';
    }
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
