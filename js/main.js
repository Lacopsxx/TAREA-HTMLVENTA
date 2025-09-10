document.addEventListener("DOMContentLoaded", () => {

  const faders = document.querySelectorAll(".hero-text, .hero-media, .card");
  const appearOptions = { threshold: 0.2 };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);
  faders.forEach(el => { appearOnScroll.observe(el); });


  const cards = document.querySelectorAll(".card");
  const modals = document.querySelectorAll(".modal");
  const closes = document.querySelectorAll(".modal-close");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const modalId = card.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "flex";
      }
    });
  });


  closes.forEach(close => {
    close.addEventListener("click", () => {
      const modal = close.closest(".modal");
      modal.style.display = "none";
    });
  });

  window.addEventListener("click", e => {
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  const colorBtns = document.querySelectorAll(".color-btn");

  colorBtns.forEach(btn => {
    btn.style.backgroundColor = btn.dataset.color;

    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal-content");
      const overlay = modal.querySelector(".color-overlay");
      const img = modal.querySelector(".vehicle-preview img");

      if (overlay) {
        overlay.style.backgroundColor = btn.dataset.color;
      }

      if (img && btn.dataset.img) {
        img.src = btn.dataset.img;
      }
    });
  });


  const saveButtons = document.querySelectorAll(".modal .btn.secondary");
  const confirmModal = document.getElementById("modal-confirmacion");

  saveButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentModal = btn.closest(".modal");
      if (currentModal) {
        currentModal.style.display = "none"; 
      }
      if (confirmModal) {
        confirmModal.style.display = "flex"; 
      }
    });
  });
});
