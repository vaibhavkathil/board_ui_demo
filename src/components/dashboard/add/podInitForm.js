"use strict";

var React = require('react');
var Input = require('../../common/textInput');

var PodInitForm = React.createClass({
	propTypes: {
		pod: React.PropTypes.object.isRequired,
		onSave:	React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},

	render: function() {
		return (
			<form>
				<h1>Configure Pod</h1>
				<Input
					name="name"
					label="Name"
					value={this.props.pod.name}
					onChange={this.props.onChange}
					error={this.props.errors.name} />

				<Input
					name="description"
					label="Description"
					value={this.props.pod.description}
					onChange={this.props.onChange}
					error={this.props.errors.description} />

				<Input
					name="title"
					label="Title"
					value={this.props.pod.title}
					onChange={this.props.onChange}
					error={this.props.errors.title} />

				<input type="submit" value="Next" 
				className="btn btn-default" 
				onClick={this.props.onSave} />
			</form>
		);
	}
});

module.exports = PodInitForm;