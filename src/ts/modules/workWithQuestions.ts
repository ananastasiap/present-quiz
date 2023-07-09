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

  if (!answerInputElement || !questionTextElement ||
      !answerInputElement || !imageElement ||
      !questionBox || !buttonNext) {
    return;
  }

  function showQuestion() {
    if (!questionTextElement || !answerInputElement) {
      return;
    }

    questionTextElement.textContent = currentQuestion.text;
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
        !answerInputElement || !questionBox) {
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
        alert('good job!');
      }
    }

    buttonNext.addEventListener('click', handleNext);
    answerInputElement.addEventListener('click', function(event) {
      event.preventDefault();
      handleAnswer();
    });

    showQuestion();
};