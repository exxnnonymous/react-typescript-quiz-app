import styled from "styled-components";

// @ts-ignore
import BGImage from "./bg.jpg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    color: white;
    font-weight: 500;
    font-size: 2rem;
    margin: 0;
  }

  .loader {
    margin-top: 3rem;
  }

  h1 {
    font-family: "Fascinate Inline", cursive;
    background-image: linear-gradient(180deg, #666, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin-bottom: 10px;
  }

  .start,
  .next {
    background: linear-gradient(180deg, #666, #ffcc91);
    border: 2px solid #d38558;
    box-sizing: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }

  .start {
    max-width: 200px;
  }
`;

type BGProp = {
  blurBg: boolean;
};

export const BGWrapper = styled.div<BGProp>`
  background-image: url(${BGImage});
  background-size: cover;
  filter: ${({blurBg}) => blurBg && "blur(4px)" };
  -webkit-filter: ${({blurBg}) => blurBg && "blur(4px)" };
  height: 100%;
  width: 100%;
  position: absolute;
  inset: 0;
  z-index: -1;
`;
