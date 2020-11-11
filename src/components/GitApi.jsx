import React, { Component } from 'react';
import axios from 'axios';
import GithubProfil from './GithubProfil';

class GitApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      profile: null,
    };
    this.fetchDatas = this.fetchDatas.bind(this);
  }

  componentDidMount() {
    this.fetchDatas();
  }

  fetchDatas() {
    axios.get(`https://api.github.com/users/Francois2344`).then((response) => {
      console.log(response);
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        profile: response.data,
      });
    });
  }

  render() {
    const { profile } = this.state;
    return (
      <div>
        {profile != null && <GithubProfil {...profile} />}
        <button type="button" onClick={this.fetchDatas}>
          Profil GitHub
        </button>
      </div>
    );
  }
}

export default GitApi;
