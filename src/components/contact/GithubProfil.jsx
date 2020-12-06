import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo1 from '../img/linkedin.png';
import logo2 from '../img/GitHub-Mark.png';

const DIV = styled.div`
  display: flex;
  justify-content: center;

  .TeamProfil {
    margin-top: 20px;
  }

  .gitavatar1 {
    width: 100px;
    clip-path: circle(50% at 50% 50%);
  }
  p {
    text-align: center;
    color: #262a2d;
  }
`;

class GithubProfil extends Component {
  render() {
    const { login, avatar, urlGitHub, urlLinkedin } = this.props;
    return (
      <DIV>
        <div className="TeamProfil">
          <img className="gitavatar1" src={avatar} alt="avatar team dev" />
          <p>{login}</p>
          <div className="Linklogo">
            <Link to={{ pathname: urlLinkedin }} target="_blank">
              <img src={logo1} alt="lien linkedin" height="50" />
            </Link>
            <Link to={{ pathname: urlGitHub }} target="_blank">
              <img src={logo2} alt="lien github" height="50" />
            </Link>
          </div>
        </div>
      </DIV>
    );
  }
}

GithubProfil.propTypes = {
  login: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  urlGitHub: PropTypes.string.isRequired,
  urlLinkedin: PropTypes.string.isRequired,
};

export default GithubProfil;
