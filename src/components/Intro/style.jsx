import styled from 'styled-components';

export default styled.section`
  color: var(--text);
  background-color: var(--transparantGrey);
  width: 20vw;
  border: 1px gray solid;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 1.6vw;
  .cvPicture {
    width: 200px;
    height: 200px;
    margin-top: 4vh;
    border-radius: 50%;
    filter: drop-shadow(0px 3px 8px rgba(243, 243, 243, 0.116));
  }
  .container {
    margin-top: 8vh;
    letter-spacing: 0.1em;
    h1 {
      text-align: center;
      font-size: 1.2em;
      span {
        font-weight: bold;
        color: var(--primary);
        font-size: 1.8em;
      }
    }
  }

  .swiper {
    margin-top: 8vh;
    width: 8vw;
    filter: drop-shadow(0px 3px 4px rgba(243, 243, 243, 0.664));
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    img {
      width: 8vw;
    }
  }
`;
