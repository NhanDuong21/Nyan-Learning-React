import logo from "./logo.svg";
import "./App.css";
import React from "react";
import MySection from "./MySection";
import Mybutton from "./Mybutton";
import MyCompoment from "./nameSpace";

function App() {
  const name = "Nyan";
  const isLogin = true;
  const firstName = ["Duong", "Vo", "Truong", "Tran"];
  const enabled = true;
  const text = "A button";
  const placeholder = "input value...";
  const size = 50;
  function MyComponent() {
    return <h1>Hello Nyan Depzai</h1>;
  }
  class Disabled extends React.Component {
    render() {
      return (
        <section>
          <button disabled={!enabled}>
            {text}
            {this.props.children}
          </button>
          <input
            placeholder={placeholder}
            size={size}
            defaultValue={this.props.children}
          ></input>
        </section>
      );
    }
  }

  return (
    <div>
      Welcome <strong>{name}</strong> to JSX
      <p>2 + 2 = {2 + 2}</p>
      <p>{isLogin ? "Welcome" : "Pleas login"}</p>
      <ul>
        {firstName.map((firstNam, index) => (
          <li key={index}>{firstNam}</li>
        ))}
      </ul>
      <button title="My button" foo="bar">
        Click
      </button>
      <section>
        <header>
          <h1>A Header</h1>
        </header>
        <nav>
          <a href="#">Nav Item</a>
        </nav>
        <main>
          <p>The main content</p>
        </main>
        <footer>
          <small>&coppy; FTP University</small>
        </footer>
      </section>
      <MySection>
        <Mybutton>My button app</Mybutton>
      </MySection>
      <MyCompoment>
        <MyCompoment.First />
        <MyCompoment.Second />
      </MyCompoment>
      <Disabled></Disabled>
    </div>
  );
}

export default App;
