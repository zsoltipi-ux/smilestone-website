/* SmileStone — Shared JavaScript */

document.addEventListener('DOMContentLoaded', function () {

  // ─── Active nav link ───────────────────────────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ─── Mobile menu toggle ────────────────────────────────────────────────────
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      const icon = menuBtn.querySelector('svg');
      if (icon) {
        menuBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
      }
    });
  }

  // ─── FAQ Accordion ─────────────────────────────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(function (question) {
    question.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      const chevron = this.querySelector('.faq-chevron');
      const isOpen = answer.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-answer').forEach(function (a) {
        a.classList.remove('open');
      });
      document.querySelectorAll('.faq-chevron').forEach(function (c) {
        c.classList.remove('open');
      });

      if (!isOpen) {
        answer.classList.add('open');
        if (chevron) chevron.classList.add('open');
      }
    });
  });

  // ─── Contact form ──────────────────────────────────────────────────────────
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      // Clear previous errors
      contactForm.querySelectorAll('.form-input').forEach(function (input) {
        input.classList.remove('error');
      });
      contactForm.querySelectorAll('.field-error').forEach(function (el) {
        el.remove();
      });

      // Validate required fields
      ['name', 'email', 'message'].forEach(function (fieldId) {
        const field = document.getElementById(fieldId);
        if (field && !field.value.trim()) {
          field.classList.add('error');
          const err = document.createElement('p');
          err.className = 'field-error text-red-500 text-xs mt-1';
          err.textContent = 'Ez a mező kötelező.';
          field.parentNode.appendChild(err);
          valid = false;
        }
      });

      // Validate email format
      const emailField = document.getElementById('email');
      if (emailField && emailField.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
        emailField.classList.add('error');
        const err = document.createElement('p');
        err.className = 'field-error text-red-500 text-xs mt-1';
        err.textContent = 'Érvényes email cím szükséges.';
        emailField.parentNode.appendChild(err);
        valid = false;
      }

      // Validate privacy checkbox
      const privacyCheck = document.getElementById('privacy');
      if (privacyCheck && !privacyCheck.checked) {
        const err = document.createElement('p');
        err.className = 'field-error text-red-500 text-xs mt-1';
        err.textContent = 'Az adatvédelmi tájékoztató elfogadása kötelező.';
        privacyCheck.parentNode.parentNode.appendChild(err);
        valid = false;
      }

      if (valid) {
        // Show success state
        const formContainer = document.getElementById('form-container');
        const successMsg = document.getElementById('form-success');
        if (formContainer) formContainer.style.display = 'none';
        if (successMsg) successMsg.style.display = 'block';
      }
    });
  }

  // ─── Scroll-triggered nav shadow ──────────────────────────────────────────
  const nav = document.querySelector('.nav-sticky');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        nav.style.boxShadow = '0 2px 16px rgba(0,0,0,0.09)';
      } else {
        nav.style.boxShadow = '0 1px 0 rgba(0,0,0,0.06)';
      }
    });
  }

});
