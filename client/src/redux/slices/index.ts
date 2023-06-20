import {combineReducers} from "redux";
import recommendedReducer from './data/recommendedSlice';
import popularReducer from './data/popularSlice';


export const rootReducer = combineReducers({
	recommended: recommendedReducer,
	popular: popularReducer,
})
