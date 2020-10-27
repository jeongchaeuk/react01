import React, { Component } from 'react'
// class 
class Page2 extends Component {
  constructor(props) {
    super(props)
    //변수 설정
    this.state = {
      name: '',
      age: 0
    }
    console.log('constructor');
  }

  // sync : async + await
  async componentDidMount() {
    const requestOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: "-라마바", age: 111 })
    };

    const response = await fetch('http://127.0.0.1:8080/rest/test1.json', requestOption);
    const data = await response.json();
    this.setState({name:data.username, age:data.userage});
    console.log('fetch success');
  }

  // async
  componentDidMount() {
    console.log('componentDidMount');
    fetch('http://127.0.0.1:8080/rest/test1.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: "-라마바", age: 111 })
    }).then(res => res.json())
      .then(data => {
        this.setState({ name: data.username, age: data.userage })
      });
  }

  render() {
    console.log('render')
    return (
      <div>
        <p>Page2</p>
        <p>이름 : {this.state.name}, 나이 : {this.state.age}</p>
      </div>
    );
  }
}

export default Page2;