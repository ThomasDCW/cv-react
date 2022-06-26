import styled from 'styled-components';

export default styled.section`
  color: var(--text);
  width: 100%;
  margin-top: 2vh;
  h1 {
    margin-left: 2vw;
    color: #f2b84b;
    font-size: 2.6em;
    font-weight: bold;
    letter-spacing: 0.2em;
  }
  p {
    margin-left: 2vw;
    color: #6a6a6a;
    font-size: 1.2em;
    font-weight: bold;
  }
  a {
    background: linear-gradient(to top, #f2b84b, #f2b84b, transparent 5%)
      no-repeat left bottom / 0 100%;
    transition: background-size 0.6s;
  }
  a:hover {
    background-size: 100% 100%;
  }
  .articleContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    letter-spacing: 0.2em;
    margin-top: 4vh;
    img {
      width: 48px;
      height: 48px;
      margin-right: 1.6em;
      animation: rotation 6s linear infinite;
    }
    li {
      display: flex;
      align-items: center;
      font-size: 1.2em;
      margin-bottom: 1.2em;
    }
    .firstArticle {
      li {
        margin-right: 10vw;
      }

      border-right: 2px solid var(--transparantGrey);
    }
  }
  .border {
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 4vh;
    text-align: center;
    border-bottom: 2px solid var(--transparantGrey);
  }
`;
