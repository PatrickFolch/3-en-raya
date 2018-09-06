import React from 'react'

export function NoGreeting(props) {
  return '';
}

export function UserGreeting(props) {
  return <p className="O">O</p>;
}

export function GuestGreeting(props) {
  return <p className="X">X</p>;
}

export function Greeting (props) {
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

export function PatataButton(props) {
  return (
    <button onClick={props.onClick}>
      start
    </button>
  );
}

export function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
    X
  </button>
  );
}

export function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
        O
      </button>
  );
}