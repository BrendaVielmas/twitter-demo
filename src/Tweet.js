
import React, {Component} from 'react';
class Tweet extends Component {
	constructor (props) {
		super (props)
	 	this.state = {
	 		text: props.text
		}
	};
	render () {
		return (
			<section>	
                <p>{this.state.text}</p>
			</section>
		);
    };
}
export default Tweet;