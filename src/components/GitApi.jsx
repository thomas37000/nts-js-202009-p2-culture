import React, { Component } from 'react';
import axios from 'axios';
import GithubProfil from './GithubProfil';
import styled from 'styled-components';

const DIV = styled.div`
h1 {
  display: flex;
  justify-content: center;
  margin: 50px;
  color: #000080;
}
  @media (min-width: 1224px) {
    .Team {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 150px;
      margin-top: 100px;
      padding: 40px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    }
    h1 {
      display: flex;
      justify-content: center;
      margin: 50px;
      color: #000080;
    }

  }
`;

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
    axios
      .get(`https://raw.githubusercontent.com/Francois2344/demo/master/db.json`)
      .then((response) => {
        console.log(response);
        this.setState({
          profile: response.data,
        });
      });
  }

  render() {
    const { profile } = this.state;
    return (
      <DIV>
        <h1> Event Team ! </h1>
        <div className="Team">
          {profile.map((profil) => (
            <GithubProfil key={profil.id} {...profil} />
          ))}
        </div>
      </DIV>
    );
  }
}

export default GitApi;
