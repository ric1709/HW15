import { Component } from 'react'
import { TodoContext } from '../store/context'
import classes from './TodoItem.module.css'

class TodoItem extends Component {
	static contextType = TodoContext
	deleteHandler = (e) => {
		const filteredData = this.context.todos.filter(
			(el) => el.id !== e.target.id,
		)
		this.context.setTodos({ todos: filteredData })
	}
	checkedHandler = (e) => {
		const checkedData = this.context.todos.map((el) => {
			if (el.id === e.target.id) {
				el.checked = !el.checked
			}
			return el
		})
		this.context.setTodos({ todos: checkedData })
	}
	render() {
		const task = this.props
		return (
			<li className={classes.task_block}>
				<span className={task.checked ? classes.done : classes.text}>
					{task.title}
				</span>
				<span>{task.date}</span>
				<label className={classes.container}>
					<input
						type='checkbox'
						id={task.id}
						onChange={this.checkedHandler}
						checked={task.checked}
					/>
					<div className={classes.checkmark}></div>
				</label>
				<div className={classes.main}>
					<button
						className={classes.btn}
						id={task.id}
						onClick={this.deleteHandler}
					>
						DELETE
					</button>
				</div>
			</li>
		)
	}
}
export default TodoItem
