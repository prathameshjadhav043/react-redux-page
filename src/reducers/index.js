import taskReducers from "./reducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    taskReducers
})

export default rootReducer;