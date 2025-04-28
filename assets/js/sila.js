 // Navigation toggle
 const menuBtn = document.querySelector('.menu-btn');
 const navList = document.querySelector('.nav-list');
 
 menuBtn.addEventListener('click', () => {
     navList.classList.toggle('active');
 });
 
 // Navigation scroll effect
 window.addEventListener('scroll', () => {
     const nav = document.querySelector('.nav-container');
     if (window.scrollY > 50) {
         nav.classList.add('scrolled');
     } else {
         nav.classList.remove('scrolled');
     }
 });
 
 // Smooth scrolling for navigation links
 document.querySelectorAll('.nav-link').forEach(link => {
     link.addEventListener('click', function(e) {
         e.preventDefault();
         
         navList.classList.remove('active');
         
         const targetId = this.getAttribute('href');
         const targetSection = document.querySelector(targetId);
         
         window.scrollTo({
             top: targetSection.offsetTop - 70,
             behavior: 'smooth'
         });
     });
 });
 
 // Portfolio filter
 const filterBtns = document.querySelectorAll('.filter-btn');
 const portfolioItems = document.querySelectorAll('.portfolio-item');
 
 filterBtns.forEach(btn => {
     btn.addEventListener('click', () => {
         // Set active class
         filterBtns.forEach(btn => btn.classList.remove('active'));
         btn.classList.add('active');
         
         // Filter items
         const filter = btn.getAttribute('data-filter');
         
         portfolioItems.forEach(item => {
             if (filter === 'all' || item.getAttribute('data-category') === filter) {
                 item.style.display = 'block';
             } else {
                 item.style.display = 'none';
             }
         });
     });
 });
 
 // Form submission
 // Modern form submission handling for GitHub Pages
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function(e) {
e.preventDefault();

// Show loading state
formStatus.innerHTML = '<p class="sending">Sending message...</p>';

// Get form data
const formData = new FormData(contactForm);

// Send data using fetch API
fetch(contactForm.action, {
 method: 'POST',
 body: formData,
 headers: {
     'Accept': 'application/json'
 }
})
.then(response => response.json())
.then(data => {
 if (data.ok) {
     formStatus.innerHTML = '<p class="success">Thank you! Your message has been sent successfully.</p>';
     contactForm.reset();
 } else {
     formStatus.innerHTML = '<p class="error">Sorry, there was a problem sending your message. Please try again.</p>';
 }
})
.catch(error => {
 formStatus.innerHTML = '<p class="error">Sorry, there was a problem sending your message. Please try again.</p>';
 console.error('Error:', error);
});
});

