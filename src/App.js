import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {
	state = {
		contacts: [
			{
				"id": "karen",
				"name": "Karen Isgrigg",
				"handle": "@karen_isgrigg",
				"avatarURL": "http://localhost:5001/karen.jpg"
			},
			{
				"id": "richard",
				"name": "Richard Kalehoff",
				"handle": "@richardkalehoff",
				"avatarURL": "http://localhost:5001/richard.jpg"
			},
			{
				"id": "tyler",
				"name": "Tyler McGinnis",
				"handle": "@tylermcginnis",
				"avatarURL": "http://localhost:5001/tyler.jpg"
			}
		]
	};
	
	removeContact = (c) => {
		this.setState((currentState) => (
			{
				contacts: currentState.contacts.filter((contact) => (
						contact.id !== c.id
					)
				)
			}
		))
	};
	render() {
		return (
			<div>
				<ListContacts contacts ={this.state.contacts} onDeleteContact={this.removeContact}/>
			</div>
		);
	}
}

export default App;
