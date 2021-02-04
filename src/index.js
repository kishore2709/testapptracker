import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const rootReducer = combineReducers({
  form: formReducer
});

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        '& p': {
          fontSize: 12,
          border: 0,
          marginTop: 2,
          padding: 0
        }
      }
    },
    MuiSelect: {
      select: {
        paddingBotton: 10
      }
    }
  }
})

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <MuiThemeProvider theme={theme}>

    <App />
    </MuiThemeProvider>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
