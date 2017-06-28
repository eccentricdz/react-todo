import React, {Component} from 'react';
import './Icon.css';

var iconClassMap = {
	'enter' : 'fa-long-arrow-right',
	'delete' : 'fa-trash-o',
	'complete' : 'fa-check',
	'radio' : 'fa-circle-o'
}

class Icon extends Component {
	render() {
		var iconClass = "fa " + iconClassMap[this.props.type];
		return (
			<i className={iconClass} onClick={this.props.onClick} aria-hidden="true"></i>
		);
	}
}

export default Icon;