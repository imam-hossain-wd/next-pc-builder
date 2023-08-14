import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("pcBuilder");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("pcBuilder", serializedState);
  } catch (err) {
  console.log(err);
  }
};

const initialState = loadState() || {
  selectedComponents: {},
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      const { product } = action.payload;
      if (!state.selectedComponents[product.category]) {
        state.selectedComponents[product.category] = [];
      }
      state.selectedComponents[product.category].push(product);
    },
  },
});

export const { addComponent } = pcBuilderSlice.actions;


export const setupLocalStorage = (store) => {
  store.subscribe(() => {
    saveState(store.getState().pcBuilder);
  });
};

export default pcBuilderSlice.reducer;

