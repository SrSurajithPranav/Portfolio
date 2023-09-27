// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Add scroll-triggered animations using Intersection Observer
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add your animation class here
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Add a responsive navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
