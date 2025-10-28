// Slider Functionality
function initSlider() {
    const viewport = document.getElementById('skillSlider');
    const track = document.getElementById('skillTrack');
    const slides = track ? Array.from(track.children) : [];
    const dotButtons = viewport ? Array.from(viewport.querySelectorAll('[data-dot]')) : [];
    const navButtons = document.querySelectorAll('[data-slide]');

    if (viewport && track && slides.length) {
        let index = 0;
        let autoId = null;

        const getWidth = () => viewport.clientWidth;

        const setActiveDot = (i) => {
            dotButtons.forEach((b, bi) => {
                if (bi === i) b.classList.add('dot-active');
                else b.classList.remove('dot-active');
            });
        };

        const setActiveNav = (i) => {
            navButtons.forEach((b) => {
                const slideNum = parseInt(b.getAttribute('data-slide')) || 0;
                if (slideNum === i) {
                    b.classList.remove('bg-white/20', 'ring-white/30', 'border-white/30', 'text-white');
                    b.classList.add('bg-yellow-400', 'border-yellow-400', 'text-blue-900');
                } else {
                    b.classList.remove('bg-yellow-400', 'border-yellow-400', 'text-blue-900');
                    b.classList.add('bg-white/20', 'ring-white/30', 'border-white/30', 'text-white');
                }
            });
        };

        const goTo = (i) => {
            index = (i + slides.length) % slides.length;
            const x = -index * getWidth();
            track.style.transform = `translateX(${x}px)`;
            setActiveDot(index);
            setActiveNav(index);
        };

        const next = () => goTo(index + 1);
        const prev = () => goTo(index - 1);

        const startAuto = () => {
            stopAuto();
            autoId = setInterval(next, 5000);
        };
        const stopAuto = () => {
            if (autoId) clearInterval(autoId);
            autoId = null;
        };

        // Events
        navButtons.forEach((b) => b.addEventListener('click', (e) => {
            const i = parseInt(b.getAttribute('data-slide')) || 0;
            goTo(i);
        }));

        dotButtons.forEach((b) => b.addEventListener('click', (e) => {
            const i = parseInt(b.getAttribute('data-dot')) || 0;
            goTo(i);
        }));

        window.addEventListener('resize', () => goTo(index));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        });

        // Init
        goTo(0);
    }
}

// Initialize slider when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlider);
} else {
    initSlider();
}
