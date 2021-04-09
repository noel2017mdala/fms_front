import styled from "styled-components";
const media = {
  bigScreen: `@media (min-width: 75em)`,
  mobile_landscape: `@media (max-width: 40em) and (orientation: landscape)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
};

export const Transaction = styled.div`
  position: absolute;
  border-radius: 5px;
  background: #454545;
  color: black;
  width: 50%;
  height: 50%;
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
    border-left: solid 1em #454545;
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
    color: white;
    font-size: 1.2rem;
  }

  ${media.tablet} {
    width: 56%;
    height: 80%;
  }
`;
