import './App.css';
import './loaders/jquery.loader.js'

import React, {Component} from 'react';
import './App.css';
import Main from './components/ui/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div className="main">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;