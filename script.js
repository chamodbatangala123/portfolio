// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// ==========================
// Typing Effect
// ==========================

const roles = [
    "Data Science Undergraduate",
    "Python Developer",
    "Web Developer",
    "AI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleElement = document.querySelector(".hero-text h2");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleElement.textContent = currentRole.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        roleElement.textContent = currentRole.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// ==========================
// Reveal Animation
// ==========================

const sections = document.querySelectorAll("section");

function revealSection() {

    sections.forEach(section => {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 120) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

}

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "1s";
});

window.addEventListener("scroll", revealSection);

revealSection();


// ==========================
// Back To Top Button
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#1565c0";
topButton.style.color = "#fff";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ==========================
// Active Navigation
// ==========================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================
// Greeting Based On Time
// ==========================

const greeting = document.querySelector(".hero-text h3");

const hour = new Date().getHours();

if (hour < 12) {

    greeting.textContent = "Good Morning, I'm";

}
else if (hour < 18) {

    greeting.textContent = "Good Afternoon, I'm";

}
else {

    greeting.textContent = "Good Evening, I'm";

}