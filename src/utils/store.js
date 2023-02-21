import { createStore } from "redux";

const initialState = {
  version: "noDevFr",
  isModalOpen: "no",
  isModalPortfolioOpen: "no",
  jobClicked: "",
  projectClicked: "",
};

export const setVersionNoDevEnAction = { type: "setVersionNoDevEn" };
export const setVersionNoDevFrAction = { type: "setVersionNoDevFr" };
export const setVersionDevAction = { type: "setVersionDev" };
export const setModalOpenAction = { type: "setModalOpen" };
export const setModalCloseAction = { type: "setModalClose" };
export const setModalPortfolioOpenAction = { type: "setModalPortfolioOpen" };
export const setModalPortfolioCloseAction = { type: "setModalPortfolioClose" };

function reducer(state = initialState, action) {
  if (action.type === "setVersionNoDevEn") {
    return {
      ...state,
      version: "noDevEn",
    };
  }
  if (action.type === "setVersionNoDevFr") {
    return {
      ...state,
      version: "noDevFr",
    };
  }
  if (action.type === "setVersionDev") {
    return {
      ...state,
      version: "dev",
    };
  }
  if (action.type === "setModalOpen") {
    return {
      ...state,
      isModalOpen: "yes",
      jobClicked: action.payload.job,
    };
  }
  if (action.type === "setModalClose") {
    return {
      ...state,
      isModalOpen: "no",
    };
  }
  if (action.type === "setModalPortfolioOpen") {
    return {
      ...state,
      isModalPortfolioOpen: "yes",
      projectClicked: action.payload.project,
    };
  }
  if (action.type === "setModalPortfolioClose") {
    return {
      ...state,
      isModalPortfolioOpen: "no",
    };
  }
  return state;
}

export const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});
