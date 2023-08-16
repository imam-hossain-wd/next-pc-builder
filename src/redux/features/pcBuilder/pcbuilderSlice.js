// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   product: []
// };

// const pcBuilderSlice = createSlice({
//   name: 'pcbuilder',
//   initialState,
//   reducers: {
//     addItemToCart: (state, action) => {
//       const newItem = action.payload;
//       state.product.push(newItem);
    

//     },
//   },
// });

// export const { addItemToCart} = pcBuilderSlice.actions;

// export default pcBuilderSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
  productsTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const existingProductIndex = state.products.findIndex(
        (product) => product.category === newProduct.category
      );

      if (existingProductIndex !== -1) {
        state.total -= state.products[existingProductIndex].price;
        state.products[existingProductIndex] = newProduct;
      } else {
        
        state.products.push(newProduct);
      }

      state.total += newProduct.price;
      state.productsTotal += 1;
    },

    removeOne: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );

      state.total -= action.payload.price;
      state.productsTotal -= 1;
    },
  },
});

export const { addToCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;
