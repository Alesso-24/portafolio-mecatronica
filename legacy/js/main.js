document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  /* =========================================
       NAVBAR SCROLL EFFECT
       ========================================= */
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* =========================================
       MOBILE MENU TOGGLE
       ========================================= */
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(".nav-links li a");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    // Toggle hamburger icon between bars and times (close)
    const icon = hamburger.querySelector("i");
    if (navLinks.classList.contains("nav-active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close menu when a link is clicked
  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-active");
      const icon = hamburger.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });

  /* =========================================
       SCROLL ANIMATIONS (Intersection Observer)
       ========================================= */
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.15, // Porcentaje del elemento visible antes de activar
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll,
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target); // Dejar de observar una vez que aparece
      }
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  /* =========================================
       ACTIVE NAV LINK HIGHLIGHT
       ========================================= */
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.scrollY + 200; // Offset

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinksItems.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  /* =========================================
       PUPPET FORM SUBMIT (Prevent Page Reload)
       ========================================= */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const statusDiv = document.querySelector(".form-status");
      const btn = document.querySelector(".submit-btn");

      // Simular envío
      const originalBtnHtml = btn.innerHTML;
      btn.innerHTML =
        '<span>Enviando...</span><i class="fas fa-spinner fa-spin"></i>';
      btn.disabled = true;

      setTimeout(() => {
        contactForm.reset();
        btn.innerHTML = originalBtnHtml;
        btn.disabled = false;

        statusDiv.innerHTML =
          '<p style="color: #00e5ff; margin-top: 15px; text-align: center;">¡Mensaje enviado con éxito! Te contactaré pronto.</p>';

        setTimeout(() => {
          statusDiv.innerHTML = "";
        }, 5000);
      }, 1500);
    });
  }
});
