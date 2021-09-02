import React, { Component } from 'react';
import './users.css';

class Users  extends Component {
    state = { 
        users: [
            {id:'sdfgs', name:'spiderman', age:37, mail:'spiderman@gmail.com'},
            {id:'ghgjgj',name:'batman', age:13, mail:'batman@gmail.com'},
            {id:'rerwerw',name:'superman', age:31, mail:'superman@gmail.com'},
        ]
    }
    // constructor() {
    //     super();

    //     this.onHandlerAlert = this.onHandlerAlert.bind(this)
    // }
    ageClass(user){
        return user > 25 ? 'red' : 'green'
    }
    removeUser = (id) => {
        let {users} = this.state;
        users = users.filter(user => user.id !== id);
        this.setState({users})
        console.log(this)
    }
    render() { 
        if(this.state.users.length === 0) return <h2>No users found</h2>
        return (
            <div className="container">
                <div className="row">
                  <div className="col-12">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Age</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.users.map(user => (
                          <tr key={user.id} className = {this.ageClass(user.age)}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.mail}</td>
                            <td>
                            <button
                                onClick={() => this.removeUser(user.id)}
                                type="button"
                                className="btn btn-danger"
                            >
                                Delete
                            </button >
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
        );
    }
}
 
export default Users ;


<div class="container">
  <div class="row">
    <div class="card">
        <div class="card-body">
            This is some text within a card body.
        </div>
    </div>
  </div>
</div>