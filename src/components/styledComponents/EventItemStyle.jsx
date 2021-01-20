import styled from 'styled-components';

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 1rem;
  padding: 1rem;
  width: 90vw;
  height: auto;
  font-family: Roboto, sans-serif;
  background-color: #eaeaea;
  border-radius: 5px;
  font-size: 0.75em;

  .SyntheticTimetable {
    width: 7.5rem;
    font-size: 1.2rem;
    text-align: center;
    align-self: center;
    margin-bottom: 1rem;
  }

  .category {
    color: red;
  }

  span,
  h3,
  h4 {
    font-size: 12px;
    margin: 0.5rem;
  }

  .SyntheticPrice h4 {
    font-size: 12px;
  }

  .SyntheticPhoto {
    margin: auto;
    width: 10rem;
    height: auto;
  }

  .SyntheticCard.Information {
    flex-wrap: wrap;
    margin: auto;
  }

  .SyntheticPrice {
    width: auto;
    text-align: left;
  }

  .SyntheticDetail {
    width: 10rem;
    text-align: center;
    align-self: center;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    font-weight: bold;
    align-self: center;
    text-align: center;
    color: #000080;
    text-decoration: 'none';
  }

  a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: none;
  }

  .TitleColor {
    color: tomato;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 1rem;
    width: 50vw;
    height: auto;
    background-color: #eaeaea;
    font-size: 0.75em;

    .TitleColor {
      color: tomato;
    }

    .SyntheticTimetable {
      font-size: 12px;
      text-align: left;
      width: 10rem;
    }
    .SyntheticPhoto {
      max-width: 15rem;
      height: auto;
    }
    .SyntheticInformation {
      width: 25rem;
      height: auto;
      margin: 1rem;
    }
    .SyntheticPrice {
      width: 20rem;
      margin: 1rem;
      text-align: left;
    }
    .SyntheticDetail {
      width: 10rem;
      font-size: 0.8rem;
      font-weight: bold;
      align-self: center;
      text-align: center;
      color: #000080;
      text-decoration: 'none';
    }

    a:-webkit-any-link {
      color: -webkit-link;
      cursor: pointer;
      text-decoration: none;
    }
  }
`;

export default DIV;
