import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo1 from './linkedin.png';
import logo2 from './GitHub-Mark.png';

const DIV = styled.div`
  .gitavatar1 {
    width: 100px;
    clip-path: circle(50% at 50% 50%);
  }
  .TeamProfil {
  }
`;

class GithubProfil extends Component {
  render() {
    const { login, avatar } = this.props;
    return (
      <DIV>
        <div className="TeamProfil">
        <img className="gitavatar1" src={avatar} alt="" />
          <img src={logo1} alt="" height="50"></img>
          <img src={logo2} alt="" height="50"></img>  
           <p>{login}</p>
          </div>
      </DIV>
    );
  }
}

GithubProfil.propTypes = {
  login: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default GithubProfil;
