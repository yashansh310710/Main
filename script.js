// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back-to-top button visibility and scroll
window.onscroll = function() {
    var backToTopBtn = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

document.getElementById("back-to-top").onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Add visible class to trigger animations when website items come into view
const websiteItems = document.querySelectorAll('.website-item');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

websiteItems.forEach(item => {
    observer.observe(item);
});

}, { threshold: 0.1 });

websiteItems.forEach(item => {
    observer.observe(item);
});
