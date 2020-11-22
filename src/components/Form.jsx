/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 40%;
    margin: auto;
    margin-top: 20px;
    font-weight: bold;
    color: navy;
  }
  .textesize {
    height: 100px;
    width: 300px;
    border: 2px solid navy;
    margin-bottom: 20px;
  }
  input {
    height: 40px;
    width: 300px;
    border: 2px solid navy;
  }
  button {
    -moz-box-shadow: inset 0px 1px 0px 0px #97c4fe;
    -webkit-box-shadow: inset 0px 1px 0px 0px #97c4fe;
    box-shadow: inset 0px 1px 0px 0px #97c4fe;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.05, #000080),
      color-stop(1, #1e62d0)
    );
    background: -moz-linear-gradient(center top, #000080 5%, #1e62d0 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000080', endColorstr='#1e62d0');
    background-color: #000080;
    -webkit-border-top-left-radius: 5px;
    -moz-border-radius-topleft: 5px;
    border-top-left-radius: 5px;
    -webkit-border-top-right-radius: 5px;
    -moz-border-radius-topright: 5px;
    border-top-right-radius: 5px;
    -webkit-border-bottom-right-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    border-bottom-right-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-radius-bottomleft: 5px;
    border-bottom-left-radius: 5px;
    text-indent: 0;
    display: inline-block;
    color: #ffffff;
    font-family: arial;
    font-size: 15px;
    font-weight: bold;
    font-style: normal;
    height: 40px;
    line-height: 40px;
    width: 140px;
    text-decoration: none;
    text-align: center;
    text-shadow: 0px 1px 0px #1570cd;
    margin-bottom: 10%;
  }
  .classname:hover {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.05, #1e62d0),
      color-stop(1, #000080)
    );
    background: -moz-linear-gradient(center top, #1e62d0 5%, #000080 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e62d0', endColorstr='#000080');
    background-color: #1e62d0;
  }
  .classname:active {
    position: relative;
    top: 1px;
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
  super(props)
  this.state = {
    name: '',
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
  };
  
  handleChange (e) {
    this.setState({[e.target.name] : e.target.value})
  };


  render() {
  return (
    <DIV className="formContact">
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder=""
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="Email">Email:</label>
        <input
          type="text"
          placeholder="exemple@wcs.com"
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
        />
        <label htmlFor="objet">Objet:</label>
        <input
          type="text"
          placeholder="your object"
          onChange={this.handleChange}
          name="objet"
          value={this.state.objet}
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
          Submit
        </button>
      </form>
    </DIV>
  );
}
}
export default Form;
