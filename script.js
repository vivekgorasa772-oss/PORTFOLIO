const typingTitle = document.getElementById("typing-title");

const roles = [
    "B.Tech CSE Student",
    "Aspiring AI Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeText() {

    if (!typingTitle) {
        return;
    }

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingTitle.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex >= currentRole.length) {

            deleting = true;

            setTimeout(typeText, 1500);

            return;
        }

    } else {

        typingTitle.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex <= 0) {

            charIndex = 0;
            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

            setTimeout(typeText, 500);

            return;
        }
    }

    setTimeout(
        typeText,
        deleting ? 60 : 100
    );
}

typeText();

const copyContacts =
    document.querySelectorAll(".copy-contact");

copyContacts.forEach(function (item) {

    item.addEventListener("click", function (event) {

        event.preventDefault();

        const textToCopy =
            item.getAttribute("data-copy");

        const originalText =
            item.textContent;

        if (!textToCopy) {
            return;
        }

        navigator.clipboard.writeText(textToCopy)
            .then(function () {

                item.textContent = "Copied!";

                setTimeout(function () {
                    item.textContent = originalText;
                }, 1200);

            })
            .catch(function (error) {

                console.log(
                    "Copy failed:",
                    error
                );

            });

    });

});

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const linkTarget =
            link.getAttribute("href");

        if (
            linkTarget ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});

const allLinks =
    document.querySelectorAll("a");

allLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (
            link.classList.contains("copy-contact")
        ) {
            return;
        }

        link.style.transform =
            "scale(0.97)";

        setTimeout(function () {

            link.style.transform = "";

        }, 120);

    });

});