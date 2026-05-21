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
