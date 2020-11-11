import React from 'react';
import GitApi from './GitApi';
import GithubProfil from './GithubProfil';
import HeaderContact from './HeaderContact';

const Contact = () => {
  return (
    <div>
      <HeaderContact />
      <GithubProfil />
      <GitApi />
    </div>
  );
};

export default Contact;
