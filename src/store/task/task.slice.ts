import { createSlice } from "@reduxjs/toolkit";
import { taskTypeSlice } from "../../models/models.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const taskSlice: taskTypeSlice = createSlice({
	name: 'task',
	initialState: {
		tasks: []
	},
	reducers: {
		addTask(state, action){
			if (action.payload.taskMessage.trim().length > 0)
				state.tasks.push({
					id: action.payload.id,
					taskMessage: action.payload.taskMessage,
					isCompleted: action.payload.isCompleted,
				})
			console.log(state.tasks)
		},
		removeTask(state, action) {
			state.tasks = state.tasks.filter( todo => todo.id !== action.payload)
			console.log(state.tasks)
		},
		editTask(state, action) {
			state.tasks = state.tasks.map( task => task.id === action.payload.id ? action.payload : task)
			console.log(state.tasks)
		}
	}
})

export const { actions, reducer} = taskSlice