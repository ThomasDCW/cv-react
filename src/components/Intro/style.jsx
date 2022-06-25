import styled from 'styled-components';

export default styled.section`
  color: white;
  background-color: #e9e9e929;
  width: 22vw;
  height: 96vh;
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
  .resumeContainer {
    height: 60%;
    margin-top: 4vh;
    letter-spacing: 0.2em;
    h1 {
      margin-left: 1em;
      font-weight: bold;
      font-size: 1.4em;

      span {
        font-family: Georgia, 'Times New Roman', Times, serif;
        color: #f2b84b;
        font-size: 1.6em;
      }
    }
    p {
      margin: 1em;

      text-align: justify;
    }
    .border {
      border-bottom: 1px solid #f2b84b;
      margin-left: 2em;
      margin-right: 2em;
      margin-bottom: 2vh;
      margin-top: 2vh;
    }
  }

  .swiper {
    margin-top: 4vh;
    width: 168px;
    filter: drop-shadow(0px 3px 4px rgba(243, 243, 243, 0.664));
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    border-radius: 50%;
    img {
      width: 168px;
    }
  }
`;
