import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.handleClick = 
    this.handleClick.bind(this);
    this.handleClick2 = 
    this.handleClick2.bind(this);
    this.handleClick3 = 
    this.handleClick3.bind(this);
    this.handleClick4 = 
    this.handleClick4.bind(this);
    this.handleClick5 = 
    this.handleClick5.bind(this);
    this.handleClick6 = 
    this.handleClick6.bind(this);
    this.handleClick7 = 
    this.handleClick7.bind(this);
    this.handleClick8 = 
    this.handleClick8.bind(this);
    this.handleClick9 = 
    this.handleClick9.bind(this);   
    this.handleLoginClick = 
    this.handleLoginClick.bind(this);
    this.handleLoginClick2 = 
    this.handleLoginClick2.bind(this);
    this.handleLoginClick3 = 
    this.handleLoginClick3.bind(this);
    this.handleLoginClick4 = 
    this.handleLoginClick4.bind(this);
    this.handleLoginClick5 = 
    this.handleLoginClick5.bind(this);
    this.handleLoginClick6 = 
    this.handleLoginClick6.bind(this);
    this.handleLoginClick7 = 
    this.handleLoginClick7.bind(this);
    this.handleLoginClick8 = 
    this.handleLoginClick8.bind(this);
    this.handleLoginClick9 = 
    this.handleLoginClick9.bind(this);
    this.handleLogoutClick = 
    this.handleLogoutClick.bind(this);
    this.handleLogoutClick2 = 
    this.handleLogoutClick2.bind(this);
    this.handleLogoutClick3 = 
    this.handleLogoutClick3.bind(this);
    this.handleLogoutClick4 = 
    this.handleLogoutClick4.bind(this);
    this.handleLogoutClick5 = 
    this.handleLogoutClick5.bind(this);
    this.handleLogoutClick6 = 
    this.handleLogoutClick6.bind(this);
    this.handleLogoutClick7 = 
    this.handleLogoutClick7.bind(this);
    this.handleLogoutClick8 = 
    this.handleLogoutClick8.bind(this);
    this.handleLogoutClick9 = 
    this.handleLogoutClick9.bind(this);
    this.state = {
      isLoggedIn: 0,
      isLoggedIn2: 0,
      isLoggedIn3: 0,
      isLoggedIn4: 0,
      isLoggedIn5: 0,
      isLoggedIn6: 0,
      isLoggedIn7: 0,
      isLoggedIn8: 0,
      isLoggedIn9: 0,
    };
    }
  handleClick(props) {
    this.setState({
      isLoggedIn: 1});
  }
  handleLoginClick(props) {
    this.setState({isLoggedIn: 2});
  }

  handleLogoutClick(props) {
    this.setState({isLoggedIn: 1});
  }
  
  handleClick2(props) {
    this.setState({isLoggedIn2: 1});
  }
  handleLoginClick2(props) {
    this.setState({isLoggedIn2: 2});
  }

  handleLogoutClick2(props) {
    this.setState({isLoggedIn2: 1});
  }
  
  handleClick3(props) {
    this.setState({isLoggedIn3: 1});
  }
  handleLoginClick3(props) {
    this.setState({isLoggedIn3: 2});
  }

  handleLogoutClick3(props) {
    this.setState({isLoggedIn3: 1});
  }
  handleClick4(props) {
    this.setState({
      isLoggedIn4: 1});
  }
  handleLoginClick4(props) {
    this.setState({isLoggedIn4: 2});
  }

  handleLogoutClick4(props) {
    this.setState({isLoggedIn4: 1});
  }
  
  handleClick5(props) {
    this.setState({isLoggedIn5: 1});
  }
  handleLoginClick5(props) {
    this.setState({isLoggedIn5: 2});
  }

  handleLogoutClick5(props) {
    this.setState({isLoggedIn5: 1});
  }
  
  handleClick6(props) {
    this.setState({isLoggedIn6: 1});
  }
  handleLoginClick6(props) {
    this.setState({isLoggedIn6: 2});
  }

  handleLogoutClick6(props) {
    this.setState({isLoggedIn6: 1});
  }
  handleClick7(props) {
    this.setState({
      isLoggedIn7: 1});
  }
  handleLoginClick7(props) {
    this.setState({isLoggedIn7: 2});
  }

  handleLogoutClick7(props) {
    this.setState({isLoggedIn7: 1});
  }
  
  handleClick8(props) {
    this.setState({isLoggedIn8: 1});
  }
  handleLoginClick8(props) {
    this.setState({isLoggedIn8: 2});
  }

  handleLogoutClick8(props) {
    this.setState({isLoggedIn8: 1});
  }
  
  handleClick9(props) {
    this.setState({isLoggedIn9: 1});
  }
  handleLoginClick9(props) {
    this.setState({isLoggedIn9: 2});
  }

  handleLogoutClick9(props) {
    this.setState({isLoggedIn9: 1});
  }

  
  render() {
  const isLoggedIn = this.state.isLoggedIn;
  let button;
  const isLoggedIn2 = this.state.isLoggedIn2;
  let button2;
  const isLoggedIn3 = this.state.isLoggedIn3;
  let button3;
  const isLoggedIn4 = this.state.isLoggedIn4;
  let button4;
  const isLoggedIn5 = this.state.isLoggedIn5;
  let button5;
  const isLoggedIn6 = this.state.isLoggedIn6;
  let button6;
  const isLoggedIn7 = this.state.isLoggedIn7;
  let button7;
  const isLoggedIn8 = this.state.isLoggedIn8;
  let button8;
  const isLoggedIn9 = this.state.isLoggedIn9;
  let button9;
  
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
  
  
if(isLoggedIn2==0){
      button2 = <PatataButton2 onClick=
      {this.handleClick2} />
    }
  if(isLoggedIn2==1) {
    button2 = <LoginButton2 onClick=
    {this.handleLoginClick2} />;
  } 
  if(isLoggedIn2==2){
    button2 = <LogoutButton2 onClick=
    {this.handleLogoutClick2} />;
  }
  
  if(isLoggedIn3==0){
    button3 = <PatataButton3 onClick=
    {this.handleClick3} />
  }
if(isLoggedIn3==1) {
  button3 = <LoginButton3 onClick=
  {this.handleLoginClick3} />;
} 
if(isLoggedIn3==2){
  button3 = <LogoutButton3 onClick=
  {this.handleLogoutClick3} />;
}

if(isLoggedIn4==0){
  button4 = <PatataButton4 onClick=
  {this.handleClick4} />
}
if(isLoggedIn4==1) {
button4 = <LoginButton4 onClick=
{this.handleLoginClick4} />;
} 
if(isLoggedIn4==2){
button4 = <LogoutButton onClick=
{this.handleLogoutClick4} />;
}


if(isLoggedIn5==0){
  button5 = <PatataButton5 onClick=
  {this.handleClick5} />
}
if(isLoggedIn5==1) {
button5 = <LoginButton5 onClick=
{this.handleLoginClick5} />;
} 
if(isLoggedIn5==2){
button5 = <LogoutButton5 onClick=
{this.handleLogoutClick5} />;
}

if(isLoggedIn6==0){
button6 = <PatataButton6 onClick=
{this.handleClick6} />
}
if(isLoggedIn6==1) {
button6 = <LoginButton6 onClick=
{this.handleLoginClick6} />;
} 
if(isLoggedIn6==2){
button6 = <LogoutButton6 onClick=
{this.handleLogoutClick6} />;
}

if(isLoggedIn7==0){
  button7 = <PatataButton7 onClick=
  {this.handleClick7} />
}
if(isLoggedIn7==1) {
button7 = <LoginButton7 onClick=
{this.handleLoginClick7} />;
} 
if(isLoggedIn7==2){
button7 = <LogoutButton7 onClick=
{this.handleLogoutClick7} />;
}


if(isLoggedIn8==0){
  button8 = <PatataButton8 onClick=
  {this.handleClick8} />
}
if(isLoggedIn8==1) {
button8 = <LoginButton8 onClick=
{this.handleLoginClick8} />;
} 
if(isLoggedIn8==2){
button8 = <LogoutButton8 onClick=
{this.handleLogoutClick8} />;
}

if(isLoggedIn9==0){
button9 = <PatataButton9 onClick=
{this.handleClick9} />
}
if(isLoggedIn9==1) {
button9 = <LoginButton9 onClick=
{this.handleLoginClick9} />;
} 
if(isLoggedIn9==2){
button9 = <LogoutButton9 onClick=
{this.handleLogoutClick9} />;
}

  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React TIC-TAC-TOE </h1>
        </header>
        {/* <p className="App-introbe">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
    <div className="cuadricula">
    <div  id="1a" className="cuadradoA">
       <div className="fichas">
          <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
          </div>
       </div>
    </div>
    <div id="2a" className="cuadradoB">
      <div className="fichas">
        <div>
          <Greeting2 isLoggedIn2={isLoggedIn2} />
          {button2}
        </div>
      </div>
    </div>
    <div id="3a" className="cuadradoC">
      <div className="fichas">
        <div>
          <Greeting3 isLoggedIn3={isLoggedIn3} />
          {button3}
        </div>
      </div>
    </div>
    <div id="1b" className="cuadradoA">
      <div className="fichas">
        <div>
          <Greeting4 isLoggedIn4={isLoggedIn4} />
          {button4}
        </div>
      </div>
    </div>
    <div id="2b" className="cuadradoB">
      <div className="fichas">
        <div>
          <Greeting5 isLoggedIn5={isLoggedIn5} />
          {button5}
        </div>
      </div>
    </div>
    <div id="3b" className="cuadradoC">
      <div className="fichas">
        <div>
          <Greeting6 isLoggedIn6={isLoggedIn6} />
          {button6}
        </div>
      </div>
    </div>
    <div id="1c" className="cuadradoD">
      <div className="fichas">
        <div>
          <Greeting7 isLoggedIn7={isLoggedIn7} />
          {button7}
        </div>
      </div>
    </div>
    <div id="2c" className="cuadradoE">
      <div className="fichas">
        <div>
          <Greeting8 isLoggedIn8={isLoggedIn8} />
          {button8}
        </div>
      </div>
    </div>
    <div id="3c" className="cuadradoF">
      <div className="fichas">
        <div>
          <Greeting9 isLoggedIn9={isLoggedIn9} />
          {button9}
        </div>
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

function NoGreeting2(props) {
  return '';
}

function UserGreeting2(props) {
  return <p>O</p>;
}

function GuestGreeting2(props) {
  return <p>X</p>;
}

function NoGreeting3(props) {
  return '';
}

function UserGreeting3(props) {
  return <p>O</p>;
}

function GuestGreeting3(props) {
  return <p>X</p>;
}

function NoGreeting4(props) {
  return '';
}

function UserGreeting4(props) {
  return <p>O</p>;
}

function GuestGreeting4(props) {
  return <p>X</p>;
}

function NoGreeting5(props) {
  return '';
}

function UserGreeting5(props) {
  return <p>O</p>;
}

function GuestGreeting5(props) {
  return <p>X</p>;
}

function NoGreeting6(props) {
  return '';
}

function UserGreeting6(props) {
  return <p>O</p>;
}

function GuestGreeting6(props) {
  return <p>X</p>;
}

function NoGreeting7(props) {
  return '';
}

function UserGreeting7(props) {
  return <p>O</p>;
}

function GuestGreeting7(props) {
  return <p>X</p>;
}

function NoGreeting8(props) {
  return '';
}

function UserGreeting8(props) {
  return <p>O</p>;
}

function GuestGreeting8(props) {
  return <p>X</p>;
}

function NoGreeting9(props) {
  return '';
}

function UserGreeting9(props) {
  return <p>O</p>;
}

function GuestGreeting9(props) {
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

function Greeting2 (props) {
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

function Greeting3 (props) {
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

function Greeting4 (props) {
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

function Greeting5 (props) {
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

function Greeting6 (props) {
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

function Greeting7 (props) {
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

function Greeting8 (props) {
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

function Greeting9 (props) {
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

function PatataButton2(props) {
  return (
    <button onClick={props.onClick}>
      O
    </button>
  );
}

function LoginButton2(props) {
  return (
    <button onClick={props.onClick}>
    X
  </button>
  );
}

function LogoutButton2(props) {
  return (
    <button onClick={props.onClick}>
        O
      </button>
  );
}

function PatataButton3(props) {
  return (
    <button onClick={props.onClick}>
      O
    </button>
  );
}

function LoginButton3(props) {
  return (
    <button onClick={props.onClick}>
    X
  </button>
  );
}

function LogoutButton3(props) {
  return (
    <button onClick={props.onClick}>
        O
      </button>
  );
}

function PatataButton4(props) {
  return (
    <button onClick={props.onClick}>
      O
    </button>
  );
}

function LoginButton4(props) {
  return (
    <button onClick={props.onClick}>
    X
  </button>
  );
}

function LogoutButton4(props) {
  return (
    <button onClick={props.onClick}>
        O
      </button>
  );
}

function PatataButton5(props) {
  return (
    <button onClick={props.onClick}>
      O
    </button>
  );
}

function LoginButton5(props) {
  return (
    <button onClick={props.onClick}>
    X
  </button>
  );
}

function LogoutButton5(props) {
  return (
    <button onClick={props.onClick}>
        O
      </button>
  );
}

function PatataButton6(props) {
  return (
    <button onClick={props.onClick}>
      O
    </button>
  );
}

function LoginButton6(props) {
  return (
    <button onClick={props.onClick}>
    X
  </button>
  );
}

function LogoutButton6(props) {
  return (
    <button onClick={props.onClick}>
        O
      </button>
  );
}

function PatataButton7(props) {
  return (
    <button onClick={props.onClick}>
      O
    </button>
  );
}

function LoginButton7(props) {
  return (
    <button onClick={props.onClick}>
    X
  </button>
  );
}

function LogoutButton7(props) {
  return (
    <button onClick={props.onClick}>
        O
      </button>
  );
}

function PatataButton8(props) {
  return (
    <button onClick={props.onClick}>
      O
    </button>
  );
}

function LoginButton8(props) {
  return (
    <button onClick={props.onClick}>
    X
  </button>
  );
}

function LogoutButton8(props) {
  return (
    <button onClick={props.onClick}>
        O
      </button>
  );
}

function PatataButton9(props) {
  return (
    <button onClick={props.onClick}>
      O
    </button>
  );
}

function LoginButton9(props) {
  return (
    <button onClick={props.onClick}>
    X
  </button>
  );
}

function LogoutButton9(props) {
  return (
    <button onClick={props.onClick}>
        O
      </button>
  );
}

export default App;
