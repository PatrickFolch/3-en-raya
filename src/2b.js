import React from 'react'

export function NoGreeting5(props) {
    return '';
  }
  
export   function UserGreeting5(props) {
    return <p className="O">O</p>;
  }
  
export   function GuestGreeting5(props) {
    return <p className="X">X</p>;
  }

export function Greeting5 (props) {
    const isLoggedIn5 = props.isLoggedIn5;
    if(isLoggedIn5 == 0){
        return <NoGreeting5 />
    }
    if (isLoggedIn5 == 1 ){
    return <UserGreeting5 />;
    }
    if(isLoggedIn5 == 2){
      return <GuestGreeting5 />;
    }
  }

export function PatataButton5(props) {
    return (
      <button onClick={props.onClick}>
        start
      </button>
    );
  }
  
export function LoginButton5(props) {
    return (
      <button onClick={props.onClick}>
      X
    </button>
    );
  }
  
export function LogoutButton5(props) {
    return (
      <button onClick={props.onClick}>
          O
        </button>
    );
  }