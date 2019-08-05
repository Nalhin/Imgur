import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import './LoadingSpinner.scss';

const LoadingSpinner = props => {
    return (
        <div className="loading">
            {props.isLoading && (
                <div className="loading__spinner-container">
                    <FaSpinner className="loading__spinner" />
                </div>
            )}
            {props.children}
        </div>
    );
};

export default LoadingSpinner;
