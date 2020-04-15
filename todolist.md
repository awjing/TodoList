  生命周期函数：指在某一时刻组件会自动化调用执行
 
 // 组件即将被挂载到页面之前自动执行
  componentWillMount () {
    console.log('componentWillMount')
  }

  // 组件被挂载到页面之后自动执行
  componentDidMount () {
    console.log('componentDidMount')
  }

  // 组件被更新之前自动执行
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true;
  }

  // 组件被更新之前自动执行，但是在shouldComponentUpdate之后执行
  // 如果shouldComponentUpdate返回true则会执行
  // 如果shouldComponentUpdate返回false则不会执行
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }

  // 组件更新完成之后自动执行
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  // 当一个组件从父组件接受参数
  // 如果这个组件第一次存在于父组件中，不会执行
  // 如果这个组件之前已经存在于父组件中，才会执行
  componentWillReceiveProps () {
    console.log('child componentWillReceiveProps')
  }

  // 当这个组件即将从页面中被剔除的时候执行
  componentWillUnmount () {
    console.log('child componentWillUnmount')
  }