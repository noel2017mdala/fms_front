import styled from "styled-components";

export const Container = styled.div`
  //background-color: red;
  color: black;
  position: relative;

  .modalWrapper {
  }

  .modalContent {
    position: absolute;
    width: 100vw;
    height: 60vh;
    left: calc(-59vw + 40%);
    top: -7em;
    background: white;
    color: #000;
    z-index: 10;
    border-radius: 10px;
  }
  .modalContent > .header {
    text-align: center;
    font-size: 1.5em;
    margin-top: 1.2em;
  }
  .userValue > form > label {
    text-transform: uppercase;
    display: block;
    text-align: center;
    margin: 0.3em 0;
  }
  .userValue > form > input {
    display: block;
    padding: 0.9em;
    margin: 1em auto;
    width: 80%;
    border-radius: 0.5em;
    border: none;
  }
  .userValue > form > select {
    display: block;
    margin: 1em auto;
    width: 45%;
    padding: 0.5em;
  }

  .userValue > form > .buttons {
    margin-top: 1em;
    margin-left: 5em;
  }
  .buttons > button {
    padding: 0.9em;
    margin: 1em 0.5em;
    border: none;
  }
  .create {
    color: white;
    background: green;
    border-radius: 0.5em;
  }
  .cancel {
    color: white;
    background: red;
    border-radius: 0.5em;
  }

  .modalContent > .closeModal {
    font-size: 2em;
    position: absolute;
    right: 0.5em;
  }
`;
