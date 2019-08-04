import React from 'react';
import PropTypes from 'prop-types';
import './Source.scss';

const Source = ({ src }) => {
    return <div> {src}</div>;
};

Source.propTypes = {
    src: PropTypes.string.isRequired,
};

export default Source;
