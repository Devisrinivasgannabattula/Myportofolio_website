// Smooth scrolling function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Form submission function with notification
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contactForm').reset();
    } else {
        alert("Please fill out all fields.");
    }
}

// Scroll-to-top button functionality
window.onscroll = function() {
    document.getElementById('scrollToTop').style.display = window.pageYOffset > 200 ? 'block' : 'none';
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function refreshPage() {
    window.location.reload();
}




// Fade-in on scroll for sections
const sections = document.querySelectorAll("section");

function fadeInOnScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionTop < screenPosition) {
            section.classList.add("in-view");
        }
    });
}

window.addEventListener("scroll", fadeInOnScroll);
