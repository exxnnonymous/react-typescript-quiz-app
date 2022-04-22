import styled from "styled-components";

export const QuestionCard = styled.div`
  max-width: 1100px;
  background-color: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
    font-weight: 500;
  }
`;

type AnswerWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const AnswerWrapper = styled.div<AnswerWrapperProps>`
  transition: opacity 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0px;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(90deg, #56ccff, #6aefb4)"};
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: black;
    font-weight: 500;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
