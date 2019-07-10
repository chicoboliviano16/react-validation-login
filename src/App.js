import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input 
                  type="text" 
                  placeholder="First Name" 
                  className=""
                  name="firstName"
                  onChange={this.submit}
                  noValidate/>
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input 
                  type="text" 
                  placeholder="Last Name" 
                  className=""
                  name="lastName"
                  onChange={this.submit}
                  noValidate/>
            </div>
            <div className="email">
              <label htmlFor="email">E-mail</label>
              <input 
                  type="text" 
                  placeholder="E-mail" 
                  className=""
                  name="email"
                  onChange={this.submit}
                  noValidate/>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
}

export default App;
