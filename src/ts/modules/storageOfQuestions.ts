interface Question {
  text: string;
  correctAnswer: string;
  locationOfALetter: {
    src: string;
    alt: string;
  };
}

const createQuestion = (text: string, correctAnswer: string, src: string, alt: string): Question => {
  const question: Question = {
    text: text,
    correctAnswer: correctAnswer,
    locationOfALetter: {
      src: src,
      alt: alt
    }
  };
  return question;
}

export const questions: Question[] = [
  createQuestion(
    'Я макне с маленькими лапками',
    'чимин',
    '/images/start.jpg',
    'Описание изображения 1'
  ),
  createQuestion(
    'меня легко потерять и невозможно доставить на бульвар Менделеева д.3',
    'карбонара',
    '/images/start-2.jpg',
    'Описание изображения 2'
  ),
  createQuestion(
    'крашиха твоей мамы, мечта очей',
    'власова',
    '/images/start.jpg',
    'Описание изображения 3'
  )
];

