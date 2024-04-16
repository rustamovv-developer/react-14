import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: +"",
  },
  reducers: {
    inc: (state, actions) => {
      state.value += actions.payload;
      if (actions.payload === 0 || actions.payload === "") {
        state.value += 1;
      }
    },
    dec: (state, actions) => {
      state.value -= actions.payload;
      if (state.value > 0 || actions.payload === "") {
        state.value -= 1;
      }
    },
    res: (state) => {
      state.value = 0;
    },
  },
});

export const { inc, dec, res } = counterSlice.actions;

export default counterSlice.reducer;
