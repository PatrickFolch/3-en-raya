import React from 'react'

export  function NoGreeting8(props) {
    return '';
  }
  
export  function UserGreeting8(props) {
    return <p className="O">O</p>;
  }
  
export  function GuestGreeting8(props) {
    return <p className="X">X</p>;
  }

export function Greeting8 (props) {
    const isLoggedIn8 = props.isLoggedIn8;
    if(isLoggedIn8 == 0){
        return <NoGreeting8 />
    }
    if (isLoggedIn8 == 1 ){
    return <UserGreeting8 />;
    }
    if(isLoggedIn8 == 2){
      return <GuestGreeting8 />;
    }
  }

export function PatataButton8(props) {
    return (
      <button onClick={props.onClick}>
        start
      </button>
    );
  }
  
export function LoginButton8(props) {
    return (
      <button onClick={props.onClick}>
      X
    </button>
    );
  }
  
export function LogoutButton8(props) {
    return (
      <button onClick={props.onClick}>
          O
        </button>
    );
  }