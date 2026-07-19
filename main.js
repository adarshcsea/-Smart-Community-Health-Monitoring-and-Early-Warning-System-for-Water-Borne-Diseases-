/**
 * JalSuraksha AI - Core Script Engine
 * Smart India Hackathon Production-Grade Frontend Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigationEngine();
    initThemeControl();
    initNumericalCounters();
    initScrollAnimations();
    initScrollToTop();
});

/**
 * Responsive Mobile Menu Controller Logic & Layout Interactivity
 */
function initNavigationEngine() {
    const mainHeader = document.querySelector('.main-header');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    
    // Sticky header transform on scroll offset axis
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // Mobile Hamburger Toggle Vector
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburgerBtn.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        // Close state if clicking ambient content regions
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                hamburgerBtn.classList.remove('open');
                navMenu.classList.remove('open');
            }
        });
    }
}

/**
 * UI Theme Switching Architecture & Session Storage State Persistence
 */
function initThemeControl() {
    const themeToggle = document.getElementById('themeToggle');
    const rootElement = document.documentElement;
    
    // Evaluate cached preference matrix or system default dark configuration
    const cachedTheme = localStorage.getItem('theme') || 'dark';
    rootElement.setAttribute('data-theme', cachedTheme);
    updateThemeToggleIcon(themeToggle, cachedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = rootElement.getAttribute('data-theme');
            const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            rootElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            updateThemeToggleIcon(themeToggle, targetTheme);
        });
    }
}

function updateThemeToggleIcon(button, currentTheme) {
    if (!button) return;
    const icon = button.querySelector('i');
    if (currentTheme === 'light') {
        icon.className = 'fas fa-sun';
        icon.style.color = '#ffaa00';
    } else {
        icon.className = 'fas fa-moon';
        icon.style.color = '';
    }
}

/**
 * Fast Asynchronous Statistical Interpolation (Counter Tickers)
 */
function initNumericalCounters() {
    const counterElements = document.querySelectorAll('.counter');
    
    const runCounterInterpolation = (el) => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const cycleDuration = 2000; // ms execution window
        const incrementSteps = target / (cycleDuration / 16); // ~60fps step matching
        let currentVal = 0;

        const loop = () => {
            currentVal += incrementSteps;
            if (currentVal < target) {
                el.innerText = Math.ceil(currentVal).toLocaleString();
                requestAnimationFrame(loop);
            } else {
                el.innerText = target.toLocaleString();
            }
        };
        requestAnimationFrame(loop);
    };

    // Intersection observer lifecycle coupling to save main thread cycles
    const metricObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounterInterpolation(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    counterElements.forEach(item => metricObserver.observe(item));
}

/**
 * Structural Scroll Reveal Subsystem using Intersection Monitoring
 */
function initScrollAnimations() {
    const animatableTargets = document.querySelectorAll('.animate-scroll-fade');
    
    const viewportObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animatableTargets.forEach(target => viewportObserver.observe(target));
}

/**
 * Back-to-Top Global Acceleration Control
 */
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (!scrollTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}