import React from 'react';

function Question({ question, handleAnswer }) {
  return (
    <div className="question-container">
      <h2>{question.questionText}</h2>
      <ul>
        {question.options.map((option) => (
          <li key={option}>
            <button onClick={() => handleAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
