import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppStore } from "../store/store.ts";

export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector