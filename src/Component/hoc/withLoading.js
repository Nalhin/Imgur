import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import './withLoading.scss';

const withLoading = Component => props => {
    return (
        <div>
            <Component {...props} />
            <div className="loading">
                <FaSpinner className="loading__spinner" />
            </div>
        </div>
    );
};

export default withLoading;
