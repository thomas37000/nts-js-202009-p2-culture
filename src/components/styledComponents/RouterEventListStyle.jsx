import styled from 'styled-components';

const DIV = styled.div`
  .titleRouter {
    color: tomato;
    padding-bottom: 40px;
    padding-top: 20px;
    text-align: center;
    letter-spacing: 0.3rem;
    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }
  }

  .category {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .selection {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    @media screen and (min-width: 768px) {
      flex-direction: row-reverse;
    }
  }

  .spanRouter {
    display: flex;
    font-size: 1rem;
    margin: 1rem;
    justify-content: left;
    border-radius: 4px;
    text-decoration: none;
  }
`;

export default DIV;
