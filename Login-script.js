// Selectors
const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
const langBtn = document.querySelector(".lang-btn");
const langDropdown = document.querySelector(".lang-dropdown");
const homeBtn = document.querySelector(".home-btn"); // Added the correct home button selector

// Home Button Click Event
homeBtn.addEventListener("click", () => {
    window.location.href = "home.html"; // Ensure this points to your correct home page URL
});

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => {
    navbarMenu.classList.remove("show-menu");
});

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
    formPopup.classList.toggle("show");
    langDropdown.classList.remove("show"); // Ensure language dropdown is closed when popup is open
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => {
    document.body.classList.remove("show-popup");
    formPopup.classList.remove("show");
});

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const isSignup = link.id === 'signup-link';

        if (isSignup) {
            formPopup.classList.add("show-signup");
            formPopup.querySelector('.form-box.login').style.opacity = '0';
            setTimeout(() => {
                formPopup.querySelector('.form-box.login').style.display = 'none';
                formPopup.querySelector('.form-box.signup').style.display = 'flex';
            }, 300);
        } else {
            formPopup.classList.remove("show-signup");
            formPopup.querySelector('.form-box.signup').style.opacity = '0';
            setTimeout(() => {
                formPopup.querySelector('.form-box.signup').style.display = 'none';
                formPopup.querySelector('.form-box.login').style.display = 'flex';
            }, 300);
        }

        // Allow the next transition to begin
        setTimeout(() => {
            if (isSignup) {
                formPopup.querySelector('.form-box.signup').style.opacity = '1';
            } else {
                formPopup.querySelector('.form-box.login').style.opacity = '1';
            }
        }, 50);
    });
});

// Language Button Click Event
langBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up to the document
    langDropdown.classList.toggle("show"); // Toggle dropdown visibility
});

// Close language dropdown if clicking outside
document.addEventListener("click", (event) => {
    if (!langBtn.contains(event.target) && !langDropdown.contains(event.target)) {
        langDropdown.classList.remove("show");
    }
});
