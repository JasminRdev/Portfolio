let hour = new Date().getHours();

if (hour < 12) {
    hour = "Good morning";
} else if (hour > 12 && hour < 18) {
    hour = "Good afternoon";
} else {
    hour = "Good evening";
}

document.getElementById("greetings").innerHTML = hour + ", I'm Jasmin";

function toggleMenu() {
    let menuBtn = document.getElementById("menu-btn");
    let navLinks = document.getElementById("nav-links");

    if (menuBtn.classList.contains("menu-btn-open")) {
        menuBtn.classList.remove("menu-btn-open");
        navLinks.classList.remove("nav-links-open");


    } else {
        menuBtn.classList.add("menu-btn-open");
        navLinks.classList.add("nav-links-open");
    }
}