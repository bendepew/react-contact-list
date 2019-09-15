import React, { Component } from 'react';

class Users extends Component {
 render() {
 	return(
    	<ul className='user-list'>
      		{this.props.users.map((users) => (
    			<li>User ID: {users.name}</li>
    ))}
      	</ul>
    )
 } 
}

export default Users
