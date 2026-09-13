function toggleHideMenu() {
    const menu = document.getElementById("hideMenu");
    menu.classList.toggle("active");
}

const menuItems = document.querySelectorAll(".hide-navbar-content li");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        document.getElementById("hideMenu").classList.remove("active");
    });
});

function ScrollHome() {
    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });
}

function ScrollAbout() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

function ScrollSkills() {
    document.getElementById("skills").scrollIntoView({
        behavior: "smooth"
    });
}

function ScrollProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

function ScrollContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

const roles = [
    "Software Developer",
    "Database Administrator",
    "Front-end Developer",
    "Problem Solver"
];

function startTyping(elementId, words) {

    const element = document.getElementById(elementId);

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const currentWord = words[roleIndex];

        if (!deleting) {

            element.textContent = currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {
                deleting = true;
                setTimeout(type, 1500);
                return;
            }

        } else {

            element.textContent = currentWord.substring(0, charIndex--);

            if (charIndex < 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % words.length;
            }

        }

        setTimeout(type, deleting ? 50 : 100);
    }

    type();
}

// Hero Typing
startTyping("typing-text", roles);

// About Typing
startTyping("about-typing-text", roles);