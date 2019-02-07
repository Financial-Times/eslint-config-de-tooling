const React = require('react');
const propTypes = require('prop-types');

const TestComponent = ({ myProp, defaultProp }) => (
	<div>
		{myProp}
		{defaultProp}
	</div>
);

TestComponent.propTypes = {
	myProp: propTypes.string.isRequired,
	defaultProp: propTypes.string,
};

TestComponent.defaultProps = {
	defaultProp: 'Hello',
};

module.exports = TestComponent;
