import React, { Component } from 'react'
import Compliments from './compliments'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    	<div>
			<h1>Hello World</h1>
			<h2>This is a React compliment generator</h2>
			<Compliments compliment='You are awesome'/>
		</div>
	)
  }

}

export default App
