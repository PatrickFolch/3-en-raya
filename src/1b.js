import React from 'react'

export function NoGreeting4(props) {
    return '';
  }
  
 export  function UserGreeting4(props) {
    return <p className="O">O</p>;
  }
  
 export  function GuestGreeting4(props) {
    return <p className="X">X</p>;
  }

 export function Greeting4 (props) {
    const isLoggedIn4 = props.isLoggedIn4;
    if(isLoggedIn4 == 0){
        return <NoGreeting4 />
    }
    if (isLoggedIn4 == 1 ){
    return <UserGreeting4 />;
    }
    if(isLoggedIn4 == 2){
      return <GuestGreeting4 />;
    }
  }

export function PatataButton4(props) {
    return (
      <button onClick={props.onClick}>
        start
      </button>
    );
  }
  
export function LoginButton4(props) {
    return (
      <button onClick={props.onClick}>
      X
    </button>
    );
  }
  
export function LogoutButton4(props) {
    return (
      <button onClick={props.onClick}>
          O
        </button>
    );
  }