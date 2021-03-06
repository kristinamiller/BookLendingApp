import React from 'react';

class Signup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state).then(() => this.props.history.push('/'))
  }

 
  render(){
    return(
      <div className="session-form">
        <form>
          <h2>Sign Up!</h2>
          <label>Email:
            <input 
            type="text"
            value={this.state.email}
            onChange={this.handleInput('email')}
            />
          </label>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <button onClick={this.handleSubmit}>Sign Up!</button>
        </form>
      </div>
    )
  }

}

export default Signup;