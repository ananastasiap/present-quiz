import { questions } from "./storageOfQuestions";

export const workWithQuestions = () => {
  let currentQuestionIndex: number = 0;
  const currentQuestion = questions[currentQuestionIndex];

  function showQuestion() {
    const questionTextElement: HTMLElement | null = document.querySelector('.section__question-box--text');

    if (!questionTextElement){
      return;
    }

    questionTextElement.textContent = currentQuestion.text;

    const answerInputElement: HTMLInputElement | null = document.querySelector("#answerInput");

    if (!answerInputElement) {
      return;
    }

    answerInputElement.value = '';
    answerInputElement.placeholder = 'пишу...';

    const submitButton: HTMLButtonElement | null = document.querySelector('.btn-submit');
    submitButton?.addEventListener("click", handleAnswer);
  }

  showQuestion();

  function handleAnswer() {
    const answerInputElement: HTMLInputElement | null = document.querySelector('#answerInput');
    const userAnswer = answerInputElement?.value.trim().toLocaleLowerCase();

    if (!answerInputElement) {
      return;
    }

    if (userAnswer === currentQuestion.correctAnswer) {
      const questionBox: HTMLElement | null = document.querySelector('.section__question--box');
      const imageElement: HTMLImageElement | null = document.querySelector('.image');

      if (!imageElement || !questionBox) {
        return;
      }

      questionBox.classList.add('u-display-none');

      imageElement.src = '/images/start.jpg';
      imageElement.style.display = "block";
    } else {
      // const wrongAnswerSound = new Audio("путь_к_звуковому_файлу.mp3");
      // wrongAnswerSound.play();
      answerInputElement.classList.add("incorrect-answer");
    }
  }
};