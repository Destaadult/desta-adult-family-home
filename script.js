// Background slideshow

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000);


// Dark mode

function toggleDark() {

    document.body.classList.toggle("dark");

}


// Learn more button

function showMessage() {

    alert("Welcome to Desta Adult Family Home. We provide safe and caring support.");

}


// Contact message

function sendMessage() {

    alert("Thank you! Your message has been received.");

}


// Search function

function searchPage() {

    let input = document.getElementById("searchInput");

    if (!input) return;

    let text = input.value.toLowerCase();

    document.body.innerHTML = document.body.innerHTML;

    if (text.includes("desta")) {

        alert("Desta Adult Family Home found!");

    }

}
