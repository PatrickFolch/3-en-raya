import React from 'react'

export function NoGreeting6(props) {
    return '';
  }
  
export   function UserGreeting6(props) {
    return <p className="O">O</p>;
  }
  
export   function GuestGreeting6(props) {
    return <p className="X">X</p>;
  }

export function Greeting6 (props) {
    const isLoggedIn6 = props.isLoggedIn6;
    if(isLoggedIn6 == 0){
        return <NoGreeting6 />
    }
    if (isLoggedIn6 == 1 ){
    return <UserGreeting6 />;
    }
    if(isLoggedIn6 == 2){
      return <GuestGreeting6 />;
    }
  }

export function PatataButton6(props) {
    return (
      <button onClick={props.onClick}>
        start
      </button>
    );
  }
  
export function LoginButton6(props) {
    return (
      <button onClick={props.onClick}>
      X
    </button>
    );
  }
  
export function LogoutButton6(props) {
    return (
      <button onClick={props.onClick}>
          O
        </button>
    );
  } 