import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

render(<App name='compliments' />, document.querySelector('main'))
console.log('welcome to compliments')
