import React from 'react'

export  function NoGreeting7(props) {
    return '';
  }
  
export  function UserGreeting7(props) {
    return <p className="O">O</p>;
  }
  
export  function GuestGreeting7(props) {
    return <p className="X">X</p>;
  }

export function Greeting7 (props) {
    const isLoggedIn7 = props.isLoggedIn7;
    if(isLoggedIn7 == 0){
        return <NoGreeting7 />
    }
    if (isLoggedIn7 == 1 ){
    return <UserGreeting7 />;
    }
    if(isLoggedIn7 == 2){
      return <GuestGreeting7 />;
    }
  }

export function PatataButton7(props) {
    return (
      <button onClick={props.onClick}>
        start
      </button>
    );
  }
  
export function LoginButton7(props) {
    return (
      <button onClick={props.onClick}>
      X
    </button>
    );
  }
  
export function LogoutButton7(props) {
    return (
      <button onClick={props.onClick}>
          O
        </button>
    );
  }