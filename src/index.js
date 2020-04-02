import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import store from './redux/store'
import ErrorBoundary from './hoc/errorBoundary'


import "antd/dist/antd.css";
import './index.css';


const app = (
    <Provider store={store}>
        <ErrorBoundary>
            <Router>
                <App />
            </Router>
        </ErrorBoundary>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))