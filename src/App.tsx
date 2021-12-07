import React from "react";
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from './actions/index';
import { StorState } from './redusers/index';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
};

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false }
  }

  componentDidUpdate = (prevProps: AppProps): void => {
    if(!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false })
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({
      fetching: true
    })
  }

  renderTodos = (): JSX.Element[] => {
    return this.props?.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onDeleteTodo(todo.id)} key={todo.id}>{todo.title}</div>
      )
    })
  }

  onDeleteTodo = (id: number): void => {
    this.props.deleteTodo(id);
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        { this.state.fetching && 'LOADING'}
        <div>{ this.renderTodos() }</div>
      </div>
    )
  }
}

const mapStateProps = (state: StorState): { todos: Todo[]} => {
  return { todos: state.todos}
}

export const App = connect(
  mapStateProps,
  { fetchTodos, deleteTodo }
)(_App);
