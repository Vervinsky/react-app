// let's go!
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Match, Miss } from 'react-router';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

import App from './components/App';

import './css/style.css';

const Root = () => {
    return (
        <Router>
            <div>
                <Match exactly pattern="/" component={StorePicker} />
                <Match pattern="/store/:storeId" component={App} />
                <Miss component={NotFound} />
            </div>
        </Router>
    );
};

render(<Root />, document.querySelector('#main'));
