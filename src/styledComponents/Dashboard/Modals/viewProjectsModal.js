import styled from "styled-components";

export const Background = styled.div`
  color: black;
  position: relative;

  .listProjectsWrapper {
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

  .listProjects_header .closeModal {
    position: absolute;
    right: 0.5em;
    top: 1em;
    font-size: 2em;
  }

  .listProjects_header h3{
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

  .project_list {
    width: 100%;
  }
  .project_list ul {
    list-style: none;
  }

  .project_list  ul li {
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 5px;
    margin: 0.8em;
    font-size: 0.9em;
    text-align: center;
    // cursor: pointer;
  }

  }
`;
