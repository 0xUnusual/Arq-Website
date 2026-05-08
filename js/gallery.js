class Gallery {
  constructor() {
    this.modal = null;
    this.modalImg = null;
    this.closeBtn = null;
    this.items = document.querySelectorAll('.gallery-item');
    
    if (this.items.length > 0) {
      this.init();
    }
  }

  init() {
    this.createModal();
    this.bindEvents();
  }

  createModal() {
    this.modal = document.createElement('div');
    this.modal.className = 'gallery-modal';
    this.modal.innerHTML = `
      <div class="gallery-modal-overlay"></div>
      <button class="gallery-modal-close"><i class="ph ph-x"></i></button>
      <div class="gallery-modal-content">
        <img src="" alt="Gallery Image">
      </div>
    `;
    
    document.body.appendChild(this.modal);
    
    this.modalImg = this.modal.querySelector('img');
    this.closeBtn = this.modal.querySelector('.gallery-modal-close');
    this.overlay = this.modal.querySelector('.gallery-modal-overlay');

    // Add styles dynamically for simplicity in this file
    const style = document.createElement('style');
    style.innerHTML = `
      .gallery-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 100000;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        pointer-events: none;
        transition: opacity var(--transition-medium);
      }
      .gallery-modal.active {
        opacity: 1;
        pointer-events: all;
      }
      .gallery-modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--clr-bg);
        opacity: 0.95;
      }
      .gallery-modal-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        z-index: 1;
        transform: scale(0.9);
        transition: transform var(--transition-medium);
      }
      .gallery-modal.active .gallery-modal-content {
        transform: scale(1);
      }
      .gallery-modal-content img {
        max-height: 90vh;
        max-width: 100%;
        object-fit: contain;
        box-shadow: 0 20px 50px rgba(0,0,0,0.2);
      }
      .gallery-modal-close {
        position: absolute;
        top: 30px;
        right: 40px;
        z-index: 2;
        font-size: 2rem;
        color: var(--clr-text);
        background: transparent;
        border: none;
        cursor: pointer;
        transition: transform var(--transition-fast);
      }
      .gallery-modal-close:hover {
        transform: rotate(90deg);
      }
      [data-theme="dark"] .gallery-modal-close {
        color: #fff;
      }
    `;
    document.head.appendChild(style);
  }

  bindEvents() {
    this.items.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const img = item.querySelector('img');
        if (img) {
          this.open(img.src, img.alt);
        } else if (item.href) {
          this.open(item.href, 'Gallery Image');
        }
      });
    });

    this.closeBtn.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', () => this.close());
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.close();
      }
    });
  }

  open(src, alt) {
    this.modalImg.src = src;
    this.modalImg.alt = alt || 'Architecture Image';
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
      this.modalImg.src = '';
    }, 500); // Wait for transition
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Gallery();
});
