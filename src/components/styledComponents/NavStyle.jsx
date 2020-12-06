import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 7vh;
  border-bottom: 2px solid #f5f5f5;
  display: flex;
  /* background: linear-gradient(
    to right,
    #f2eb4a,
    #d9f04e,
    #bdf458,
    #9ff765,
    #7bf976
  ); */
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    width: 55px;
    height: 55px;
    margin-left: 30px;
    border-radius: 50%;
  }

  @media (max-width: 765px) {
    .logo {
      display: flex;
    }
  }
`;

export default Nav;
