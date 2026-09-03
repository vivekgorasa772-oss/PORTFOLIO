const typingTitle = document.getElementById("typing-title");

const role = "B.Tech CSE Student";

let charIndex = 0;
let isDeleting = false;

function typeRole() {
    if (!typingTitle) {
        return;
    }

    if (isDeleting) {
        typingTitle.textContent = role.slice(0, charIndex - 1);
        charIndex--;
    } else {
        typingTitle.textContent = role.slice(0, charIndex + 1);
        charIndex++;
    }

    let delay = isDeleting ? 70 : 110;

    if (!isDeleting && charIndex === role.length) {
        delay = 1400;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        delay = 500;
        isDeleting = false;
    }

    setTimeout(typeRole, delay);
}

typeRole();