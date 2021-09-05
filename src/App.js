import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
	state = {
		contacts: []
	};
	
	componentDidMount(){
		ContactsAPI.getAll()
		.then((contacts) => {
			this.setState(()=>({
				contacts
			}))
		})
	}
	
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
