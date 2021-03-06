import React from 'react'
import ReactDOM from 'react-dom'

// Backend Integration
import Amplify from 'aws-amplify'
import amplifyConfig from './aws-exports'

// Load core functionality
import Core from './core'
import * as serviceWorker from './serviceWorker'

// Initialize the backend framework
Amplify.configure(amplifyConfig)

// Inject into the DOM
ReactDOM.render(<Core />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
