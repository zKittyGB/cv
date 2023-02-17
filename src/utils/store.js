import { createStore } from "redux";

const initialState = {
  version: "dev",
  isModalOpen: "no",
  jobClicked: "",
};

export const setVersionNoDevEnAction = { type: "setVersionNoDevEn" };
export const setVersionNoDevFrAction = { type: "setVersionNoDevFr" };
export const setVersionDevAction = { type: "setVersionDev" };
export const setModalOpenAction = { type: "setModalOpen" };
export const setModalCloseAction = { type: "setModalClose" };

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
  return state;
}

export const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});
