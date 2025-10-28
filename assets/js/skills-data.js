// Skill Data for Modals
const skillData = {
    'ai': {
        title: 'KI & Automation',
        description: 'Expertise in modernen KI-Tools und Automatisierungslösungen für effizientere Entwicklung.',
        items: [
            'GitHub Copilot - KI-gestützte Code-Completion',
            'ChatGPT - Advanced Prompting & Prompt Engineering',
            'Claude - Vertiefte Analysen & Code-Reviews',
            'Gemini - Google AI für Recherche & Content',
            'Blackbox - Code-Snippet Suche & Automation',
            'DeepSeek - Tiefe Programmier-Assistenz',
            'Perplexity - Research & Knowledge Synthesis',
            'Google AI Studio - Experimentieren & Testen',
            'Manus - Automatisierung komplexer Workflows',
            'Meta AI - Zusätzliche KI-Perspektiven'
        ]
    },
    'js': {
        title: 'JavaScript/TypeScript & jQuery',
        description: 'Umfassende JavaScript-Expertise mit ES6+, TypeScript und jQuery für robuste Frontend-Entwicklung.',
        items: [
            'ES6+ Advanced Features - Arrow Functions, Destructuring, Async/Await',
            'TypeScript - Type-Safe Development & Interfaces',
            'jQuery - DOM Manipulation & Event Handling',
            'Modern JavaScript Patterns - Factory, Observer, Module',
            'Performance Optimization - Memory Management, Debouncing',
            'Testing - Unit Tests, Integration Tests'
        ]
    },
    'vue': {
        title: 'Vue3 & Nuxt',
        description: 'Moderne Vue3-Entwicklung mit Composition API und Nuxt Framework für performante SPAs.',
        items: [
            'Vue3 Composition API - Reaktive Komponenten',
            'Nuxt Framework - SSR & Static Generation',
            'State Management - Pinia für zentrale States',
            'Lifecycle Hooks - onMounted, onUnmounted, Watch',
            'Custom Hooks & Composables - Wiederverwendbar',
            'Performance - Code Splitting, Lazy Loading'
        ]
    },
    'angular': {
        title: 'Angular 16+ / AngularJS',
        description: 'Expertise in modernem Angular 16+ sowie Legacy AngularJS Maintenance und Migration.',
        items: [
            'Angular 16+ - Standalone Components & Signals',
            'Dependency Injection - Services & Providers',
            'RxJS - Observables & Reactive Patterns',
            'Forms - Reactive Forms & Form Validation',
            'AngularJS Legacy - Direktiven, Controller, Services',
            'Migration - AngularJS zu Angular Upgrades'
        ]
    },
    'react': {
        title: 'React & Next.js',
        description: 'React-Expertise mit Hooks, Context API und Next.js für Full-Stack Applications.',
        items: [
            'React Hooks - useState, useEffect, useContext, Custom Hooks',
            'Next.js - Pages, API Routes, SSR & SSG',
            'State Management - Context API, Redux Integration',
            'Performance - Code Splitting, Image Optimization',
            'SEO Optimization - Meta Tags, Sitemap Generation',
            'Deployment - Vercel, Self-Hosting'
        ]
    },
    'tailwind': {
        title: 'Tailwind CSS',
        description: 'Utility-First CSS Framework für schnelle, responsive Design-Implementierung.',
        items: [
            'Utility-First Workflow - Rapid Development',
            'Responsive Design - Mobile-First Breakpoints',
            'Custom Configuration - Themes & Extensions',
            'SCSS Integration - Custom Properties & Mixins',
            'Performance - PurgeCSS & Minification',
            'Dark Mode - Theme Switching'
        ]
    },
    'bootstrap': {
        title: 'Bootstrap 5',
        description: 'Modernes Bootstrap Framework für responsive Web-Design und schnelle Prototyping.',
        items: [
            'Grid System - 12-Column Layout',
            'Components - Buttons, Cards, Modals, Navbars',
            'Responsive Utilities - Display, Spacing, Sizing',
            'Forms - Validation & Accessibility',
            'JavaScript Components - Carousel, Dropdowns',
            'Customization - SCSS Variables & Overrides'
        ]
    },
    'html': {
        title: 'HTML5 & CSS3',
        description: 'Semantisches HTML5 und modernes CSS3 mit W3C Standards und Best Practices.',
        items: [
            'Semantic HTML - header, nav, main, section, article',
            'Accessibility - ARIA Labels, Landmark Roles',
            'CSS3 Features - Grid, Flexbox, CSS Variables',
            'Animations - Transitions, Keyframes, Transforms',
            'Media Queries - Responsive Design',
            'Performance - Lazy Loading, Preload Links'
        ]
    },
    'figma': {
        title: 'Figma & Adobe Suite',
        description: 'UI/UX Design mit Figma und erweiterte Design-Tools aus der Adobe Creative Suite.',
        items: [
            'Figma - Prototyping, Components, Design Systems',
            'Adobe Photoshop - Image Editing & Retouching',
            'Adobe Illustrator - Vector Graphics & Logo Design',
            'Adobe InDesign - Layout & Print Design',
            'Design Handoff - Specs, Assets Export',
            'Collaboration - Design Reviews, Feedback'
        ]
    },
    'gsap': {
        title: 'GSAP & WebGL',
        description: 'Professionelle Animationen mit GSAP und 3D-Grafiken mit WebGL.',
        items: [
            'GSAP Timeline - Komplexe Animationssequenzen',
            'ScrollTrigger - Scroll-basierte Animationen',
            'Morphing & SVG Animations - Shape Morphing',
            'WebGL Basics - Three.js, Babylon.js',
            '3D Transformations - Perspective, Rotation',
            'Performance - GPU Acceleration, Optimization'
        ]
    },
    'php': {
        title: 'PHP',
        description: 'Backend-Entwicklung mit PHP für Server-Side Rendering und API-Entwicklung.',
        items: [
            'Core PHP - OOP, Design Patterns, PSR Standards',
            'Laravel Framework - Eloquent ORM, Blade Templating',
            'MySQL Queries - Optimization & Security',
            'REST APIs - Routing, Middleware, Authentication',
            'Security - SQL Injection Prevention, XSS Protection',
            'Performance - Caching, Query Optimization'
        ]
    },
    'mysql': {
        title: 'MySQL',
        description: 'Datenbank-Management und Optimization mit MySQL für robuste Daten-Verwaltung.',
        items: [
            'Database Design - Normalization, Schema Planning',
            'Queries - SELECT, JOIN, Aggregation Functions',
            'Indexing - Performance Optimization',
            'Transactions - ACID Compliance, Rollback',
            'Security - User Permissions, Encryption',
            'Backup & Recovery - Replication, Restoration'
        ]
    },
    'wordpress': {
        title: 'WordPress & Plugins',
        description: 'WordPress Theme & Plugin Development mit Gutenberg Editor und Advanced Custom Fields.',
        items: [
            'Theme Development - Custom Themes, Child Themes',
            'Gutenberg Blocks - Custom Blocks, Dynamic Content',
            'ACF Pro - Advanced Custom Fields & Relationships',
            'Plugin Development - Hooks, Filters, Actions',
            'WooCommerce Integration - Products, Checkout',
            'Performance - Caching, Optimization Plugins'
        ]
    },
    'contao': {
        title: 'Contao 5',
        description: 'Professionelle CMS-Entwicklung mit Contao 5 für maßgeschneiderte Web-Lösungen.',
        items: [
            'Contao Backend - Content Management & Publishing',
            'Frontend Templates - Twig Engine, Custom Layouts',
            'Extensions - Custom Bundles & Modules',
            'Page Tree - Hierarchical Site Structure',
            'Form Builder - Dynamic Forms & Validation',
            'SEO - Meta Tags, URL Rewrites'
        ]
    },
    'shopify': {
        title: 'Shopify & Shopware',
        description: 'E-Commerce Lösungen mit Shopify und Shopware für professionelle Online-Shops.',
        items: [
            'Shopify - Liquid Template Language, Custom Apps',
            'Theme Development - Responsive Storefronts',
            'Shopware - Plugin Development, B2B Features',
            'Payment Integration - Stripe, PayPal, Klarna',
            'SEO & Analytics - GA4, Heatmaps',
            'Performance - Load Times, Conversion Optimization'
        ]
    },
    'wcag': {
        title: 'Barrierefreiheit (WCAG)',
        description: 'Umfassende Implementierung von Accessibility Standards für inklusive Web-Erlebnisse.',
        items: [
            'WCAG 2.2 Level AA - Compliance & Guidelines',
            'Screen Readers - ARIA Labels, Semantic HTML',
            'Keyboard Navigation - Tab Order, Focus States',
            'Color Contrast - APCA, Readability Standards',
            'Form Accessibility - Labels, Error Messages',
            'Testing - Accessibility Audits, User Testing'
        ]
    },
    'video': {
        title: 'Videoschnitt & Design',
        description: 'Professionelle Video-Produktion und Schnitt mit Adobe Premiere und DaVinci Resolve.',
        items: [
            'Adobe Premiere Pro - Editing, Color Grading, Effects',
            'DaVinci Resolve - Professional Color Correction',
            'Motion Graphics - Keyframes, Transitions',
            'Audio Mixing - Sound Design, Music Synchronization',
            'Export Optimization - Codecs, File Formats',
            'YouTube & Social - Aspect Ratios, Formats'
        ]
    },
    'audio': {
        title: 'Audio Create & Edit',
        description: 'Audio-Produktion und Bearbeitung mit professionellen Tools.',
        items: [
            'Adobe Audition - Recording, Editing, Mastering',
            'Ableton Live - Music Production, Live Performance',
            'Sound Design - Synthesizers, Sampling',
            'Mixing & Mastering - EQ, Compression, Reverb',
            'Podcast Production - Recording, Editing, Publishing',
            'Voice Over - Recording, Noise Reduction'
        ]
    },
    'photo': {
        title: 'Fotobearbeitung & Retouche',
        description: 'Professionelle Foto-Bearbeitung und Retuschierung mit Photoshop und Lightroom.',
        items: [
            'Adobe Photoshop - Retouching, Compositing, Effects',
            'Adobe Lightroom - Batch Editing, Color Grading',
            'Portrait Retouching - Skin, Eyes, Hair',
            'Product Photography - Enhancement, Shadows',
            'RAW Processing - White Balance, Exposure',
            'Batch Processing - Automation, Presets'
        ]
    },
    'graphic': {
        title: 'Grafikdesign',
        description: 'Umfassendes Grafikdesign mit Adobe Creative Suite, Figma und Canva für Print & Digital.',
        items: [
            'Adobe Illustrator - Vector Graphics, Logo Design',
            'Adobe Photoshop - Image Editing, Photo Compositing',
            'Adobe InDesign - Layout, Brochures, Print Design',
            'Figma - Modern UI/UX Design, Prototyping',
            'Canva - Quick Design Templates, Social Media Graphics',
            'Brand Guidelines - Logo Systems, Color Palettes'
        ]
    },
    'testing': {
        title: 'Testing & CI/CD',
        description: 'Automatisierte Tests und Continuous Integration/Deployment für robuste Entwicklung.',
        items: [
            'Jest - Unit & Snapshot Testing',
            'Cypress - E2E Testing, Visual Regression',
            'GitHub Actions - CI/CD Pipelines, Automation',
            'Test Coverage - Coverage Reports, Standards',
            'Integration Testing - API Testing, Mocking',
            'Pre-commit Hooks - Automated Checks'
        ]
    },
    'performance': {
        title: 'Performance Tools',
        description: 'Performance-Optimierung und Monitoring mit Lighthouse und PageSpeed Insights.',
        items: [
            'Google Lighthouse - Audits, Performance Scoring',
            'Google PageSpeed Insights - Web Vitals Analysis',
            'Core Web Vitals - LCP, FID, CLS Optimization',
            'WebPageTest - Detailed Performance Analysis',
            'Monitoring - Real User Monitoring (RUM)',
            'Optimization - Caching, Compression, CDN'
        ]
    },
    'vscode': {
        title: 'VS Code & Extensions',
        description: 'Professionelle Development-Umgebung mit VS Code und produktiven Extensions für schnellere Entwicklung.',
        items: [
            'Prettier - Code Formatter & Styling',
            'ESLint - Linting & Code Quality Analysis',
            'GitHub Copilot - KI-gestützte Code-Completion',
            'Thunder Client - REST API Testing & Debugging',
            'Live Server - Local Development Server',
            'Git Graph - Git Visualization & Management'
        ]
    }
};
