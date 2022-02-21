import { Component } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { TodoContext } from './store/context'

class App extends Component {
	static contextType = TodoContext
	getTasksHandler = (task) => {
		this.context.setTodos({ todos: [task, ...this.context.todos] })
	}
	render() {
		return (
			<div className='App'>
				<AddTodo onGetTasks={this.getTasksHandler.bind(this)} />
				<TodoList />
			</div>
		)
	}
}

export default App
