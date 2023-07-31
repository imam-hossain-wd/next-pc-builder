

const initialState = {
  selectedComponents: {},
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      const { category, component } = action.payload;
      state.selectedComponents[category] = component;
    },
  },
});

export const { addComponent } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
