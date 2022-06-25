import styled from 'styled-components';

export default styled.section`
  color: white;
  background-color: #e9e9e929;
  width: 30vw;
  min-height: 90vh;
  border: 1px gray solid;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .cvPicture {
    margin-top: 4vh;
    border-radius: 50%;
    filter: drop-shadow(0px 3px 8px rgba(243, 243, 243, 0.116));
  }
  .resumeContainer {
    margin-top: 4vh;
    letter-spacing: 0.2em;
    h1 {
      padding-left: 1em;
      font-weight: bold;
      font-size: 1.4em;

      span {
        color: #f2b84b;
        font-size: 1.6em;
      }
    }
    p {
      padding: 1em;
      margin-top: 1.6em;
      margin-bottom: 1.6em;
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
  .logoContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img {
      height: 70px;
      margin: 3em;
    }
  }
`;
