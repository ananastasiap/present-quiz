import { questions } from "./storageOfQuestions";

export const workWithQuestions = () => {
  let currentQuestionIndex: number = 0;
  let currentQuestion = questions[currentQuestionIndex];
  const questionTextElement: HTMLElement | null = document.querySelector('.section__question-box--text');
  const answerInputElement: HTMLInputElement | null = document.querySelector("#answerInput");
  const submitButton: HTMLButtonElement | null = document.querySelector('.btn--submit');
  const questionBox: HTMLElement | null = document.querySelector('.section__question--box');
  const imageElement: HTMLImageElement | null = document.querySelector('.image');
  const buttonNext: HTMLButtonElement | null = document.querySelector('.btn--next');
  const numberOfQuestion: HTMLElement | null = document.querySelector('.number-of-question');

  if (!answerInputElement || !questionTextElement ||
      !answerInputElement || !imageElement ||
      !questionBox || !buttonNext || !numberOfQuestion) {
    return;
  }

  function showQuestion() {
    if (!questionTextElement || !answerInputElement || !numberOfQuestion) {
      return;
    }

    questionTextElement.textContent = currentQuestion.text;
    const questionNumber: number = currentQuestionIndex + 1;
    numberOfQuestion.textContent = questionNumber.toString();
    answerInputElement.value = '';
    answerInputElement.placeholder = 'пишу...';

    submitButton?.addEventListener("click", handleAnswer);
  }

  function handleAnswer() {
    const userAnswer: string | undefined = answerInputElement?.value.trim().toLocaleLowerCase();

    if (!userAnswer) {
      return;
    }

    if (userAnswer === currentQuestion.correctAnswer) {
      if (!imageElement || !questionBox || !buttonNext) {
        return;
      }

      questionBox.classList.add('u-display-none');
      imageElement.src = currentQuestion.locationOfALetter.src;
      imageElement.alt = currentQuestion.locationOfALetter.alt;
      imageElement.style.display = 'block';
      imageElement.classList.add('map');

      buttonNext.style.display = 'block';

      } else {
        const wrongAnswerSound = new Audio('/sound/wrong-answer.mp3');
        wrongAnswerSound.currentTime = 0;
        wrongAnswerSound.play();
      }
  }

  // NEXT QUESTION
  function handleNext() {
    if (!imageElement || !buttonNext ||
        !answerInputElement || !questionBox ||
        !questionTextElement || !submitButton ||
        !numberOfQuestion) {
      return;
    }

    imageElement.style.display = 'none';
    buttonNext.style.display = 'none';
    questionBox.classList.remove('u-display-none');
    answerInputElement.value = '';
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      currentQuestion = questions[currentQuestionIndex];
      showQuestion();
      } else {
        const heading: HTMLElement | null = document.querySelector('.heading-secondary');
        if (heading) {
          heading.textContent = 'Ты супер!';
        }

        questionTextElement.style.display = 'none';
        answerInputElement.style.display = 'none';
        submitButton.style.display = 'none';
        numberOfQuestion.style.display = 'none';

        const final = document.createElement('img');
        final.src = '/images/final.png';
        final.classList.add('map');
        document.body.appendChild(final);
      }
    }

    buttonNext.addEventListener('click', handleNext);
    answerInputElement.addEventListener('click', function(event) {
      event.preventDefault();
      handleAnswer();
    });

    showQuestion();
};