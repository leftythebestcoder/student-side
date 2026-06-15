/* DROPDOWN */

const profileBtn =
document.getElementById("profileBtn");

const dropdownMenu =
document.getElementById("dropdownMenu");

profileBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    dropdownMenu.classList.toggle("show");

});

document.addEventListener("click", () => {

    dropdownMenu.classList.remove("show");

});

/* EVENT SELECTION */

const eventButtons =
document.querySelectorAll(".event-item");

let selectedEvent = eventButtons[0];

eventButtons.forEach(button => {

    button.addEventListener("click", () => {

        eventButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedEvent = button;

        document.getElementById("eventTitle")
            .textContent = button.dataset.title;

        document.getElementById("category")
            .textContent = button.dataset.category;

        document.getElementById("duration")
            .textContent = button.dataset.duration;

        document.getElementById("venue")
            .textContent = button.dataset.venue;

        document.getElementById("status")
            .textContent = button.dataset.status;

        document.getElementById("registration")
            .textContent = button.dataset.registration;

        document.getElementById("organizer")
            .textContent = button.dataset.organizer;

        document.getElementById("description")
            .textContent = button.dataset.description;

    });

});

/* INTERESTED BUTTON */

document
.getElementById("interestedBtn")
.addEventListener("click", () => {

    const interestedEvents =
        JSON.parse(
            localStorage.getItem("interestedEvents")
        ) || [];

    const eventData = {
        title: selectedEvent.dataset.title
    };

    const exists =
        interestedEvents.some(
            event =>
            event.title === eventData.title
        );

    if (!exists) {

        interestedEvents.push(eventData);

        localStorage.setItem(
            "interestedEvents",
            JSON.stringify(interestedEvents)
        );

        alert(
            "Added to Interested Events!"
        );

    } else {

        alert(
            "Already added!"
        );

    }

});