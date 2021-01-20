import React, { Component } from 'react';
import DIV from '../styledComponents/FormStyle';

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

            <div className="submit">
              <input type="submit" value="SEND" id="button" />
              <div className="ease"> </div>
            </div>
          </form>
        </DIV>
      </>
    );
  }
}
export default Form;
