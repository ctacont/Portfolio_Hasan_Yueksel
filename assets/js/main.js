// Main JavaScript - GSAP Animations and Scroll Functionality

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    gsap.utils.toArray('.scroll-reveal').forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                onEnter: () => element.classList.add('visible'),
                once: true
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('nav');
    gsap.to(navbar, {
        scrollTrigger: {
            trigger: 'body',
            start: 'top 50px',
            onEnter: () => navbar.classList.add('glassmorphism-hover'),
            onLeaveBack: () => navbar.classList.remove('glassmorphism-hover'),
            markers: false
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                if (typeof ScrollToPlugin !== 'undefined') {
                    gsap.to(window, {
                        duration: 0.9,
                        scrollTo: { y: target, offsetY: 90, autoKill: false },
                        ease: 'power2.inOut'
                    });
                } else {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Parallax effect on hero
    gsap.to('.animated-gradient', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1
        },
        backgroundPosition: '100% 100%'
    });
});

// Scroll to top functionality - Header Button
const scrollToTopBtn = document.getElementById('scrollToTop');
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        gsap.to(window, {
            duration: 0.9,
            scrollTo: { y: 0, autoKill: false },
            ease: 'power2.inOut'
        });
    });
}

// Scroll to Top Button Show/Hide - Floating Button
function initScrollToTopBtn() {
    const scrollToTopFloatingBtn = document.getElementById('hyScrollToTop');
    
    if (!scrollToTopFloatingBtn) {
        return;
    }
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopFloatingBtn.classList.remove('opacity-0', 'pointer-events-none');
            scrollToTopFloatingBtn.classList.add('opacity-100');
        } else {
            scrollToTopFloatingBtn.classList.add('opacity-0', 'pointer-events-none');
            scrollToTopFloatingBtn.classList.remove('opacity-100');
        }
    });

    scrollToTopFloatingBtn.addEventListener('click', function(e) {
        e.preventDefault();
        gsap.to(window, {
            duration: 0.9,
            scrollTo: { y: 0, autoKill: false },
            ease: 'power2.inOut'
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollToTopBtn);
} else {
    initScrollToTopBtn();
}

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
}
