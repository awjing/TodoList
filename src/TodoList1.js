// 初版Todolist

import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios'

class TodoList extends Component {

  constructor (props) {
    super(props)
    // 当组件的state或者props放生改变的时候，render函数就会重新被执行
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  render () {
    return (
      <Fragment>
        <div>
          {/* 下面是一个input框 */}
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}  
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  componentDidMount () {
    axios.get('/api/todolist')
      .then(() => {})
      .catch(() => {})
  }

  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  handleInputChange (e) {
    const value = e.target.value
    // es6 return简写
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick () {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete (index) {
    // immutable
    // state 不允许我们做任何的改变
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }
}

export default TodoList