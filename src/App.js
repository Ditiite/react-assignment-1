import React, { Component } from 'react';
import './App.css';

import { Header } from './header/Header';
import { FeatureList } from './features/FeatureList';
import { Blog } from './blog/blog';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="bg-stripes"></div>
                <FeatureList />
                <Blog />
            </div>
        );
    }
}

export default App;