// Portfolio projects data
const portfolioProjects = {
'fitness-tracker': {
 title: 'Pothole Dashboard',
 category: 'Information Management System',
 image: 'assets/imgs/potholeD.png',
 description: 'An intelligent pothole detection and monitoring platform designed for maintenance teams and city planners. The system leverages machine learning to automatically detect potholes and provides a high-level dashboard with real-time analytics, historical trends, and actionable insights. It empowers decision-makers to prioritize repairs, optimize resource allocation, and improve road safety by analyzing pothole patterns across the city',
 technologies: 'Python, ML, Firebase, HTML, CSS & JS',
 client: 'KeRRA',
 date: 'March 2024',
 link: 'https://example.com/Pothole'
},
'ecommerce': {
 title: 'School Management System',
 category: 'Web Development',
 image: '../assets/imgs/shopMangaerApp.png',
 description: 'A comprehensive school management platform designed to streamline administrative tasks and enhance communication between teachers, students, and parents. The system features modules for student enrollment, attendance tracking, grading, fee management, and academic reporting. It also includes an intuitive admin dashboard for efficient oversight of school operations.',
 technologies: 'React, Node.js, MySql, RestAPI',
 client: 'Philadelphia Academy- Malili',
 date: 'January 2024',
 link: 'https://example.com/'
},
'potfolio': {
 title: 'potfolio UI Kit',
 category: 'UI/UX Design',
 image: '../assets/imgs/potfolio.png',
 description: 'A modern and versatile UI kit tailored for portfolio websites. Featuring a collection of over 50 reusable components, including project galleries, service sections, testimonials, blogs, and contact forms. The kit focuses on clean, responsive design principles to help designers and developers quickly build professional portfolio sites with consistent visual appeal.',
 technologies: 'Figma, Adobe XD, Illustrator',
 client: 'TravelWise Co.',
 date: 'November 2023',
 link: 'https://example.com/'
},
'shop-app': {
 title: 'Shop Management App',
 category: 'Mobile App',
 image: '../assets/imgs/potfolio.png',
 description: 'A mobile-based shop management application tailored for small and medium-sized retail businesses. The app allows shop owners to manage inventory, track sales, record expenses, and monitor daily profits in real-time. It features intuitive dashboards, product and category management, and offline functionality for use in areas with limited internet access.',
 technologies: 'Java, Android Jetpack, Firebase',
 client: 'Malek Supplies - Wote',
 date: 'September 2024',
 link: 'https://example.com/'
},

'pos-site': {
 title: 'ePOS',
 category: 'Web Development',
 image: 'assets/imgs/web-3.png',
 description: 'A fully integrated Point of Sale (POS) system developed for retail and shop management. The platform streamlines daily sales tracking, transaction processing, and inventory management. Key features include real-time stock updates, restocking alerts, product tracking, and an intuitive analytics dashboard for visualizing sales trends, revenue performance, and inventory insights. Designed with a user-friendly interface to ensure easy adoption by shop owners and staff with minimal technical expertise.',
 technologies: 'PHP (Laravel), Bootstrap, MySQL',
 client: 'Internal Development Project',
 date: '2024',
 link: 'https://example.com/'
},
'food-delivery': {
 title: 'Church Website',
 category: 'UI/UX Design',
 image: 'assets/imgs/chrchWebsite.jpg',
 description: 'A comprehensive UI/UX design for a food delivery application that focuses on user experience and efficient ordering process. The design includes restaurant browsing, menu exploration, order tracking, and payment screens.',
 technologies: 'HTML, CSS, Javascript',
 client: 'Chemondi SDA Church',
 date: 'May 2023',
 link: 'https://example.com/Church-Website'
}
};

// Portfolio Modal functionality
// Portfolio Modal functionality
document.addEventListener('DOMContentLoaded', function() {
const modal = document.getElementById('portfolioModal');
const previewButtons = document.querySelectorAll('.preview-btn');
const closeModal = document.querySelector('.close-modal');

// Modal elements
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalTechnologies = document.getElementById('modalTechnologies');
const modalClient = document.getElementById('modalClient');
const modalDate = document.getElementById('modalDate');
const modalLink = document.getElementById('modalLink');

// Open modal with project data
previewButtons.forEach(button => {
 button.addEventListener('click', function() {
     const projectKey = this.getAttribute('data-project');
     const project = portfolioProjects[projectKey];
     
     if (project) {
         // Populate modal with project data
         modalTitle.textContent = project.title;
         modalCategory.textContent = project.category;
         modalImage.src = project.image;
         modalImage.alt = project.title;
         modalDescription.textContent = project.description;
         modalTechnologies.textContent = project.technologies;
         modalClient.textContent = project.client;
         modalDate.textContent = project.date;
        //  modalLink.href = project.link;
         
         // Show modal - first set display to block, then add show class
         modal.style.display = 'block';
         // Use setTimeout to ensure display property is applied before transitioning
         setTimeout(() => {
             modal.classList.add('show');
         }, 10);
         document.body.style.overflow = 'hidden'; // Prevent scrolling
     }
 });
});

// Close modal functions
function closeModalFunction() {
 modal.classList.remove('show');
 // Wait for transition to complete before hiding
 setTimeout(() => {
     if (!modal.classList.contains('show')) {
         modal.style.display = 'none';
     }
     document.body.style.overflow = ''; // Re-enable scrolling
 }, 300);
}

closeModal.addEventListener('click', closeModalFunction);

// Close when clicking outside the modal content
modal.addEventListener('click', function(e) {
 if (e.target === modal) {
     closeModalFunction();
 }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
 if (e.key === 'Escape' && modal.classList.contains('show')) {
     closeModalFunction();
 }
});
});