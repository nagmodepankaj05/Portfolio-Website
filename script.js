function ScrollHome() {
  window.scrollTo(0, 0);
}
function ScrollAbout() {
  window.scrollTo(0, 400);
}
function ScrollSkills() {
  window.scrollTo(0, 850);
}
function ScrollProjects() {
  window.scrollTo(0, 1500);
}
function ScrollContact() {
  window.scrollTo(0, 2350);
}
function scrollContactForm() {
  window.scrollTo(0, 2650);
}

let hideMenu = document.getElementById("hideMenu");
function toggleHideMenu() {
    hideMenu.classList.toggle("open-menu");
}