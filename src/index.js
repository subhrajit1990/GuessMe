import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

import { AppContainer } from 'react-hot-loader'



window.onload = () => {
  ReactDOM.render(<App/>, document.getElementById('main'));
};


