import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DIV = styled.div`
  display: flex;
  flex-direction: column;

  div {
    text-align: center;
  }
  .groupe1 {
    display: flex;
    justify-content: space-around;
  }
  .groupe2 {
    display: flex;
    justify-content: space-around;
  }
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
`;

class GithubProfil extends Component {
  render() {
    const { login: name, avatar_url: avatar } = this.props;

    return (
      <DIV>
        <div className="Profils1">
          <div className="groupe1">
            <img className="gitavatar1" src={avatar} alt="" />
            <img className="gitavatar2" src={avatar} alt="" />
          </div>
        </div>
        <div className="Profils2">
          <span>{name}</span>
          <div>
            <img className="gitavatar3" src={avatar} alt="" />
          </div>
        </div>
        <div className="Profils4">
          <span>{name}</span>
          <div className="groupe2">
            <img className="gitavatar4" src={avatar} alt="" />
            <img className="gitavatar5" src={avatar} alt="" />
          </div>
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
