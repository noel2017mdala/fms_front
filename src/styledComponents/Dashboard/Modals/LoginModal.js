import styled from "styled-components";

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  width: 100%;
  position: absolute;
  z-index: 2;
  height: 100vh;
  top: 0;

  .projectsContent {
    background-color: white;
    margin: 5em auto;
    width: 60%;
    max-width: 100%;
    min-height: 80vh;
    height: 100%;
    border-radius: 0.5em;
  }

  .projectsContent .closeModal {
    font-size: 3em;
    position: absolute;
    right: 1em;
    color: white;
    top: 1em;
    cursor: pointer;
  }

  .projectsContent .header {
    text-align: center;
    font-size: 1.2em;
    padding: 1em;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .formData label {
    text-transform: capitalize;
    display: block;
    //text-align: center;
    padding-left: 1em;
    display: none;
  }

  .formData input {
    display: block;
    padding: 0.8em 0em;
    margin: 3em auto;
    width: 55%;
    //border-radius: 0.5em;
    // border: none;
  }

  .formData > .buttons {
    margin: 2em 2em;
    //display: none;
  }

  .buttons > button {
    padding: 0.9em;
    margin: 1em 0.5em;
    border: none;
    cursor: pointer;
    border-radius: 0.5em;
  }
  .create {
    color: white;
    background: #008000;
  }

  .cancel {
    color: white;
    background: #8b0000;
  }
`;
