export const modal = (closeSelector: string, modalSelector: string) => {
  const close: HTMLElement | null = document.querySelector(closeSelector);
  const modal: HTMLDialogElement | null = document.querySelector(modalSelector);

  if (!close || !modal) {
    return;
  }

  close.addEventListener('click', (event) => {
    event.preventDefault();
    modal.close();
  });

};