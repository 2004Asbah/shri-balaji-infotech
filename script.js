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
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your submission! We will contact you soon.');
        form.reset();
        
        // Close popup if it's the enrollment form
        if (form.classList.contains('popup-form')) {
            popupModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Personalized Course Finder Logic
const getRecommendationBtn = document.getElementById('get-recommendation');
const careerGoalSelect = document.getElementById('career-goal');
const skillLevelSelect = document.getElementById('skill-level');
const recommendationResult = document.getElementById('recommendation-result');

getRecommendationBtn.addEventListener('click', () => {
    const careerGoal = careerGoalSelect.value;
    const skillLevel = skillLevelSelect.value;

    let recommendation = '';

    if (careerGoal === 'web-dev' && skillLevel === 'beginner') {
        recommendation = '<h3>Recommended Course: Web Development</h3><p>Based on your career goals and skill level, the Web Development course is the perfect starting point to become a professional developer!</p>';
    } else if (careerGoal === 'data-sci' && (skillLevel === 'beginner' || skillLevel === 'intermediate')) {
        recommendation = '<h3>Recommended Course: Python Programming</h3><p>The Python Programming course will equip you with the essential skills for a career in Data Science and Machine Learning.</p>';
    } else if (careerGoal === 'office-pro' && skillLevel === 'beginner') {
        recommendation = '<h3>Recommended Course: MS Office & Basics</h3><p>Our MS Office & Basics course is ideal for improving your fundamental computer and office productivity skills.</p>';
    } else {
        recommendation = '<h3>No specific recommendation found.</h3><p>Please contact us for a personalized consultation!</p>';
    }

    recommendationResult.innerHTML = recommendation;
    recommendationResult.style.display = 'block';
});


// AI Chatbot Logic
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotPopup = document.getElementById('chatbot-popup');
const closeChatbotBtn = document.querySelector('.close-chatbot');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSendBtn = document.getElementById('chatbot-send');
const chatbotBody = document.querySelector('.chatbot-body');

chatbotIcon.addEventListener('click', () => {
    chatbotPopup.style.display = 'flex';
});

closeChatbotBtn.addEventListener('click', () => {
    chatbotPopup.style.display = 'none';
});

// A very basic chatbot response simulation
const getChatbotResponse = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes('hello') || msg.includes('hi')) {
        return 'Hello! How can I help you today?';
    } else if (msg.includes('courses')) {
        return 'We offer courses in Web Development, Python Programming, and MS Office & Basics. You can check our "Courses" section for details!';
    } else if (msg.includes('fee') || msg.includes('price')) {
        return 'Course fees vary. Please check our "Courses" section or fill out the inquiry form for specific details.';
    } else if (msg.includes('contact')) {
        return 'You can contact us via email at info@shribalajiinfotech.com or call us at +91-9876543210.';
    } else if (msg.includes('thank you')) {
        return 'You\'re welcome! Let me know if you need anything else.';
    } else {
        return 'I am sorry, I can only answer basic questions right now. Please fill out the contact form for a detailed response.';
    }
};

chatbotSendBtn.addEventListener('click', () => {
    const userMessage = chatbotInput.value.trim();
    if (userMessage !== '') {
        // Display user message
        const userMsgDiv = document.createElement('div');
        userMsgDiv.className = 'chatbot-message user-message';
        userMsgDiv.textContent = userMessage;
        chatbotBody.appendChild(userMsgDiv);
        chatbotInput.value = '';

        // Simulate chatbot response
        setTimeout(() => {
            const chatbotResponse = getChatbotResponse(userMessage);
            const chatbotMsgDiv = document.createElement('div');
            chatbotMsgDiv.className = 'chatbot-message';
            chatbotMsgDiv.textContent = chatbotResponse;
            chatbotBody.appendChild(chatbotMsgDiv);
            chatbotBody.scrollTop = chatbotBody.scrollHeight; // Auto scroll
        }, 1000);
    }
});
