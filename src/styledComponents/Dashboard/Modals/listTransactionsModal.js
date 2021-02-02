import styled from "styled-components";

export const Background = styled.div`
width: 100%
height: 100%;
background: rgba(0, 0, 0, 0.8);
position: absolute;
left: -20em;
top: -15em;
display: flex;
justify-content: center;
border-radius: 10px;
align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalCotent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  .header {
    text-align: center;
  }
  .uservalue {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .uservalue input {
    display: block;
    padding: 1em;
    margin: 1em 0em;
  }
  .uservalue label {
    text-transform: capitalize;
    font-family: sans;
  }
  .uservalue select {
    display: block;
    padding: 0.5em;
    margin: 0em;
  }

  .uservalue .buttons {
    position: relative;
    top: 3em;
    margin: 0em -2em;
  }

  .uservalue .buttons button {
    margin: 0em 1.4em;
    padding: 1em;
    border: none;
    border-radius: 8px;
  }

  .uservalue .create {
    background-color: green;
    color: white;
  }

  .uservalue .cancel {
    background-color: #000;
    color: white;
  }
`;

export const CloseModal = styled.div`
  cursor: pointer;
  position: absolute;
  font-size: 2.5em;
  top: 20px;
  right: 25px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
