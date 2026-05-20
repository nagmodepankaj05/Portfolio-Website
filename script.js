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