import React, { Component } from 'react';
import Icon from './Icon'
import './Task.css';

class Task extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isComplete: false
		}
	};
	handleOnClickRadio() {
		this.setState({
			isComplete: true
		});
	};
	handleOnClickTick() {
		this.setState({
			isComplete: false
		});
	};
	handleOnClickDelete() {
		var key = this.props.index;
		var deleteHandler = this.props.deleteHandler;
		deleteHandler(key);
	};
	render() {
		var iconTypeOnTheLeft = 'radio';
		var clickHandler = this.handleOnClickRadio.bind(this);
		var titleClass = 'incomplete';
		if (this.state.isComplete) {
			iconTypeOnTheLeft = 'complete';
			clickHandler = this.handleOnClickTick.bind(this);
			titleClass = 'complete';
		}
		return (
			<div className='todo-task'>
				<Icon type={iconTypeOnTheLeft} onClick={clickHandler}/>
				<p className={'task-title ' + titleClass}>{this.props.title}</p>
				<Icon type='delete' onClick={this.handleOnClickDelete.bind(this)}/>
			</div>
		);
	}
}

export default Task;