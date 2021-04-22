import styled from "styled-components";

const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  width: 100%;
  position: absolute;
  z-index: 2;
  height: 130vh;
  max-height: 130vh;

  .listProjectsWrapper {
    background-color: white;
    margin: 4em auto;
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

  .listProjects_header .closeModal {
    font-size: 2em;
    position: absolute;
    right: 0.5em;
    color: white;
    top: 1.3em;
    cursor: pointer;
  }

  .listProjects_header h3 {
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

  .project_list {
    width: 100%;
  }
  .project_list ul {
    list-style: none;
  }

  .project_list ul li {
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 5px;
    margin: 0.8em;
    font-size: 0.9em;
    text-align: center;
    // cursor: pointer;
  }

  .delete_project {
    width: 20px;
    float: right;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .delete_project:hover {
    transform: scale(1.1);
  }

  ${media.bigScreen} {
    .listProjectsWrapper {
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
  }
`;
