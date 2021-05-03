import Drawer from 'react-drag-drawer'

..

toggle = () => {
  let { toggle } = this.state

  this.setState({ toggle: !toggle })
}

logState = () => {
  console.log(`Drawer now ${this.state.open ? 'open' : 'closed'}`)
}

render () {
  const { open } = this.state

  return (
    <Drawer
      open={open}
      onRequestClose={this.toggle}
    >
      <div>Hey Im inside the drawer!</div>
    </Drawer>
  )
}