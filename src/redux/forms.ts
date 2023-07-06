import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  step: number;
}

const initialState: CounterState = {
  value: 0,
  step: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.step++;
    },
    decrement(state) {
      state.step--;
    },
    setStep(state, actions) {
      state.step = actions.payload;
    },
    // Add more actions here if needed
  },
});

export const { increment, decrement, setStep } = counterSlice.actions;
export default counterSlice.reducer;
