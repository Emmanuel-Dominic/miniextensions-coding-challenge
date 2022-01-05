import { combineReducers } from "redux";
import bankReducer from "./bankReducer";

const reducers = combineReducers({
    student: bankReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>
