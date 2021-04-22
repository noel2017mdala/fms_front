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
  height: 130vh;

  .modalWrapper {
    //background-color: black;
    width: 100%;
    min-height: 100vh;
    transition: opacity 0.3s ease;
  }

  .modalItems {
    background-color: white;
    margin: 5em auto;
    width: 70vw;
    max-width: 100%;
    min-height: 70vh;
    height: 50vh;
    border-radius: 0.5em;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 3px;
      background-color: #f5f5f5;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #141414;
      background-image: -webkit-linear-gradient(
        90deg,
        transparent,
        rgba(0, 0, 0, 0.4) 50%,
        transparent,
        transparent
      );
    }
  }

  .header_container > .closeModal {
    font-size: 2em;
    position: absolute;
    right: 0.5em;
    color: white;
    top: 1.3em;
    cursor: pointer;
  }

  .header_container > .header {
    text-align: center;
    font-size: 1.2em;
    padding: 1em;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .items {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
  }
  .transaction_list {
    width: 100%;
  }
  .transaction_list > ul {
    list-style: none;
  }

  .transaction_list > ul li {
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 5px;
    margin: 0.8em;
    font-size: 0.9em;
    text-align: center;
    // cursor: pointer;
  }

  .transaction_list > ul li > span {
    margin: 0 0.4em;
  }

  .transaction_list > ul > li:hover {
    transform: scale(1.0025);
    box-shadow: 5px 15px 15px rgba(0, 0, 0, 0.2);
  }
  li > .listTransactionModal_btn {
    width: 20px;
    float: right;
    cursor: pointer;
  }

  ${media.bigScreen} {
    .modalItems {
      background-color: white;
      margin: 5em auto;
      width: 65%;
      max-width: 100%;
      min-height: 70vh;
      height: 80vh;
      border-radius: 0.5em;
      overflow: auto;

      ::-webkit-scrollbar {
        width: 3px;
        background-color: #f5f5f5;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #141414;
        background-image: -webkit-linear-gradient(
          90deg,
          transparent,
          rgba(0, 0, 0, 0.4) 50%,
          transparent,
          transparent
        );
      }
    }

    .transaction_list > ul li {
      box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
      padding: 20px;
      border-radius: 5px;
      margin: 0.8em auto;
      font-size: 0.9em;
      width: 80%;
      text-align: center;
      // cursor: pointer;
    }
  }
`;
