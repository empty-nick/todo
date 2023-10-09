import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actions as taskActions } from "../store/task/task.slice.ts";

const action = {
	...taskActions,
}
export const useActions = () => {
  const dispatch = useDispatch()
	return bindActionCreators(action, dispatch)
}