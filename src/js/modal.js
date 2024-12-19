const addButton = document.getElementById('add-button');
const closeButton = document.getElementById('close-modal-btn');
const modal = document.getElementById('modal');

addButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-hidden');
}