import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

interface CounterState {
  value: Array<number>;
  step: number;
}

const initialState: CounterState = {
  value: [],
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
    pushError(state, actions) {
      state.value.push(actions.payload);
    },
    // Add more actions here if needed
  },
});

export const { increment, decrement, setStep } = counterSlice.actions;
export default counterSlice.reducer;
