//ocultar nav
function toggleNavbar(show) {
    const navbarNav = document.getElementById("navbarNav");
    if (typeof show === "boolean") {
        navbarNav.style.display = show ? "block" : "none";
    } else {
        navbarNav.style.display = navbarNav.style.display === "block" ? "none" : "block";
    }
}

