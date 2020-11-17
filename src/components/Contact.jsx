import React from 'react';
import Navbar from './Navbar';
import GitApi from './GitApi';
import GithubProfil from './GithubProfil';
import Form from './Form';
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <Navbar />
      <GitApi />
      <GithubProfil />
      <Form />
      <Footer />
    </div>
  );
}

export default Contact;
