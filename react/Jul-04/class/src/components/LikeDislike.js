import { Component } from "react";

class LikeDislike extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      list: []
    }
    // fetch('https://reqres.in/api/users')
    // .then(data => data.json())
    // .then(data => this.setState({list: data.data}));
    

    this.like = this.like.bind(this);
    // this.dislike = this.dislike.bind(this);
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users')
    .then(data => data.json())
    .then(data => this.setState({list: data.data}));
  }

  componentDidUpdate(prev_prop, prev_state, snapshot) {
    console.log(prev_state, this.state);
    console.log(snapshot);
    console.log("component re rendered");
  }

  componentWillUnmount() {
    //This is cleanup of the component. Remove any event listeners if set.
  }

  like() {
    this.setState({counter: this.state.counter + 1});
  }

  dislike = () => {
    this.setState({counter: this.state.counter - 1});
  }

  render() {
    return (
      <>
        <button onClick={this.like} style={{backgroundColor: "gray", border: "2px solid black"}}>👍🏻</button>
        <p>{this.state.counter}</p>
        <button onClick={this.dislike} style={{backgroundColor: "gray", border: "2px solid black"}}>👎🏻</button>
        {this.state.list.map((e, k) => {
          return <h5 key={k}>{e.first_name}</h5>
        })}
      </>
    )
  }
}

export default LikeDislike;