class ThemeManager {
  constructor() {
    this.themeToggleBtn = document.querySelector('.theme-toggle');
    this.currentTheme = localStorage.getItem('theme') || 'light';
    
    this.init();
  }

  init() {
    this.setTheme(this.currentTheme);
    
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    }
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;
    
    // Update button visual state if needed
    if (this.themeToggleBtn) {
      const icon = this.themeToggleBtn.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.classList.remove('ph-moon');
          icon.classList.add('ph-sun');
        } else {
          icon.classList.remove('ph-sun');
          icon.classList.add('ph-moon');
        }
      }
    }
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});
