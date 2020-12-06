import styled from 'styled-components';

const FIGURE = styled.figure`
  width: 100vw;
  display: flex;
  flex-direction: column;

  .eventName {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0;
    width: 100%;
  }
  .eventName h1,
  .eventName h2 {
    margin: 0.5rem;
    color: tomato;
  }

  p,
  h2,
  h3,
  p {
    margin: 0.5rem;
  }

  .colorTitle {
    color: tomato;
  }

  .Card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: left;
    line-height: 1.6;
    width: 100%;
    height: auto;
    background-color: #eaeaea;
    box-shadow: none;
    border-radius: none;
    font-size: 0.75rem;
  }

  .horaire {
    width: 3rem;
  }

  .photo {
    width: 95%;
    height: auto;
    background-position: center;
    background-size: cover;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);
    margin: 0rem;
  }

  .information {
    padding: 1rem;
    width: 95vw;
  }

  .description {
    text-align: justify;
  }

  .price span {
    width: auto;
  }

  .location {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95vw;
    padding: 1rem;
  }

  @media screen and (min-width: 800px) {
    .colorTitle {
      color: tomato;
    }
    .photo {
      width: auto;
      height: auto;
      position: relative;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);
      margin: 1rem;
    }

    .eventName {
      display: flex;
      justify-content: center;
      height: 20vh;
      position: relative;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .eventName h2 {
      font-size: 2rem;
      text-align: center;
      letter-spacing: 0.3rem;
      color: tomato;
    }

    .Card {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      text-align: left;
      line-height: 1.6;
      width: 100%;
      height: auto;
      background-color: #eaeaea;
      box-shadow: none;
      border-radius: none;
      font-size: 1rem;
    }

    .description {
      width: 50vw;
      text-align: justify;
    }
    .information {
      margin: 2rem;
      width: 50%;
    }
    .location {
      width: 25%;
      margin: 2rem;
      margin-bottom: auto;
    }
    .price {
      width: 100%;
    }
  }
`;

export default FIGURE;
