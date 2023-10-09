import { createSlice } from "@reduxjs/toolkit";

// TODO доделать с погодой + api
export const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		description: "",
		icon: "",
		temperature: 0,
		feels_like: 0,
		pressure: 0,
		humidity: 0,
	},
	reducers: {

	}
})