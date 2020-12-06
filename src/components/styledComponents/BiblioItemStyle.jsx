import styled from 'styled-components';

const BIBLIOITEM = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin: 1rem;
  padding: 0.5rem;
  width: auto;
  height: auto;
  font-family: Roboto, sans-serif;
  background-color: #c4c4c4;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 0.75em;

  .SyntheticTimetable {
    width: 7.5rem;
    font-size: 1rem;
    text-align: center;
  }

  .SyntheticTimetable h3 {
    font-size: 14px;
    margin: 0.5rem;
  }

  .SyntheticCategory h4,
  .SyntheticLocation h4,
  .SyntheticAddress h4 {
    font-size: 12px;
    margin: 0.25rem;
  }

  .SyntheticName h4 {
    color: red;
    font-size: 14px;
    margin: 0.25rem;
  }

  span.free {
    margin: 0.5 0 rem;
    color: red;
  }

  .horaire {
    font-size: 14px;
  }

  .SyntheticPrice h4 {
    font-size: 12px;
    margin: 0.25rem;
  }

  .SyntheticPhoto {
    margin: auto;
    max-width: 15rem;
    height: auto;
    margin: 1rem;
  }

  .SyntheticPrice {
    width: auto;
    text-align: center;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 1rem;
    max-width: 50rem;
    height: auto;
    background-color: #c4c4c4;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    font-size: 0.75em;

    .SyntheticTimetable {
      font-size: 1rem;
      width: 7rem;
    }
    .SyntheticPhoto {
      width: 9rem;
      height: auto;
    }
    .SyntheticInformation {
      width: 18rem;
      height: auto;
      margin: 1rem;
    }

    .SyntheticPrice {
      width: 7rem;
      margin: 1rem;
      text-align: center;
    }
  }
`;

export default BIBLIOITEM;
