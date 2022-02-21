import { Component, createContext } from 'react'

export const TodoContext = createContext()

class TodoContextProvider extends Component {
	constructor() {
		super()
		this.state = {
			todos: [],
		}
	}
	componentDidMount() {
		const localData = JSON.parse(localStorage.getItem('todos'))
		this.setState({ todos: localData || [] })
	}
	componentDidUpdate(prevProps, prevState) {
		prevState.todos !== this.state.todos &&
			localStorage.setItem('todos', JSON.stringify(this.state.todos))
	}
	render() {
		return (
			<TodoContext.Provider
				value={{
					todos: this.state.todos,
					setTodos: this.setState.bind(this),
				}}
			>
				{this.props.children}
			</TodoContext.Provider>
		)
	}
}

export default TodoContextProvider
