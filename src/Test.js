import React, { Component } from 'react';

class test extends Component {
  // 当父组件的render函数被运行时，他的子组件的render函数也会被重新运行一次
  render () {
    return <div>{this.props.content}</div>
  }
}

export default test