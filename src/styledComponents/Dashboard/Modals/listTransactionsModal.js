import styled from "styled-components";

export const Container = styled.div`
  // background-color: red;
  color: black;
  position: relative;

  .modalItems {
    position: absolute;
    width: 100vw;
    height: 60vh;
    left: calc(-59vw + 40%);
    top: -7.9em;
    background: white;
    color: #000;
    z-index: 10;
    border-radius: 10px;
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
  .header_container {
    position: -webkit-sticky; /* Safari & IE */
    position: sticky;
    top: -1.3em;
    background-color: white;
    padding: 0.5em;
    border-radius: 0.5em;
  }

  .header_container > .closeModal {
    position: absolute;
    right: 0.5em;
    top: 1em;
    font-size: 2em;
  }
  .header_container > .header {
    text-align: center;
    font-size: 1.5em;
    margin: 1.2em 0;
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
`;
