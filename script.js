```javascript
// ================================
// Simple reveal animation
// ================================

const revealElements = document.querySelectorAll(
    ".section-heading, .info-card, .skill-group, .project-card, .certificate-card, .timeline-item, .interest-grid > div"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ================================
// Add reveal CSS dynamically
// ================================

const style = document.createElement("style");

style.innerHTML = `

.reveal {
    opacity: 0;
    transform: translateY(25px);
    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}

.reveal.show {
    opacity: 1;
    transform: translateY(0);
}

`;

document.head.appendChild(style);


// ================================
// Active navigation
// ================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
```
