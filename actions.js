import * as types from "./types";

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT });

export const createTaskAction = () => ({ type: "CREATE_TASK" });

export const fetchState = () => ({ type: "FETCH_STATE" });

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT });

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET });
