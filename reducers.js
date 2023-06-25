import { combineReducers } from "redux";
import * as types from "./types";

// INITIAL TIMER STATE
const initialState = {
	saved: {
		title: "Saved",
		items: [
			{
				id: "1",
				Title: "UI/UX Designer",
				Company: "Ajmera Infotech Inc.",
			},
			{
				id: "2",
				Title: "UI/UX Designer",
				Company: "Ajmera Infotech Inc.",
			},
			{
				id: "3",
				Title: "UI/UX Designer",
				Company: "Ajmera Infotech Inc.",
			},
			{
				id: "4",
				Title: "UI/UX Designer",
				Company: "Ajmera Infotech Inc.",
			},
		],
	},

	applied: {
		title: "Applied",
		items: [
			{
				id: "1",
				Title: "UI/UX Designer",
				Company: "Ajmera Infotech Inc.",
			},
		],
	},
	interviewing: {
		title: "Interviewing",
		items: [
			{
				id: "1",
				Title: "UI/UX Designer",
				Company: "Ajmera Infotech Inc.",
			},
		],
	},
	offer: {
		title: "Offer",
		items: [
			{
				id: "1",
				Title: "UI/UX Designer",
				Company: "Ajmera Infotech Inc.",
			},
		],
	},
};

// COUNTER REDUCER
export const createReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CREATE_TASK": {
			return state;
		}
		case "FETCH_STATE": {
			return {
				...state,
			};
		}
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	createId: createReducer,
});
