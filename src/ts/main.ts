import '../sass/main.scss';

import { modal, workWithQuestions } from './modules/index.ts';

window.addEventListener('DOMContentLoaded', () => {
  modal('.btn-close', '.header__popup');
  workWithQuestions();
});
