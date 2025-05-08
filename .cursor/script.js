// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add animation on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.facility-card, .info-item');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}); 
const hero = document.querySelector('.hero');
const images = [
    '1.jpg',
    '8.jpg',
    '13.jpg',
     '1.jpg',
     '1.jpg',
    '9.jpg',
    '10.jpg',
     '1.jpg',
    '11.jpg',
    '12.jpg'
];

let currentImageIndex = 0;

function updateBackground() {
    hero.style.setProperty('--background-image', `url(${images[currentImageIndex]})`);
    hero.style.backgroundImage = `url(${images[currentImageIndex]})`;
    
    const before = document.querySelector('.hero::before');
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Use background-image on ::before using inline style trick
function changeBackground() {document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Sticky header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    const admissionForm = document.querySelector('.admission-enquiry form');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your admission enquiry! We will contact you shortly.');
            this.reset();
        });
    }
    
    // Image slider for hero section
    const heroSection = document.querySelector('.hero');
    const images = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg'
    ];
    
    let currentImageIndex = 0;
    
    function changeHeroBackground() {
        heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${images[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }
    
    // Change background every 5 seconds
    setInterval(changeHeroBackground, 5000);
    
    // Initialize with first image
    changeHeroBackground();
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-content, .facility-card, .gallery-item, .testimonial, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.about-content, .facility-card, .gallery-item, .testimonial, .contact-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});
    const newBg = `url(${images[currentImageIndex]})`;
    document.querySelector('.hero').style.setProperty('--bg', newBg);
    document.querySelector('.hero').style.backgroundImage = newBg;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackground, 2000);
window.onload = changeBackground;
