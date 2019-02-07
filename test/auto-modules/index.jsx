import React from 'react';
import propTypes from 'prop-types';

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

export default TestComponent;
