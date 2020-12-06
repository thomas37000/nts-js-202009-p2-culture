import styled from 'styled-components';

const FOOTER = styled.div`
  .Footer {
    /* background-image: linear-gradient(
      to right,
      #f2eb4a,
      #d9f04e,
      #bdf458,
      #9ff765,
      #7bf976
    ); */
    background: tomato;
    color: #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .Footer img {
    width: 25px;
    margin: 0 1rem;
  }
  .footer-link {
    display: grid;
    justify-content: center;
    padding: 10px;
  }
  span {
    padding: 5px;
  }
  .footer-logo {
    display: flex;
    justify-content: space-around;
  }

  a {
    color: #fff;
    text-decoration: none;
    
  }

  @media screen and (min-width: 768px) {
    .Footer {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
    .footer-link {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 85%;
    }
    .footer-logo {
      margin: 10px;
      align-items: center;
    }
    .Footer img {
      margin-right: 10px;
      width: 35px;
    }
  }
`;
export default FOOTER;
