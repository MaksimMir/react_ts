import { combineReducers } from "redux";
import { todoReduser } from "./totos";
import { Todo } from '../actions'

export interface StorState {
    todos: Todo[]
}

export const redusers = combineReducers<StorState>({
    todos: todoReduser
})