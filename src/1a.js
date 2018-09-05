import React, { Component } from 'react';
import './App.css';

class A extends Ract.Component {
  constructor(props){
    super(props)
    this.handleClick = 
    this.handleClick.bind(this); 
    this.handleLoginClick = 
    this.handleLoginClick.bind(this);
    this.handleLogoutClick = 
    this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: 0};
    }
  handleClick() {
    this.setState({isLoggedIn: 1});
  }
  handleLoginClick() {
    this.setState({isLoggedIn: 2});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: 1});
  }
  
  render() {
  const isLoggedIn = this.state.isLoggedIn;
  let button;
  
if(isLoggedIn==0){
      button = <PatataButton onClick=
      {this.handleClick} />
    }
  if(isLoggedIn==1) {
    button = <LoginButton onClick=
    {this.handleLoginClick} />;
  } 
  if(isLoggedIn==2){
    button = <LogoutButton onClick=
    {this.handleLogoutClick} />;
  }
  
  return (
  <div className="cuadricula">
    <div  id="1a" className="cuadradoA">
       <div className="fichas">
          <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
          </div>
       </div>
    </div>
  </div>
   );
  }
}

function NoGreeting(props) {
  return '';
}

function UserGreeting(props) {
  return <p>O</p>;
}

function GuestGreeting(props) {
  return <p>X</p>;
}

function Greeting (props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn == 0){
      return <NoGreeting />
  }
  if (isLoggedIn == 1 ){
  return <UserGreeting />;
  }
  if(isLoggedIn == 2){
    return <GuestGreeting />;
  }
}

function PatataButton(props) {
  return (
    <button onClick={props.onClick}>
      O
    </button>
  );
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
    X
  </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
        O
      </button>
  );
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
