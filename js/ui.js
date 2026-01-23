// UI Interactions & Animations

// Hero Carousel
let currentHeroSlide = 0;
let heroInterval = null;

function initHeroCarousel() {
    const slides = document.querySelectorAll('#hero-slides .hero-slide');
    const dots = document.querySelectorAll('#hero-dots .hero-dot');

    if (slides.length === 0) return;

    // Auto rotate
    if (heroInterval) clearInterval(heroInterval);
    heroInterval = setInterval(() => {
        currentHeroSlide = (currentHeroSlide + 1) % slides.length;
        updateHeroSlide();
    }, 5000);

    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentHeroSlide = index;
            updateHeroSlide();
        });
    });
}

function updateHeroSlide() {
    const slides = document.querySelectorAll('#hero-slides .hero-slide');
    const dots = document.querySelectorAll('#hero-dots .hero-dot');

    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentHeroSlide);
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentHeroSlide);
    });
}

// Initialize hero when home page loads
const homeObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.id === 'page-home' && mutation.target.classList.contains('active')) {
            initHeroCarousel();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.getElementById('page-home');
    if (homePage) {
        homeObserver.observe(homePage, { attributes: true, attributeFilter: ['class'] });
    }

    // Also init if already on home
    if (homePage && homePage.classList.contains('active')) {
        initHeroCarousel();
    }
});

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Card hover effects
document.addEventListener('mouseover', (e) => {
    const card = e.target.closest('.card, .feature-card, .action-card');
    if (card) {
        card.style.transform = 'translateY(-4px)';
    }
});

document.addEventListener('mouseout', (e) => {
    const card = e.target.closest('.card, .feature-card, .action-card');
    if (card) {
        card.style.transform = '';
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // ESC to close popup or go back
    if (e.key === 'Escape') {
        if (chatPopupOpen) {
            toggleChatPopup();
        } else if (currentPage === 'place-detail') {
            goBackFromPlace();
        } else if (currentPage === 'district-detail') {
            navigateTo('districts');
        } else if (currentPage === 'districts') {
            navigateTo('home');
        } else if (currentPage === 'alerts') {
            navigateTo('home');
        }
    }
});

// Lazy loading images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Debounce utility
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle utility
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Format time ago
function formatTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
        }
    }

    return 'Just now';
}

// Ripple effect for buttons
document.addEventListener('click', function (e) {
    const btn = e.target.closest('.btn');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.style.cssText = `
    position: absolute;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
    left: ${x}px;
    top: ${y}px;
    width: 100px;
    height: 100px;
    margin-left: -50px;
    margin-top: -50px;
  `;

    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
