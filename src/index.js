import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {configureStore} from 'redux-starter-kit';
import logger from 'redux-logger';
import App from './App';

import homePageReducer from './pages/HomePage/homePage';
import CalendarPageReducer from './pages/CalendarPage/homePage';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore({
  reducer: {
    Home: homePageReducer,
    Calendar: CalendarPageReducer,
  },
  middleware: [logger]
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
