// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const nav = document.querySelector(".nav")

  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener("click", () => {
      nav.classList.toggle("nav-open")
      mobileMenuBtn.classList.toggle("menu-open")
    })
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        // Close mobile menu if open
        nav.classList.remove("nav-open")
        mobileMenuBtn.classList.remove("menu-open")
      }
    })
  })

  // Newsletter subscription
  const newsletterBtn = document.querySelector(".newsletter-btn")
  const emailInput = document.getElementById("emailInput")

  if (newsletterBtn && emailInput) {
    newsletterBtn.addEventListener("click", () => {
      const email = emailInput.value.trim()
      if (email && isValidEmail(email)) {
        alert("Thank you for subscribing! We'll keep you updated on our latest climbing adventures.")
        emailInput.value = ""
      } else {
        alert("Please enter a valid email address.")
      }
    })

    emailInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        newsletterBtn.click()
      }
    })
  }

  // Event sign up buttons
  const signUpButtons = document.querySelectorAll(".event-card .btn")
  signUpButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const eventCard = this.closest(".event-card")
      const eventTitle = eventCard.querySelector(".event-title").textContent
      alert(`Thanks for your interest in ${eventTitle}! We'll contact you with more details soon.`)
    })
  })

  // Join buttons
  const joinButtons = document.querySelectorAll('.btn:contains("JOIN")')
  document.querySelectorAll(".btn").forEach((button) => {
    if (button.textContent.includes("JOIN")) {
      button.addEventListener("click", () => {
        alert("Welcome to Jam Rock Climbers! We'll be in touch with membership details soon.")
      })
    }
  })

  // Story read more buttons
  const storyLinks = document.querySelectorAll(".story-link")
  storyLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const storyTitle = this.closest(".story-content").querySelector(".story-title").textContent
      alert(`Coming soon: ${storyTitle} - Full story will be available on our blog!`)
    })
  })

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroImage = document.querySelector(".hero-image")

    if (heroImage) {
      const rate = scrolled * -0.5
      heroImage.style.transform = `translateY(${rate}px)`
    }
  })

  // Add animation classes on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".section-title-box, .event-card, .activity-card, .story-card")
  animateElements.forEach((el) => {
    observer.observe(el)
  })
})

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Add CSS for mobile menu and animations
const additionalStyles = `
    .nav-open {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: white;
        border: 4px solid var(--color-border);
        border-top: none;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        box-shadow: var(--shadow-brutal-xl);
    }
    
    .menu-open span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .menu-open span:nth-child(2) {
        opacity: 0;
    }
    
    .menu-open span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @media (max-width: 767px) {
        .nav {
            display: none;
        }
        
        .mobile-menu-btn {
            display: flex;
        }
    }
`

// Inject additional styles
const styleSheet = document.createElement("style")
styleSheet.textContent = additionalStyles
document.head.appendChild(styleSheet)
