import React, { Component } from 'react';

class Users  extends Component {
    state = { 
        users: [
            {id:'sdfgs', name:'spiderman', age:57, mail:'spiderman@gmail.com'},
            {id:'ghgjgj',name:'batman', age:13, mail:'batman@gmail.com'},
            {id:'rerwerw',name:'superman', age:31, mail:'superman@gmail.com'},
        ]
    }
    onHandlerAlert(e){
        alert('Are you sure you want to delete this hero???');
        console.log(e)
        console.log(this)
    }
    render() { 
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
                          <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.mail}</td>
                            <td>
                            <button
                                onClick={this.onHandlerAlert}
                                type="button"
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
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