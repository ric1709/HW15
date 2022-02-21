import React, { Component, Fragment } from 'react'
import classes from './AddTodo.module.css'

class AddTodo extends Component {
	constructor(props) {
		super()
		this.state = {
			task: '',
			date: '',
		}
	}
	taskChangeHandler = (e) => {
		this.setState({ task: e.target.value })
	}
	dateChangeHandler = (e) => {
		this.setState({ date: e.target.value })
	}
	submitHandler = (e) => {
		e.preventDefault()
		if (this.state.task.trim().length > 0 && this.state.date) {
			const task = {
				task: this.state.task,
				date: this.state.date,
				id: Math.random().toString(),
				checked: false,
			}
			this.props.onGetTasks(task)
			this.setState({ task: '', date: '' })
		} else alert('You didnt fill all blanks')
	}

	render() {
		return (
			<Fragment>
				<h1 className={classes.title}>TODO LIST</h1>
				<form onSubmit={this.submitHandler} className={classes.form}>
					<input
						type='text'
						onChange={this.taskChangeHandler.bind(this)}
						value={this.state.task}
						className={classes.input}
					/>
					<input
						type='date'
						onChange={this.dateChangeHandler.bind(this)}
						value={this.state.date}
						className={classes.input}
					/>
					<button className={classes.button} type='submit'>
						ADD
					</button>
				</form>
			</Fragment>
		)
	}
}

export default AddTodo
