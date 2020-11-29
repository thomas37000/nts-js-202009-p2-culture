/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    font-weight: bold;
    background: lightgray;
    padding: 2em;
  }

  .textesize {
    height: 100px;
    width: 300px;
    margin-bottom: 20px;
    resize: none;
    border-radius: 5px;
  }

  input {
    height: 40px;
    width: 300px;
    border-radius: 5px;
  }

  button {
    border-radius: 10px;
    padding: 15px;
    background: #9ff765;
    width: 140px;
  }

  @media (min-width: 1224px) {
    input {
      width: 800px;
    }
    .textesize {
      width: 800px;
    }
    button {
      margin-bottom: 10%;
    }
  }
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, email, objet } = this.state;
    return (
      <DIV className="formContact">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            name="name"
            placeholder="Barack Obama"
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor="Email">E-mail:</label>
          <input
            type="text"
            placeholder="Barack-Obama@wcs.com"
            onChange={this.handleChange}
            name="email"
            value={email}
          />
          <label htmlFor="objet">Objet:</label>
          <input
            type="text"
            placeholder="votre objet"
            onChange={this.handleChange}
            name="objet"
            value={objet}
          />
          <label htmlFor="texte">Texte:</label>
          <textarea
            className="textesize"
            type="textarea"
            name="textValue"
            onChange={this.handleChange}
            rows="10"
            cols="30"
          />
          <button type="button" onClick={this.handleSubmit}>
            Envoyer
          </button>
        </form>
      </DIV>
    );
  }
}
export default Form;
