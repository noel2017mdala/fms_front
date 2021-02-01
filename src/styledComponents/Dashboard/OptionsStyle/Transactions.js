import styled from "styled-components";

export const Transaction = styled.div`
  .contain {
    width: 55%;
    height: 100%;
    background: #141414;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    color: white;
    display: grid;
    grid-taplate-colums: 1fr 1fr;
    position: relative;
    border-radius: 5px;
    left: 11.5em;
    bottom: 8.5em;
    // z-index: 1;
  }

  .contain .list {
    list-style: none;
    display: block;
  }

  .contain .list li {
    display: block;
    cursor: pointer;
    font-size: 0.9em;
  }
`;
