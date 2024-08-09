import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';


const questions = [
  {
    questionText: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    correctAnswer: 'Paris',
  },
  {
    questionText: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'F. Scott Fitzgerald'],
    correctAnswer: 'Harper Lee',
  },
  {
    questionText: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
    correctAnswer: 'Jupiter',
  },
];

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-app">
      <h1>Quiz Application</h1>
      {showResult ? (
        <Result score={score} totalQuestions={questions.length} restartQuiz={restartQuiz} />
      ) : (
        <Question
          question={questions[currentQuestionIndex]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default QuizApp;
