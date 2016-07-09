import React, {Component} from 'react'

class Compliments extends Component {

	constructor (props) {
		super(props)
		this.state = {name: ''}
		//state can change - set as empty
	}

	handleChange(a){
		this.setState({name: a.target.value})
	}
	//state is set based on the target value from input box ('e' is a function placeholder)

	//props.compliment set in the App component

	render() {
		return (
			<div>
				<input type='text' onChange={this.handleChange.bind(this)} />
				<p>{this.props.compliment}, {this.state.name}</p>
			</div>
		)
	}
}


export default Compliments

