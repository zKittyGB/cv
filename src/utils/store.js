import { createStore } from "redux";

const initialState = {
  version: "dev",
};

export const setVersionNoDevEnAction = { type: "setVersionNoDevEn" };
export const setVersionNoDevFrAction = { type: "setVersionNoDevFr" };
export const setVersionDevAction = { type: "setVersionDev" };

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
  return state;
}

export const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});
