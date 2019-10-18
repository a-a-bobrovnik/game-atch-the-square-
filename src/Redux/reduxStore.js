import {createStore, combineReducers} from "redux";
import {gameReducer} from './gameReducer';

let reducers=combineReducers({
    gamePage:gameReducer
})
let store=createStore(reducers);
export default store;