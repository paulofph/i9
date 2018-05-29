import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
     <div className="pflex-row">
             <Typography variant="body1" gutterBottom align="right">
          Body 1
        </Typography>
     </div>
    );
  }
}

export default App;
