import React, { Component } from 'react'
import { Auth } from 'aws-amplify'

import './style.css'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.createScript = this.createScript.bind(this)
    this.createSignInButton = this.createSignInButton.bind(this)
  }

  /**
   * Any time the SignIn page is rendered, load the Google SDK
   */
  componentDidMount() {
    const ga =
      window.gapi && window.gapi.auth2
        ? window.gapi.auth2.getAuthInstance()
        : null
    if (!ga) this.createScript()
    else this.createSignInButton()
  }

  /**
   * No SDK was found, so let's create one and initialize it
   */
  createScript() {
    // load the Google SDK
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/platform.js'
    script.async = true
    script.crossorigin = 'anonymous'
    script.onload = () => {
      // init the Google SDK client
      const g = window.gapi
      g.load('auth2', () => {
        g.auth2
          .init({
            client_id:
              '167223859798-utaf2kgse8chgj6qldv85ddml63net4k.apps.googleusercontent.com',
            // authorized scopes
            scope: 'profile email openid',
          })
          .then(() => {
            this.createSignInButton()
          })
      })
    }
    document.body.appendChild(script)
  }

  /**
   * Login to the Auth object via the Google user
   */
  async federatedSignIn(googleUser) {
    const { id_token, expires_at } = googleUser.getAuthResponse()
    const profile = googleUser.getBasicProfile()
    let user = {
      email: profile.getEmail(),
      name: profile.getName(),
    }

    Auth.federatedSignIn('google', { token: id_token, expires_at }, user)
      .then(credentials => {
        console.log(credentials)
      })
      .catch(error => {
        console.error('Error signing in via Google:', error)
      })
  }

  /**
   * Inject the Google sign in button after SDK is ready
   */
  createSignInButton() {
    window.gapi.signin2.render('googleSignIn', {
      scope: 'profile email openid',
      width: 240,
      height: 40,
      longtitle: true,
      theme: 'light',
      onsuccess: this.federatedSignIn,
    })
  }

  /**
   * Build the SignIn Page
   */
  render() {
    return (
      <div className="centered">
        <h1 style={{ color: 'white' }}>Sign In</h1>
        <div id="googleSignIn"></div>
      </div>
    )
  }
}

export default SignIn
