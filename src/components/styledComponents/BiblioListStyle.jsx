import styled from 'styled-components';

const BIBLIOLIST = styled.div`
  h1 {
    font-size: 1.2rem;
    margin: 2rem;
  }

  .today,
  .category {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  li {
    list-style: none;
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    margin: 0.5rem;
    width: 8rem;
  }
`;

export default BIBLIOLIST;
