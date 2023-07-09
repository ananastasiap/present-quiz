export const closeButtonImg = () => {
  let indexOfImg: number = 0;
  const closeButtonImgs: Array<string> = ['/images/start.png', '/images/start-1.png'];
  const closeButton: HTMLImageElement | null = document.querySelector('.btn-img');

  if (!closeButton) {
    return;
  }

  const changeButtonImg = () => {
    indexOfImg++;

    if (indexOfImg >= closeButtonImgs.length) {
      indexOfImg = 0;
    }

    closeButton.style.opacity = '0';

    setTimeout(function() {
      closeButton.src = closeButtonImgs[indexOfImg];

      closeButton.style.opacity = '1';
      setTimeout(changeButtonImg, 2000);
    }, 500)
  };

  changeButtonImg();
};