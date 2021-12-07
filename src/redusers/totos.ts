import { Todo, FetchTodosActions, DeleteTodoActions } from "../actions";
import { ActionTypes } from "../actions/types";

type Actions = FetchTodosActions | DeleteTodoActions

export const todoReduser = (state: Todo[] = [], action: Actions) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.filter((todo: Todo) => todo.id !== action.payload)
        default:
            return state;
    }
}