'use strict';

var React = require('react');
var ChartApi = require('../../../api/chartApi');
var PodInitForm = require('./podInitForm');
var PodApi = require('../../../api/podApi');

var Pod = React.createClass({

	getInitialState: function() {
		return {
			pod: { mame: '', description: '', title: '', typeCode: '', sequence: '' },
			errors: {},
			dirty: false
		};
	},
	propTypes: {
		userId: React.PropTypes.string.isRequired 
	},
	componentDidMount: function() {
		if(this.isMounted()){
			this.setState({chartTypes: ChartApi.getChartTypes()});
		}
	},

	/**
	 * This should provide following feature
	 * 1. First show initial config 
	 * 2. Post initial config save show chart option
	 */
	render: function () {
		return (
			<div className="panel panel-default">
			<div className="panel-heading">Pod Configuration</div>
				<PodInitForm 
				
				pod={this.state.pod}
				author={this.state.author}
				onChange={this.setPodState}
				onSave={this.savePod}
				errors={this.state.errors}

				/>
	
			</div>
		); 
	},

	setPodState: function name(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.pod[field] = value;
		return this.setState({author: this.state.author});
	},

	savePod: function name(event) {
		event.preventDefault();

		// make call to the api and save pod configuration
			event.preventDefault();

		if (!this.authorFormIsValid()) {
			return;
		}

		PodApi.savePod(this.state.pod);
		this.setState({dirty: false});
		//what's next think
	}
    
});

module.exports = Pod;