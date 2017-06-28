import React, { Component } from 'react';
import Icon from './Icon';
import './Input.css';

var inputPlaceholder = "";

class Input extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: ""
		}
	}

	handleChange(event) {
		var newValue = (event.target.value === "" || event.target.value === inputPlaceholder) ? "" : event.target.value;
		this.setState({
			value: newValue
		});
	}

	handleInputBoxOnFocus(e) {
		e.target.value = e.target.value === inputPlaceholder ? "" : e.target.value;
	};

	handleInputBoxOnBlur(e) {
		e.target.value = e.target.value === "" ? inputPlaceholder : e.target.value;
	};

	handleSubmit(e) {
		e.preventDefault();
		this.props.handleFormSubmit(this.state.value);
		document.getElementById('todo-input').value = "";
	}

	componentDidMount() {
		inputPlaceholder = this.props.placeholder;
		document.getElementById('todo-input').value = inputPlaceholder;
	}

	render() {
		return (
			<form id="todo-form" autoComplete='off' onSubmit={this.handleSubmit.bind(this)}>
				<input type='text' name='todo-input' onFocus={this.handleInputBoxOnFocus} onBlur={this.handleInputBoxOnBlur} onChange={this.handleChange.bind(this)} id='todo-input'/>
				<input type='submit' id='todo-input-submit'/>
				<Icon type='enter'/>
			</form>
		);
	}
}

export default Input;