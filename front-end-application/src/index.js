import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import Navbar from './components/Navbar'
import {makeStyles,ThemeProvider,createMuiTheme} from '@material-ui/core/styles'
const store = createStore(rootReducer)
let theme = createMuiTheme({
  palette:{
      primary:{
          main:'rgb(0,0,0)',
          // dark:'#fafafa',
          light:'#fafafa',
          // contrastText:'#fafafa'
      },
      secondary:{
        main:'#ff5722',
        dark:'#fafafa',
        light:'#fafafa',
        contrastText:'#fafafa'
      }
  }
  
})

ReactDOM.render(<Provider store={store}><ThemeProvider theme={theme}><App /></ThemeProvider></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
