import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  // 提高组件的性能，避免无谓组件的渲染
  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  render () {
    const { content } = this.props
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    )
  }

  handleClick () {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

// 设置接收类型
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

export default TodoItem
