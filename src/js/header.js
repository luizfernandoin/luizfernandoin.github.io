let show = true;
const menuSection = document.querySelector(".container-nav")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show;
})