import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewsFeed from './NewsFeed';


export default () => {
    return (
        <div>
            <Route exact path='/' component={NewsFeed} />
        </div>
    );
};