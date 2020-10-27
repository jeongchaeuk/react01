import React, { Component } from 'react'
// class 
class Page1 extends Component {

    constructor(props) {
        super(props)
        //변수 설정
        this.state = {
            name: '홍길동',
            age: 34
        }
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch('http://127.0.0.1:8080/rest/test1.json?username=고길동&userage=45', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                this.setState({ name: data.username, age: data.userage })
            });
    }

    render() {
        console.log('render')
        return (
            <div>
                <p>Page1</p>
                <p>이름 : {this.state.name}, 나이 : {this.state.age}</p>
            </div>
        );
    }
}

export default Page1;