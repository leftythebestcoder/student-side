const profileBtn =
document.getElementById("profileBtn");

const dropdownMenu =
document.getElementById("dropdownMenu");

/* Toggle dropdown */

profileBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    dropdownMenu.classList.toggle("show");

});

/* Close dropdown outside click */

document.addEventListener("click", (event) => {

    if (
        !profileBtn.contains(event.target) &&
        !dropdownMenu.contains(event.target)
    ) {
        dropdownMenu.classList.remove("show");
    }

});

/* Mock update button */

document
.getElementById("updateBtn")
.addEventListener("click", () => {

    alert("Profile updated successfully.");

});
