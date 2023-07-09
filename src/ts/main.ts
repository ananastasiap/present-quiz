import '../sass/main.scss';

import { modal, workWithQuestions, closeButtonImg } from './modules/index.ts';

window.addEventListener('DOMContentLoaded', () => {
  modal('.btn--close', '.header__popup');
  workWithQuestions();
  closeButtonImg();
});
