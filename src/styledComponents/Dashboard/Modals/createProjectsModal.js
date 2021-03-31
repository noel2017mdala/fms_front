import styled from "styled-components";

export const Background = styled.div`
  color: black;
  position: relative;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);

  .projectsContent {
    position: absolute;
    width: 100vw;
    height: 60vh;
    left: calc(-59vw + 40%);
    top: -8em;
    background: white;
    color: #000;
    z-index: 10;
    border-radius: 10px;
  }

  .projectsContent .closeModal {
    font-size: 2em;
    position: absolute;
    right: 0.5em;
  }

  .projectsContent .header {
    text-align: center;
    font-size: 1.5em;
    margin-top: 1.2em;
  }

  .formData label {
    text-transform: uppercase;
    display: block;
    text-align: center;
    margin: 0.3em 0;
  }

  .formData input {
    display: block;
    padding: 0.9em;
    margin: 1em auto;
    width: 80%;
    border-radius: 0.5em;
    border: none;
  }

  .formData > .buttons {
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
`;
