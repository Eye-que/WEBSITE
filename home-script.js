// Existing JavaScript Code
const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu ? navbarMenu.querySelector(".close-btn") : null;
const langBtn = document.querySelector(".lang-btn");
const langDropdown = document.querySelector(".lang-dropdown");
const menuToggle = document.querySelector('.menu-toggle');
const dropdownContent = document.querySelector('.dropdown-content');

// Show mobile menu
if (hamburgerBtn && navbarMenu) {
    hamburgerBtn.addEventListener("click", () => {
        navbarMenu.classList.toggle("show-menu");
    });
}

// Hide mobile menu
if (hideMenuBtn && navbarMenu) {
    hideMenuBtn.addEventListener("click", () => {
        navbarMenu.classList.remove("show-menu");
    });
}

// Language Button Click Event
if (langBtn && langDropdown) {
    langBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent event from bubbling up
        langDropdown.classList.toggle("show"); // Toggle language dropdown
    });
}

// Close the language dropdown and other dropdowns when clicking outside
document.addEventListener("click", (event) => {
    // Close language dropdown
    if (langBtn && langDropdown) {
        if (!langBtn.contains(event.target) && !langDropdown.contains(event.target)) {
            langDropdown.classList.remove("show"); // Hide language dropdown
        }
    }

    // Close other dropdowns
    if (menuToggle && dropdownContent) {
        if (!menuToggle.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show'); // Hide dropdown if click outside
        }
    }
});

// Close language dropdown and other dropdowns on Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        if (langDropdown) {
            langDropdown.classList.remove("show"); // Hide language dropdown
        }
        if (dropdownContent) {
            dropdownContent.classList.remove('show'); // Hide other dropdown on Escape key
        }
        closeSidebar(); // Also close sidebar on Escape key
    }
});

// Toggle dropdown visibility on menu toggle click
if (menuToggle && dropdownContent) {
    menuToggle.addEventListener('click', () => {
        dropdownContent.classList.toggle('show'); // Toggle the visibility of dropdown
    });
}

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.style.transform = 'translateY(-100%)'; // Hide header
    } else {
        // Scroll up
        header.style.transform = 'translateY(0)'; // Show header
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = document.querySelectorAll(".team-member");
    const modal = document.getElementById("memberModal");
    const modalName = document.getElementById("modalName");
    const modalRole = document.getElementById("modalRole");
    const modalDescription = document.getElementById("modalDescription");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close-btn");

    teamMembers.forEach(member => {
        member.addEventListener("click", function () {
            modal.style.display = "block"; // Show modal
            modalName.textContent = this.getAttribute("data-name");
            modalRole.textContent = this.getAttribute("data-role");
            modalDescription.textContent = this.getAttribute("data-description");
            modalImage.src = this.querySelector('.member-pic').src; // Set the modal image
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide modal when clicking outside
        }
    });
});

