import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo1 from './linkedin.png';

const DIV = styled.div`
  .gitavatar1 {
    width: 100px;
    clip-path: circle(50% at 50% 50%);
  }
  .gitavatar2 {
    width: 100px;
    clip-path: circle(50% at 50% 50%);
  }
  .gitavatar3 {
    width: 100px;
    clip-path: circle(50% at 50% 50%);
  }
  .gitavatar4 {
    width: 100px;
    clip-path: circle(50% at 50% 50%);
  }
  .gitavatar5 {
    width: 100px;
    clip-path: circle(50% at 50% 50%);
  }
  .linkedin {
    width: 2rem;
    height: 2rem;
  }
`;

class GithubProfil extends Component {
  render() {
    const { login: name, avatar_url: avatar } = this.props;

    return (
      <DIV>
        <div className="profils1">
          <img className="gitavatar1" src={avatar} alt="" />
          <span>{name}</span>
          <a href="https://www.linkedin.com/in/delourme-francois-25367452">
            <img className="linkedin" src={logo1} alt="" />
          </a>
        </div>
        <div className="Profils2">
          <img className="gitavatar2" src={avatar} alt="" />
          <span>{name}</span>
          <a href="https://www.linkedin.com/in/delourme-francois-25367452">
            <img className="linkedin" src={logo1} alt="" />
          </a>
        </div>
        <div className="Profils3">
          <img className="gitavatar3" src={avatar} alt="" />
          <span>{name}</span>
          <a href="https://www.linkedin.com/in/delourme-francois-25367452">
            <img className="linkedin" src={logo1} alt="" />
          </a>
        </div>
        <div className="Profils4">
          <img className="gitavatar4" src={avatar} alt="" />
          <span>{name}</span>
          <a href="https://www.linkedin.com/in/delourme-francois-25367452">
            <img className="linkedin" src={logo1} alt="" />
          </a>
        </div>
      </DIV>
    );
  }
}
GithubProfil.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
};

export default GithubProfil;
