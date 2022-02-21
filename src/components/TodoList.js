import { Component } from 'react'
import { TodoContext } from '../store/context'
import TodoItem from './TodoItem'
import classes from './TodoList.module.css'

class TodoList extends Component {
	static contextType = TodoContext
	render() {
		return (
			<div>
				<ul className={classes.list}>
					{this.context.todos.map((task) => {
						return (
							<TodoItem
								key={task.id}
								title={task.task}
								date={task.date}
								id={task.id}
								checked={task.checked}
							/>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default TodoList
