import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';

class App extends Component {
	state = {
		contacts: [],
		screen: 'list'
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
		));
		
		ContactsAPI.remove(c);
	};
	render() {
		return (
			<div>
				{
					this.state.screen === 'list' && 
					(
					<ListContacts 
						contacts ={this.state.contacts} 
						onDeleteContact={this.removeContact}
						/>)
				}
				{
					this.state.screen === 'create' && 
					(<CreateContact />)
				}
			</div>
		);
	}
}

export default App;
