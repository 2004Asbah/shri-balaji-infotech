// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Popup Modal
const enrollBtn = document.getElementById('enroll-now');
const popupModal = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

enrollBtn.addEventListener('click', () => {
    popupModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    popupModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === popupModal) {
        popupModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Offset for the fixed header
        const headerHeight = document.querySelector('header').offsetHeight;
        window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const scrollPosition = window.scrollY + headerHeight; 
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    contactForm.reset();
});


// Course Finder Logic
const getRecommendationBtn = document.getElementById('get-recommendation');
const careerGoalSelect = document.getElementById('career-goal');
const skillLevelSelect = document.getElementById('skill-level');
const recommendationResult = document.getElementById('recommendation-result');

getRecommendationBtn.addEventListener('click', () => {
    const careerGoal = careerGoalSelect.value;
    const skillLevel = skillLevelSelect.value;

    if (careerGoal === 'career-default' || skillLevel === 'skill-default') {
        alert('Please select an option for both questions to get a recommendation.');
        return;
    }

    let recommendation = '';

    if (careerGoal === 'web-dev' && skillLevel === 'beginner') {
        recommendation = '<h3>Recommended Course: Web Development</h3><p>Based on your career goals and skill level, the Web Development course is the perfect starting point to become a professional developer!</p>';
    } else if (careerGoal === 'data-sci' && (skillLevel === 'beginner' || skillLevel === 'intermediate')) {
        recommendation = '<h3>Recommended Course: Python Programming</h3><p>The Python Programming course will equip you with the essential skills for a career in Data Science and Machine Learning.</p>';
    } else if (careerGoal === 'office-pro' && skillLevel === 'beginner') {
        recommendation = '<h3>Recommended Course: MS Office & Basics</h3><p>Our MS Office & Basics course is ideal for improving your fundamental computer and office productivity skills.</p>';
    } else if (careerGoal === 'database' && (skillLevel === 'beginner' || skillLevel === 'intermediate')) {
        recommendation = '<h3>Recommended Course: Database Management</h3><p>Learn to design and manage databases with our Database Management course, perfect for those interested in data and backend development.</p>';
    } else {
        recommendation = '<h3>No specific recommendation found.</h3><p>Please contact us for a personalized consultation!</p>';
    }

    recommendationResult.innerHTML = recommendation;
    recommendationResult.style.display = 'block';
    alert('Here is your personalized course recommendation!');
});


// Initial welcome alert
window.onload = function() {
    alert('Welcome to Shri Balaji Infotech! We are here to help you start your IT career.');
};
