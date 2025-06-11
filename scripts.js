// scripts.js

document.addEventListener('DOMContentLoaded', function () {
  // Dark Mode Toggle
  const toggleBtn = document.getElementById('dark-mode-toggle');
  const body = document.body;

  function enableDarkMode() {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
    localStorage.setItem('darkMode', 'enabled');
  }

  function disableDarkMode() {
    body.classList.remove('dark-mode');
    toggleBtn.textContent = '🌙';
    localStorage.setItem('darkMode', 'disabled');
  }

  // Initialize on page load
  if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });

  // Booking Form Validation
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Simple validation
      if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();
        return;
      }

      // Custom validation example: date must be today or later
      const dateInput = bookingForm.querySelector('#date');
      const selectedDate = new Date(dateInput.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        alert('Please select a valid date (today or later).');
        dateInput.focus();
        return;
      }

      // If all valid, submit the form (here you can add your form submission logic)
      alert('Thank you for your booking! We will contact you soon.');
      bookingForm.reset();
    });
  }
  // Smooth Scroll for Navigation Links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
      // Close the menu when a link is clicked (for responsive nav)
      navMenu.classList.remove('active');
    });
  });
  // Image Carousel
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel img');
  let currentSlide = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'block' : 'none';
    });
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  document.querySelector('.carousel-next').addEventListener('click', nextSlide);
  document.querySelector('.carousel-prev').addEventListener('click', prevSlide);
  // Initialize the carousel
  showSlide(currentSlide);
  // Contact Form Validation
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Simple validation
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      // Custom validation example: email format
      const emailInput = contactForm.querySelector('#email');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
      }

      // If all valid, submit the form (here you can add your form submission logic)
      alert('Thank you for contacting us! We will get back to you soon.');
      contactForm.reset();
    });
  }

  // Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  // Responsive Navigation Menu
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav ul');
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
  // Initialize the menu state
  if (window.innerWidth <= 768) {
    navMenu.classList.remove('active');
  }
  // Handle window resize for responsive menu
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
    }
  });
  // Lazy Loading Images
  const lazyLoadImages = document.querySelectorAll('img.lazy'); 
  if ('IntersectionObserver' in window) {
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          lazyImageObserver.unobserve(img);
        }
      });
    });

    lazyLoadImages.forEach(image => {
      lazyImageObserver.observe(image);
    });
  }
  // Fallback for browsers that do not support IntersectionObserver
  else {
    lazyLoadImages.forEach(image => {
      image.src = image.dataset.src;
      image.classList.remove('lazy');
    });
  }
  // Form Reset Button
  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (bookingForm) bookingForm.reset();
      if (contactForm) contactForm.reset();
      alert('Forms have been reset.');
    });
  }
  // Initialize the reset button visibility
  if (bookingForm || contactForm) {
    resetBtn.style.display = 'block';
  }
  // Smooth Scroll for Back to Top Button
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  // Initialize the back to top button visibility
  if (window.innerWidth <= 768) {
    backToTopBtn.style.display = 'none';
  }
  // Handle window resize for back to top button
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  // Initialize the dark mode toggle button
  if (toggleBtn) {
    toggleBtn.style.display = 'block';
  } else {
    toggleBtn.style.display = 'none';
  }
  // Handle window resize for dark mode toggle button
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      toggleBtn.style.display = 'block';
    } else {
      toggleBtn.style.display = 'none';
    }
  });
  // Initialize the carousel controls
  document.querySelector('.carousel-next').style.display = 'block';
  document.querySelector('.carousel-prev').style.display = 'block';
  // Handle window resize for carousel controls
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      document.querySelector('.carousel-next').style.display = 'block';
      document.querySelector('.carousel-prev').style.display = 'block';
    } else {
      document.querySelector('.carousel-next').style.display = 'none';
      document.querySelector('.carousel-prev').style.display = 'none';
    }
  });
  // Initialize the navigation menu toggle
  if (menuToggle) {
    menuToggle.style.display = 'block';
  }
  // Handle window resize for navigation menu toggle
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menuToggle.style.display = 'none';
      navMenu.classList.remove('active');
    } else {
      menuToggle.style.display = 'block';
    }
  });
  // Initialize the lazy loading images
  lazyLoadImages.forEach(image => {
    if (image.dataset.src) {
      image.src = image.dataset.src;
      image.classList.remove('lazy');
    }
  });
  // Handle window resize for lazy loading images
  window.addEventListener('resize', () => {
    lazyLoadImages.forEach(image => {
      if (image.dataset.src) {
        image.src = image.dataset.src;
        image.classList.remove('lazy');
      }
    });
  });
  // Initialize the form reset button
  if (resetBtn) {
    resetBtn.style.display = 'block';
  }
  // Handle window resize for form reset button
  window.addEventListener('resize', () => {
    if (bookingForm || contactForm) {
      resetBtn.style.display = 'block';
    } else {
      resetBtn.style.display = 'none';
    }
  });
  // Initialize the contact form validation
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Simple validation
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      // Custom validation example: email format
      const emailInput = contactForm.querySelector('#email');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
      }

      // If all valid, submit the form (here you can add your form submission logic)
      alert('Thank you for contacting us! We will get back to you soon.');
      contactForm.reset();
    });
  }

  // Initialize the booking form validation
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Simple validation
      if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();
        return;
      }

      // Custom validation example: date must be today or later
      const dateInput = bookingForm.querySelector('#date');
      const selectedDate = new Date(dateInput.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        alert('Please select a valid date (today or later).');
        dateInput.focus();
        return;
      }

      // If all valid, submit the form (here you can add your form submission logic)
      alert('Thank you for your booking! We will contact you soon.');
      bookingForm.reset();
    });
  }
  // Initialize the smooth scroll for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  // Initialize the image carousel
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'block' : 'none';
    });
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  document.querySelector('.carousel-next').addEventListener('click', nextSlide);
  document.querySelector('.carousel-prev').addEventListener('click', prevSlide);
});