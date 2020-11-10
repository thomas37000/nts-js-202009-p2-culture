import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GithubProfil extends Component {
  render() {
    const {
      id: idgit,
      login: name,
      avatar_url: avatar,
      url: urlprofil,
    } = this.props;

    return (
      <div className="Profil">
        <span>{name}</span>
        <div>
          <img className="gitavatar" src={avatar} alt="" />
        </div>
        <span>{urlprofil}</span>
      </div>
    );
  }
}
GithubProfil.propTypes = {
  id: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GithubProfil;
