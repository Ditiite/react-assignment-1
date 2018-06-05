import React, { Component } from 'react';
import './App.css';

import { Header } from './header/Header';
import { FeatureList } from './features/FeatureList';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <FeatureList />
            </div>
        );
    }
}

export default App;
