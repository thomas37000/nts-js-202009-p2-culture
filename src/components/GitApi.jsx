import React, { Component } from 'react';
import axios from 'axios';
import GithubProfil from './GithubProfil';

class GitApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
    };
    this.fetchDatas = this.fetchDatas.bind(this);
  }

  componentDidMount() {
    this.fetchDatas();
  }

  fetchDatas() {
    axios.get(`https://raw.githubusercontent.com/Francois2344/demo/master/db.json`).then((response) => {
      console.log(response);
      this.setState({
        profile: response.data,
      });
    });
  }

  render() {
    const { profile } = this.state;
    return (
      <div>
        {profile.map((profil) => (<GithubProfil key={profil.id} {...profil} />))}
      </div>
    );
  }
}

export default GitApi;
