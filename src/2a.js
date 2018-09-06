import React from 'react'

export function NoGreeting2(props) {
    return '';
  }

export function UserGreeting2(props) {
    return <p className="O">O</p>;
  }
  
export function GuestGreeting2(props) {
    return <p className="X">X</p>;
  }

export function Greeting2 (props) {
    const isLoggedIn2 = props.isLoggedIn2;
    if(isLoggedIn2 == 0){
        return <NoGreeting2 />
    }
    if (isLoggedIn2 == 1 ){
    return <UserGreeting2 />;
    }
    if(isLoggedIn2 == 2){
      return <GuestGreeting2 />;
    }
  }

export function PatataButton2(props) {
    return (
      <button onClick={props.onClick}>
        start
      </button>
    );
  }
  
export function LoginButton2(props) {
    return (
      <button onClick={props.onClick}>
      X
    </button>
    );
  }
  
export function LogoutButton2(props) {
    return (
      <button onClick={props.onClick}>
          O
        </button>
    );
  }