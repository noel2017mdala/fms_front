import styled from "styled-components";

export const Background = styled.div`
width: 100%
height: 100%;
background: rgba(0, 0, 0, 0.8);
position: absolute;
right: 10em;
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
  // justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
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

  .listProjects {
    margin: 1em;
  }
  .listProjects h3 {
    text-align: center;
  }
  .project_list ul {
    list-style: none;
  }

  .project_list li {
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    // cursor: pointer;
  }

  .project_list li span {
    padding: 10px;
  }

  .project_list li:hover {
    transform: scale(1.0025);
    box-shadow: 5px 15px 15px rgba(0, 0, 0, 0.2);
  }
  .project_list li img {
    width: 20px;
    float: right;
    cursor: pointer;
    margin: 0 5px;
  }
  .project_list li img {
    transform: scale(1.0025);
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
