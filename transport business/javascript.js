const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.target, entry.isIntersecting);

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.17
});


document.querySelectorAll("section").forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});
const cards = document.querySelectorAll(".service-card, .difference-card, .fleet-card, .industry-card");

cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 5}s`;
});
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

console.log(menu, nav);

menu.addEventListener("click", () => {
    console.log("Menu clicked");
    nav.classList.toggle("active");
});
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 80;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.ceil(count).toLocaleString();

                    requestAnimationFrame(update);

                } else {

                    if (target === 20) {
                        counter.innerText = "20+";
                    } else if (target === 100) {
                        counter.innerText = "100+";
                   
                    } else {
                        counter.innerText = target;
                    }

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => counterObserver.observe(counter));

const titles = document.querySelectorAll(".section-title, .order-title");

window.addEventListener("scroll", () => {
    titles.forEach(title => {
        const rect = title.getBoundingClientRect();

        if (rect.top < 80) {
            title.classList.add("hide-line");
        } else {
            title.classList.remove("hide-line");
        }
    });
});
document.querySelector(".quote-form").addEventListener("submit", function(e) {

    alert("Quote request submitted successfully!");
});