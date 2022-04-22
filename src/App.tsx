import React, { useState } from "react";
import { SyncLoader } from "react-spinners";
import { Difficulty, fetchQuizQuestions, QuestionState } from "./API";
import { BGWrapper, Wrapper } from "./App.styles";
import QuizCard from "./components/QuizCard";

// Components

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  questions: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [gameStart, setGameStart] = useState(false);

  // initialize the quiz
  const startTrivia = async () => {
    setGameOver(false);

    setLoading(true);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    setGameStart(true);
  };

  // when user choose the answer
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    // user answer
    const answer = e.currentTarget.value;
    // check answer
    const correct = questions[number].correct_answer === answer;
    // add score if answer is correct
    if (correct) setScore((prev) => prev + 1);
    // save answer in the array for user answer
    const answerObject = {
      questions: questions[number].question,
      answer,
      correct,
      correctAnswer: questions[number].correct_answer,
    };

    setUserAnswers((prev) => [...prev, answerObject]);
  };

  // handle next btn
  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
      setScore(0);
      setGameStart(false);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <BGWrapper blurBg={gameStart} />

      <Wrapper>
        <h1>Quiz App</h1>
        {gameOver && (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        )}
        {gameStart && <p className="score">Score: {score}</p>}
        {loading && (
          <div className="loader">
            <SyncLoader size={30} margin={5} color="#87f1ff" />
          </div>
        )}

        {!loading && !gameOver && (
          <QuizCard
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS && (
            <button className="next" onClick={nextQuestion}>
              {number === TOTAL_QUESTIONS - 1 ? "Finish" : "Next Question"}
            </button>
          )}
      </Wrapper>
    </>
  );
};

export default App;
