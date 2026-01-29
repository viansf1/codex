const modalTriggers = document.querySelectorAll("[data-modal-open]");
const modals = document.querySelectorAll("[data-modal]");

const openModal = (name) => {
  const modal = document.querySelector(`[data-modal="${name}"]`);
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = (modal) => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
};

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => openModal(trigger.dataset.modalOpen));
});

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target.matches("[data-modal-close]")) {
      closeModal(modal);
    }
  });

  const closeButton = modal.querySelector(".modal__close");
  if (closeButton) {
    closeButton.addEventListener("click", () => closeModal(modal));
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modals.forEach((modal) => closeModal(modal));
  }
});

const forms = document.querySelectorAll("[data-form]");
forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const success = form.querySelector("[data-success]");
    if (success) {
      success.hidden = false;
    }
    form.reset();
  });
});
