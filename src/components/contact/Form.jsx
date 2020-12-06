/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  background: lightgray;
  position: relative;
  z-index: 1;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 2em;
  padding: 10px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 40%;
    margin: auto;
    margin-top: 20px;
    font-weight: bold;
  }

  .textesize {
    height: 100px;
    width: 300px;
    margin-bottom: 20px;
    resize: none;
    border-radius: 5px;
  }

  input,
  .textesize {
    font-family: 'Roboto', sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
  }

  /* .message {
    width: 17rem;
    height: 4rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.5rem;
  } */

  /* button {
    border-radius: 10px;
    padding: 15px;
    background: #9ff765;
    width: 140px;
  } */

  #button {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    float: left;
    cursor: pointer;
    background-color: #9ff765;
    color: white;
    border-radius: 10px;
    padding: 15px;
    width: 140px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    margin-top: -4px;
    font-weight: 700;
  }

  #button:hover {
    background-color: rgba(0, 0, 0, 0);
    color: tomato;
  }

  .submit:hover {
    color: tomato;
  }

  .ease {
    width: 0px;
    height: 45px;
    border-radius: 5px;
    background-color: #fbfbfb;
    -webkit-transition: 0.3s ease;
    -moz-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    -ms-transition: 0.3s ease;
    transition: 0.3s ease;
  }

  .submit:hover .ease {
    width: 100%;
    background-color: white;
  }

  @media (min-width: 1224px) {
    input {
      width: 400px;
      margin: 5px;
    }

    .textesize {
      width: 400px;
    }
    button {
      margin: 10%;
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
    // eslint-disable-next-line no-alert
    alert('Votre requête a était soumise aux administrateurs');
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, email, tel } = this.state;

    return (
      <>
        <DIV className="formContact">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nom"
              value={name}
              onChange={this.handleChange}
              required="required"
            />

            <input
              type="text"
              placeholder="Barack-Obama@wcs.com"
              onChange={this.handleChange}
              name="email"
              value={email}
              required="required"
            />

            <input
              type="tel"
              placeholder="tel"
              onChange={this.handleChange}
              name="tel"
              value={tel}
              required="required"
            />

            <textarea
              className="textesize"
              placeholder="...."
              type="textarea"
              name="textValue"
              onChange={this.handleChange}
              rows="10"
              cols="30"
              required="required"
            />
            {/* 
            <button type="button" onClick={this.handleSubmit}>
              Envoyer
            </button> */}

            <div className="submit">
              <input type="submit" value="SEND" id="button" />
              <div className="ease"> </div>
            </div>

            {/* <section>
              <h2>Merci!</h2>
              <p> </p>
              <h3>Votre compte a été créé avec succès.</h3>
            </section> */}
          </form>
        </DIV>
      </>
    );
  }
}
export default Form;
