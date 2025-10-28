// Cookie Consent Management
(function() {
    'use strict';

    const COOKIE_NAME = 'cookie_consent';
    const COOKIE_EXPIRY_DAYS = 365;

    // Cookie Helper Functions
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + JSON.stringify(value) + ";" + expires + ";path=/;SameSite=Lax";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(nameEQ) === 0) {
                try {
                    return JSON.parse(cookie.substring(nameEQ.length));
                } catch (e) {
                    return null;
                }
            }
        }
        return null;
    }

    function deleteCookie(name) {
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    }

    // Cookie Consent Banner
    const cookieBanner = document.getElementById('cookieConsent');
    const closeBannerBtn = document.getElementById('closeCookieBanner');
    const acceptAllBtn = document.getElementById('acceptAllCookies');
    const acceptSelectedBtn = document.getElementById('acceptSelectedCookies');
    const rejectAllBtn = document.getElementById('rejectAllCookies');

    const cookieEssential = document.getElementById('cookieEssential');
    const cookieAnalytics = document.getElementById('cookieAnalytics');
    const cookieMarketing = document.getElementById('cookieMarketing');

    // Check if consent already given
    function checkCookieConsent() {
        const consent = getCookie(COOKIE_NAME);
        
        if (!consent) {
            // Show banner after a short delay for better UX
            setTimeout(() => {
                showCookieBanner();
            }, 1000);
        } else {
            // Apply saved preferences
            applyCookiePreferences(consent);
        }
    }

    // Show Cookie Banner
    function showCookieBanner() {
        if (cookieBanner) {
            cookieBanner.classList.add('show');
        }
    }

    // Hide Cookie Banner
    function hideCookieBanner() {
        if (cookieBanner) {
            cookieBanner.classList.remove('show');
        }
    }

    // Apply Cookie Preferences
    function applyCookiePreferences(preferences) {
        console.log('Cookie Preferences:', preferences);

        // Essential cookies are always enabled
        if (preferences.essential) {
            // Essential cookies logic here
        }

        // Analytics cookies
        if (preferences.analytics) {
            enableAnalytics();
        } else {
            disableAnalytics();
        }

        // Marketing cookies
        if (preferences.marketing) {
            enableMarketing();
        } else {
            disableMarketing();
        }
    }

    // Enable/Disable Analytics
    function enableAnalytics() {
        console.log('Analytics enabled');
        // Add Google Analytics or other analytics code here
        // Example:
        // window.dataLayer = window.dataLayer || [];
        // function gtag(){dataLayer.push(arguments);}
        // gtag('js', new Date());
        // gtag('config', 'YOUR-GA-ID');
    }

    function disableAnalytics() {
        console.log('Analytics disabled');
        // Disable analytics tracking
    }

    // Enable/Disable Marketing
    function enableMarketing() {
        console.log('Marketing enabled');
        // Add marketing pixels here
    }

    function disableMarketing() {
        console.log('Marketing disabled');
        // Disable marketing tracking
    }

    // Save Cookie Preferences
    function saveCookiePreferences(preferences) {
        setCookie(COOKIE_NAME, preferences, COOKIE_EXPIRY_DAYS);
        applyCookiePreferences(preferences);
        hideCookieBanner();

        // Show confirmation message
        showConsentConfirmation();
    }

    // Show Confirmation Message
    function showConsentConfirmation() {
        const confirmation = document.createElement('div');
        confirmation.className = 'cookie-confirmation';
        confirmation.innerHTML = '✓ Cookie-Einstellungen gespeichert';
        confirmation.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: #10b981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            font-weight: 600;
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
        `;
        
        document.body.appendChild(confirmation);

        setTimeout(() => {
            confirmation.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                confirmation.remove();
            }, 300);
        }, 3000);
    }

    // Event Listeners
    if (acceptAllBtn) {
        acceptAllBtn.addEventListener('click', () => {
            saveCookiePreferences({
                essential: true,
                analytics: true,
                marketing: true
            });
        });
    }

    if (acceptSelectedBtn) {
        acceptSelectedBtn.addEventListener('click', () => {
            saveCookiePreferences({
                essential: true,
                analytics: cookieAnalytics.checked,
                marketing: cookieMarketing.checked
            });
        });
    }

    if (rejectAllBtn) {
        rejectAllBtn.addEventListener('click', () => {
            saveCookiePreferences({
                essential: true,
                analytics: false,
                marketing: false
            });
        });
    }

    if (closeBannerBtn) {
        closeBannerBtn.addEventListener('click', () => {
            hideCookieBanner();
            // Save minimal consent (only essential) when closing
            saveCookiePreferences({
                essential: true,
                analytics: false,
                marketing: false
            });
        });
    }

    // Links to Datenschutz and Impressum from cookie banner
    const datenschutzLinks = document.querySelectorAll('.cookie-consent-links .open-datenschutz');
    const impressumLinks = document.querySelectorAll('.cookie-consent-links .open-impressum');

    datenschutzLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const datenschutzModal = document.getElementById('datenschutzModal');
            if (datenschutzModal) {
                datenschutzModal.style.display = 'block';
            }
        });
    });

    impressumLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const impressumModal = document.getElementById('impressumModal');
            if (impressumModal) {
                impressumModal.style.display = 'block';
            }
        });
    });

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', checkCookieConsent);

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

})();
