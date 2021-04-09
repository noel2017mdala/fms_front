import styled from "styled-components";
const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  width: 100%;
  position: absolute;
  z-index: 2;
  height: 150vh;

  .modalWrapper {
    //background-color: black;
    width: 100%;
    min-height: 100vh;
    transition: opacity 0.3s ease;
  }

  .modalContent {
    background-color: white;
    margin: 5em auto;
    width: 85%;
    max-width: 100%;
    min-height: 70vh;
    height: 100%;
    border-radius: 0.5em;
  }

  .modalContent > .header {
    text-align: center;
    font-size: 1.2em;
    padding: 1em;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .userValue > form > label {
    text-transform: capitalize;
    display: block;
    //text-align: center;
    padding-left: 1em;
    display: none;
  }
  .userValue > form > input {
    display: block;
    padding: 0.5em 0em;
    margin: 3em auto;
    width: 65%;
    //border-radius: 0.5em;
    // border: none;
  }

  .userValue > form > select {
    display: block;
    margin: 1em auto;
    width: 65%;
    padding: 0.5em;
  }

  .buttons {
    margin: 2em 2em;
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

  .modalContent > .closeModal {
    font-size: 2em;
    position: absolute;
    right: 0.5em;
    color: white;
    top: 1.3em;
    cursor: pointer;
  }

  ${media.bigScreen} {
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    width: 100%;
    position: absolute;
    z-index: 2;
    height: 131vh;

    .modalWrapper {
      //background-color: black;
      width: 100%;
      min-height: 100vh;
    }

    .modalContent {
      background-color: white;
      margin: 5em auto;
      width: 65%;
      max-width: 100%;
      height: 80vh;
    }
    .modalContent > .header {
      text-align: center;
      font-size: 1.2em;
      padding: 1em;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .userValue > form > label {
      text-transform: capitalize;
      display: block;
      //text-align: center;
      padding-left: 1em;
      display: none;
    }
    .userValue > form > input {
      display: block;
      padding: 0.9em;
      margin: 3em auto;
      width: 50%;
      //border-radius: 0.5em;
      // border: none;
    }
    .userValue > form > select {
      display: block;
      margin: 1em auto;
      width: 50%;
      padding: 0.5em;
    }

    .buttons {
      width: 40%;
      margin: 2em auto;
    }
    .buttons > button {
      padding: 0.9em;
      margin: 1em 2em;
      border: none;
      cursor: pointer;
    }
    .create {
      color: white;
      background: #008000;
      border-radius: 0.5em;
    }
    .cancel {
      color: white;
      background: #8b0000;
      border-radius: 0.5em;
    }

    .modalContent > .closeModal {
      font-size: 3em;
      position: absolute;
      right: 3em;
      color: white;
      top: 1em;
      cursor: pointer;
    }

    .modalContent > .closeModal::hover {
      transform: scale(3);
      box-shadow: 5px 15px 15px rgba(0, 0, 0, 0.2);
    }
  }
`;
