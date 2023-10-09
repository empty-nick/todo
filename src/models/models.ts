import { Slice } from "@reduxjs/toolkit";

export interface ITask {
	id: number;
	taskMessage: string;
	isCompleted: boolean;
}

export interface WeatherInfoProps {
	description?: string;
	icon?: string;
	temperature?: number;
	pressure?: number;
	feels_like?: number;
	humidity?: number;
}

export type taskTypeSlice = Slice<{ tasks: ITask[] }, {
	addTask(state: { tasks: ITask[] }, action: { payload: ITask }): void;
	removeTask(state: { tasks: ITask[] }, action: { payload: number }): void;
	editTask(state: { tasks: ITask[] }, action: { payload: ITask }): void;
}, 'task'>;