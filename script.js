// Reveal sections on scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));

// Optional: subtle parallax on hero title
const title = document.querySelector('.title');

window.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.15;
    title.style.transform = `translateY(${offset}px)`;
});
