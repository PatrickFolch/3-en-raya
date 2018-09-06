import React from 'react'

export  function NoGreeting9(props) {
    return '';
  }
  
export  function UserGreeting9(props) {
    return <p className="O">O</p>;
  }
  
export  function GuestGreeting9(props) {
    return <p className="X">X</p>;
  }

export function Greeting9 (props) {
    const isLoggedIn9 = props.isLoggedIn9;
    if(isLoggedIn9 == 0){
        return <NoGreeting9 />
    }
    if (isLoggedIn9 == 1 ){
    return <UserGreeting9 />;
    }
    if(isLoggedIn9 == 2){
      return <GuestGreeting9 />;
    }
  }
  
export function PatataButton9(props) {
    return (
      <button onClick={props.onClick}>
        start
      </button>
    );
  }
  
export function LoginButton9(props) {
    return (
      <button onClick={props.onClick}>
      X
    </button>
    );
  }
  
export function LogoutButton9(props) {
    return (
      <button onClick={props.onClick}>
          O
        </button>
    );
  }
