import styled from 'styled-components';

export default styled.section`
  color: var(--text);
  width: 100%;
  margin-top: 2vh;

  .articleContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    letter-spacing: 0.2em;
    margin-top: 10vh;
    img {
      width: 48px;
      height: 48px;
      margin-right: 1.6em;
    }
    li {
      display: flex;
      align-items: center;
      font-size: 1.2em;
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

  // text animation

  .content {
    margin-left: 2vw;
  }
  .content h1 {
    letter-spacing: 0.1em;
    font-weight: 700;
    font-size: 4em;
    position: absolute;
  }

  .content h1:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 1px var(--primary);
  }

  .content h1:nth-child(2) {
    color: var(--primary);
    animation: animate 3s ease-in-out infinite;
  }

  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }

    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
`;
