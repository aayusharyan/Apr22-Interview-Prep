import { Component } from 'react';

class Comp1 extends Component {

  // constructor(props) {
  //   super();
  //   // console.log(props);
  //   this.text = props.text;
  // }

  btnClick() {
    alert("Button clicked");
  }

  render() {
    return (
      <>
        <h1>{this.props.text}</h1>
        <button onClick={this.btnClick}>Click me</button>
      </>
    )
  }
}

export default Comp1;