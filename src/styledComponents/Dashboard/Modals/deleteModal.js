import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  background: white;
  top: 8em;
  width: 50%;
  height: 40%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;

  .warning {
    color: #141414;
    display: flex;
    justify-content: center;
    margin-top: 3em;
  }
  .button-container {
    margin: 0 5.5em;
  }
  button {
    margin: 2em 1em;
    padding: 1em;
    border: none;
    border-radius: 8px;
    font-size: 15px;
  }

  .delete {
    background: red;
    color: white;
  }
  .cancel {
    background: black;
    color: white;
  }
`;
