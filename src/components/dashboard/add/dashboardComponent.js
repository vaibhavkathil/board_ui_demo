"use strict";

var React = require('react');
var DashbaordConfig = require('./dashboardConfigComponent');
var Pod = require('./podComponent');

var DashboardComponent = React.createClass({
	/**
	 * This should provide following features
	 * 1. Dashbaord initial configuration component, should be able to suggest it's state pure or not
	 * 2. Pod configuration component, should be able to suggest it's state pure or not
	 * 3. Chart Configuration component, should be able to suggest it's state pure or not
	 * 4. validate it's state if asked
	 * 5. persist it's state
	 */
	render: function () {
		return (
			<div>
			<DashbaordConfig/>
			<Pod/>
			</div>
		); 
	}
    
    
});

module.exports = DashboardComponent;