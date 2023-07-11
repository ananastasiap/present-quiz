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
    '/images/hallway-K.png',
    'The plan of a hallway with the letter K'
  ),
  createQuestion(
    'Меня легко потерять и невозможно доставить на бульвар Менделеева д.3',
    'карбонара',
    '/images/kitchen-B.png',
    'Описание изображения 2'
  ),
  createQuestion(
    'Крашиха твоей мамы, мечта её очей',
    'власова',
    '/images/vlasova.png',
    'Описание изображения 3'
  ),
  createQuestion(
    'Кому Шухуа даёт носить свои тапочки?',
    'суджин',
    '/images/toilet-SH.png',
    'Описание изображения 3'
  ),
  createQuestion(
    'Эту чудную "заразу" Петр ввел в Руси указом, \nНе схолопочешь с нею в ухо,\nВедь настойка - ...',
    'медовуха',
    '/images/logia-A.png',
    'Описание изображения 3'
  ),
  createQuestion(
    '💅 подружка в любом фанфике',
    'чимин',
    '/images/main-room-V.png',
    'Описание изображения 3'
  ),
  createQuestion(
    'Откуда?\nLook so cool, look so sexy like KK',
    'queencard',
    '/images/dressing-room-P.png',
    'Описание изображения 3'
  ),
  createQuestion(
    'Кто выступал голограммой на концерте?',
    'юнги',
    '/images/yoongi.png',
    'Описание изображения 3'
  ),
  createQuestion(
    'Основоположница корейского движения - у мужлан нет прав',
    'шухуа',
    '/images/main-room-R.png',
    'Описание изображения 3'
  ),
  createQuestion(
    'Душнила + шпала',
    'артоны',
    '/images/artoni.png',
    'Описание изображения 3'
  ),
  createQuestion(
    'Я хён с огромными лапищами',
    'намджун',
    '/images/toilet-I.png',
    'Описание изображения 3'
  ),
  createQuestion(
    'Мой любимый мальчик Банчан',
    'феликс',
    '/images/hallway-A.png',
    ''
  ),
  createQuestion(
    'Макнэ Mamamoo',
    'хваса',
    '/images/main-room-A.png',
    'Описание изображения 3'
  ),
  createQuestion(
    'Где Лиса требовала её факинг мани мазафакинг мани?',
    'коачелла',
    '/images/logia-L.png',
    'Описание изображения 3'
  ),
  createQuestion(
    'Кому принадлежит теория концептуальной метафоры?',
    'лакофф и джонсон',
    '/images/logia-K.png',
    'Описание изображения 3'
  ),
  createQuestion(
    'Мы едем с эко-похода в автобусе. Клип на какую песню ты мне показываешь?',
    'ты разбила папину машину',
    '/images/dressing-room-A.png',
    'Описание изображения 3'
  ),
  createQuestion(
    'Раз — собрался, два — ...',
    'ушел',
    '/images/kitchen-X.png',
    'Описание изображения 3'
  ),
  createQuestion(
    'I purple you',
    'тэхен',
    '/images/kitchen-A.png',
    'Описание изображения 3'
  ),
];

