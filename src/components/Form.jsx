import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 40%;
    margin: auto;
  }
  form input {
    height: 30px;
  }
  button {
    -moz-box-shadow:inset 0px 1px 0px 0px #97c4fe;
    -webkit-box-shadow:inset 0px 1px 0px 0px #97c4fe;
    box-shadow:inset 0px 1px 0px 0px #97c4fe;
    background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #000080), color-stop(1, #1e62d0) );
    background:-moz-linear-gradient( center top, #000080 5%, #1e62d0 100% );
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#000080', endColorstr='#1e62d0');
    background-color:#000080;
    -webkit-border-top-left-radius:5px;
    -moz-border-radius-topleft:5px;
    border-top-left-radius:5px;
    -webkit-border-top-right-radius:5px;
    -moz-border-radius-topright:5px;
    border-top-right-radius:5px;
    -webkit-border-bottom-right-radius:5px;
    -moz-border-radius-bottomright:5px;
    border-bottom-right-radius:5px;
    -webkit-border-bottom-left-radius:5px;
    -moz-border-radius-bottomleft:5px;
    border-bottom-left-radius:5px;
  text-indent:0;
    display:inline-block;
    color:#ffffff;
    font-family:arial;
    font-size:15px;
    font-weight:bold;
    font-style:normal;
  height:40px;
    line-height:40px;
  width:140px;
    text-decoration:none;
    text-align:center;
    text-shadow:0px 1px 0px #1570cd;
  }.classname:hover {
    background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #1e62d0), color-stop(1, #000080) );
    background:-moz-linear-gradient( center top, #1e62d0 5%, #000080 100% );
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e62d0', endColorstr='#000080');
    background-color:#1e62d0;
  }.classname:active {
    position:relative;
    top:1px;
`;

function Formulaire() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    objet: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.name, form.email);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <DIV className="formContact">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder=""
          value={form.name}
          onChange={(e) => handleChange(e)}
        />
        <label>Email</label>
        <br />
        <input
          type="text"
          placeholder="exemple@wcs.com"
          onChange={(e) => handleChange(e)}
          name="email"
          value={form.mail}
        />
        <label>Objet</label>
        <input
          type="text"
          placeholder="your object"
          onChange={(e) => handleChange(e)}
          name="objet"
          value={form.objet}
        />
        <label>Text : </label>
        <input type="textarea" name="textValue" onChange={handleChange}/>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </DIV>
  );
}

export default Formulaire;
