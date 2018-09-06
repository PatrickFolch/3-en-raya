import React from 'react'

export function NoGreeting3(props) {
    return '';
  }
  
export function UserGreeting3(props) {
    return <p className="O">O</p>;
  }
  
export function GuestGreeting3(props) {
    return <p className="X">X</p>;
  }

export function Greeting3 (props) {
    const isLoggedIn3 = props.isLoggedIn3;
    if(isLoggedIn3 == 0){
        return <NoGreeting3 />
    }
    if (isLoggedIn3 == 1 ){
    return <UserGreeting3 />;
    }
    if(isLoggedIn3 == 2){
      return <GuestGreeting3 />;
    }
  }

export function PatataButton3(props) {
    return (
      <button onClick={props.onClick}>
        start
      </button>
    );
  }
  
export function LoginButton3(props) {
    return (
      <button onClick={props.onClick}>
      X
    </button>
    );
  }
  
export function LogoutButton3(props) {
    return (
      <button onClick={props.onClick}>
          O
        </button>
    );
  }