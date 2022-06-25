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
      width: 100%;
      padding: 0.5em;
      font-weight: bold;
      font-size: 1.6em;
    }
    p {
      padding: 0.5em;
      margin-top: 0.5em;
      text-align: justify;
    }
  }
  .logoContainer {
    img {
      height: 70px;
    }
  }
`;
