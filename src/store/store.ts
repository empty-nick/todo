import { configureStore } from "@reduxjs/toolkit";
import { reducer as taskReducer, taskSlice } from "./task/task.slice.ts";

export const store = configureStore({
	reducer: {
		[taskSlice.name]: taskReducer,
	}
})

export type AppStore = ReturnType<typeof store.getState>