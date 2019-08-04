import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../Module/store/store';
import Layout from './Layout/Layout';

const App = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Layout />
                </BrowserRouter>
            </Provider>
        </div>
    );
};

export default App;
