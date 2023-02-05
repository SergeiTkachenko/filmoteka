const refs = {
  openModalBtn: document.querySelector('[data-modal-open-team]'),
  closeModalBtn: document.querySelector('[data-modal-close-team]'),
  backdrop: document.querySelector('.backdrop-footer'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onClickBackdrop);

function onOpenModal() {
  refs.backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onPressESC);

  let scrollX = window.scrollX;
  let scrollY = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(scrollX, scrollY);
  };
}

function onCloseModal() {
  refs.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onPressESC);

  window.onscroll = function () {
    window.scrollTo();
  };
}

function onClickBackdrop(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();

    window.onscroll = function () {
      window.scrollTo();
    };
  }
}

function onPressESC(e) {
  if (e.code === 'Escape') {
    onCloseModal();

    window.onscroll = function () {
      window.scrollTo();
    };
  }
}
