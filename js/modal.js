document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('modal-form');
  const cardForm = document.getElementById('card-modal-form');
  const modal = document.querySelector('[data-modal]');
  const cardModal = document.querySelector('[data-card-modal]');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(form);

      fetch('./send_email.php', {
        method: 'POST',
        body: formData
      })
        .then(response => response.text())
        .then(data => {
          if (data.trim() === 'success') {
            showMessage('success');
          } else {
            showMessage('error');
          }
          toggleModal(modal);
        })
        .catch(error => {
          console.error('Ошибка:', error);
          showMessage('error');
          toggleModal(modal);
        });
    });
  }

  if (cardForm) {
    cardForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(cardForm);

      fetch('./send_email.php', {
        method: 'POST',
        body: formData
      })
        .then(response => response.text())
        .then(data => {
          if (data.trim() === 'success') {
            showMessage('success');
          } else {
            showMessage('error');
          }
          toggleModal(cardModal);
        })
        .catch(error => {
          console.error('Ошибка:', error);
          showMessage('error');
          toggleModal(cardModal);
        });
    });
  }

  function openCardModal(productName, productImage, productPrice) {
    const modalImage = document.getElementById('modal-product-image');
    const productNameInput = document.getElementById('card-product-name');
    const productPriceInput = document.getElementById('card-product-price');

    if (modalImage) {
      modalImage.src = productImage;
    }
    if (productNameInput) {
      productNameInput.value = productName;
    }
    if (productPriceInput) {
      productPriceInput.value = productPrice;
    }
    toggleModal(cardModal);
  }

  function showMessage(type) {
    const message = type === 'success' ? successMessage : errorMessage;
    if (message) {
      message.style.display = 'block';
      message.style.position = 'fixed';
      message.style.top = '50%';
      message.style.left = '50%';
      message.style.transform = 'translate(-50%, -50%)';

      setTimeout(() => {
        message.style.display = 'none';
      }, 2000);
    } else {
      console.error('Сообщение не найдено: ', type + '-message');
    }
  }

  function toggleModal(modalElement) {
    if (modalElement) {
      modalElement.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
    }
  }

  const modalRefs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
  };

  if (modalRefs.openModalBtn) {
    modalRefs.openModalBtn.forEach((element) => {
      element.addEventListener('click', () => toggleModal(modal));
    });
  }

  if (modalRefs.closeModalBtn) {
    modalRefs.closeModalBtn.addEventListener('click', () => toggleModal(modal));
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        toggleModal(modal);
      }
    });
  }

  const cardModalRefs = {
    openModalBtn: document.querySelectorAll('[data-card-modal-open]'),
    closeModalBtn: document.querySelector('[data-card-modal-close]'),
  };

  if (cardModalRefs.openModalBtn) {
    cardModalRefs.openModalBtn.forEach((element) => {
      element.addEventListener('click', () => toggleModal(cardModal));
    });
  }

  if (cardModalRefs.closeModalBtn) {
    cardModalRefs.closeModalBtn.addEventListener('click', () => toggleModal(cardModal));
  }

  if (cardModal) {
    cardModal.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        toggleModal(cardModal);
      }
    });
  }

  const params = new URLSearchParams(window.location.search);
  if (params.get('status') === 'success') {
    showMessage('success');
  } else if (params.get('status') === 'error') {
    showMessage('error');
  }

  window.openCardModal = openCardModal;
});
