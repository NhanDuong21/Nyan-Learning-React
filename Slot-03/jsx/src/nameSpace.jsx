import * as React from "react";

class First extends React.Component {
  render() {
    return <p>Frist...</p>;
  }
}

class Second extends React.Component {
  render() {
    return <p>Second...</p>;
  }
}
class MyCompoment extends React.Component {
  render() {
    return <section>{this.props.children}</section>;
  }
}

MyCompoment.First = First;
MyCompoment.Second = Second;

export default MyCompoment;
export { First, Second };
