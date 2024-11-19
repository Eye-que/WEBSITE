// Existing JavaScript Code
const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu ? navbarMenu.querySelector(".close-btn") : null;
const langBtn = document.querySelector(".lang-btn");
const langDropdown = document.querySelector(".lang-dropdown");
const menuToggle = document.querySelector('.menu-toggle');
const dropdownContent = document.querySelector('.dropdown-content');

// New filter buttons
const filterBtn = document.querySelector(".filter-btn");
const employmentTypeBtn = document.querySelector(".employment-type-btn");
const industryBtn = document.querySelector(".industry-btn");

// Sidebar Elements
const jobSidebar = document.getElementById('jobSidebar');
const closeSidebarBtn = document.querySelector('.close-sidebar');
const sidebarJobTitle = document.getElementById('sidebarJobTitle');
const sidebarJobDescription = document.getElementById('sidebarJobDescription');
const sidebarJobRequirements = document.getElementById('sidebarJobRequirements');
const chatApplyBtn = document.getElementById('chatApplyBtn');
const saveBtn = document.getElementById('saveBtn');

// Job Data
const jobsData = {
    
    'software-engineer': {  
        title: 'Software Engineer',
        description: 'Join our team to develop innovative software solutions.',
        requirements: [
            'Bachelor\'s degree in Computer Science or related field',
            '3+ years of experience in software development',
            'Proficiency in JavaScript, Python, or Java',
            'Strong problem-solving skills'
        ]
    },
    'data-analyst': {
        title: 'Data Analyst',
        description: 'Analyze and interpret complex data to help us make better business decisions.',
        requirements: [
            'Bachelor\'s degree in Statistics, Mathematics, or related field',
            '2+ years of experience in data analysis',
            'Proficiency in SQL and data visualization tools',
            'Excellent analytical skills'
        ]
    },
    'product-manager': {
        title: 'Product Manager',
        description: 'Lead product development from conception to launch.',
        requirements: [
            'Bachelor\'s degree in Business, Engineering, or related field',
            '4+ years of experience in product management',
            'Strong leadership and communication skills',
            'Ability to work cross-functionally'
        ]
    },
    'ux-designer': {
        title: 'UX Designer',
        description: 'Design intuitive user experiences for our applications.',
        requirements: [
            'Bachelor\'s degree in Design or related field',
            '3+ years of experience in UX/UI design',
            'Proficiency in design tools like Sketch or Adobe XD',
            'Strong portfolio showcasing design projects'
        ]
    },
    'marketing-specialist': {
        title: 'Marketing Specialist',
        description: 'Develop and execute marketing strategies to promote our brand.',
        requirements: [
            'Bachelor\'s degree in Marketing, Communications, or related field',
            '2+ years of experience in marketing',
            'Strong understanding of digital marketing channels',
            'Excellent written and verbal communication skills'
        ]
    },
    'hr-manager': {
        title: 'HR Manager',
        description: 'Oversee recruitment, training, and employee relations.',
        requirements: [
            'Bachelor\'s degree in Human Resources or related field',
            '3+ years of experience in HR management',
            'Strong communication and interpersonal skills',
            'Knowledge of labor laws and regulations'
        ]
    },
    'financial-analyst': {
        title: 'Financial Analyst',
        description: 'Provide financial forecasting, reporting, and operational metrics.',
        requirements: [
            'Bachelor\'s degree in Finance or related field',
            '2+ years of experience in financial analysis',
            'Proficiency in financial modeling and analysis tools',
            'Strong analytical and problem-solving skills'
        ]
    },
    'web-developer': {
        title: 'Web Developer',
        description: 'Create and maintain websites and web applications.',
        requirements: [
            'Bachelor\'s degree in Computer Science or related field',
            '2+ years of experience in web development',
            'Proficiency in HTML, CSS, and JavaScript',
            'Familiarity with backend technologies is a plus'
        ]
    },
    'graphic-designer': {
        title: 'Graphic Designer',
        description: 'Design visual content for digital and print media.',
        requirements: [
            'Bachelor\'s degree in Graphic Design or related field',
            '3+ years of experience in graphic design',
            'Proficiency in design software like Adobe Creative Suite',
            'Strong portfolio showcasing design work'
        ]
    },
    'sales-manager': {
        title: 'Sales Manager',
        description: 'Lead the sales team to achieve revenue targets.',
        requirements: [
            'Bachelor\'s degree in Business Administration or related field',
            '5+ years of experience in sales management',
            'Strong leadership and team management skills',
            'Excellent negotiation and communication skills'
        ]
    }
};

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
// Filter Button Click Event
if (filterBtn) {
    filterBtn.addEventListener("click", () => {
        // Your filter logic here (e.g., open filter modal)
        console.log("Filter button clicked");
    });
}

// Employment Type Button Click Event
if (employmentTypeBtn) {
    employmentTypeBtn.addEventListener("click", () => {
        // Your employment type logic here
        console.log("Employment Type button clicked");
    });
}

// Industry Button Click Event
if (industryBtn) {
    industryBtn.addEventListener("click", () => {
        // Your industry logic here
        console.log("Industry button clicked");
    });
}

/* ------------------- Suggested Jobs Interactivity ------------------- */

// Function to open sidebar with job details
function openSidebar(jobKey) {
    const job = jobsData[jobKey];
    if (job) {
        sidebarJobTitle.textContent = job.title;
        sidebarJobDescription.textContent = job.description;

        // Clear existing requirements
        sidebarJobRequirements.innerHTML = '';
        job.requirements.forEach(req => {
            const li = document.createElement('li');
            li.textContent = req;
            sidebarJobRequirements.appendChild(li);
        });

        // Show sidebar
        jobSidebar.classList.add('active');
    }
}

// Function to close sidebar
function closeSidebar() {
    jobSidebar.classList.remove('active');
}

// Event listener for closing sidebar
if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', closeSidebar);
}

// Event listeners for job cards
const jobCards = document.querySelectorAll('.job-card');

jobCards.forEach(card => {
    card.addEventListener('click', () => {
        const jobKey = card.getAttribute('data-job');
        openSidebar(jobKey);
    });
});

// Event listeners for sidebar buttons
if (chatApplyBtn) {
    chatApplyBtn.addEventListener('click', () => {
        window.location.href = 'Chat.html'; // Redirect to chat page    
    });
}

if (saveBtn) {
    saveBtn.addEventListener('click', () => {
        // Implement save functionality here
        console.log("Save button clicked");
        alert("Job saved successfully!");
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

