import React from 'react'
import ReactDOM from 'react-dom'
import AuthForm from './authForm.jsx'

import './home.scss';

const Home = props => (
  <div className='home-wrapper'>
    <h1> Twitter Home: Next Steps </h1>
    <ol>
      <li> If user session active then home twitter feed </li>
      <li> If no usser session then auth-Form </li>
      <li> this logic should be written here in home.jsx </li>
    </ol>
    <h1> How to user session: </h1>
    <ol> 
      <li> first render the auth form and try to save a user </li>
      <li> then verify the the user is saved in the database </li>
      <li> then see if a new session was created</li>
      <li> the authForm should render below </li>
    </ol>
    {<AuthForm/>}
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
