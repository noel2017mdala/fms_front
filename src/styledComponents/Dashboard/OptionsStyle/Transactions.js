import styled from "styled-components";

export const Transaction = styled.div`
  position: absolute;
  border-radius: 5px 5px 0px 0px;
  background: #555;
  color: #fff;
  width: 50%;
  height: 40%;
  right: 2.5em;
  top: 1em;

  :before {
    position: absolute;
    top: 10%;
    right: -5px;
    content: "";
    width: 0;
    height: 0;
    margin: -10px -4px 0;
    border-left: solid 1em #555;
    border-bottom: solid 1em transparent;
    border-top: solid 1em transparent;
  }
  .contain ul {
    list-style: none;
  }
  .contain li {
    margin: 1.5em 0em;
    text-align: center;
    cursor: pointer;
  }
`;
