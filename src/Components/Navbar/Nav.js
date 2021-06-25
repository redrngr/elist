import React from 'react';
import LogInOut from './LogInOut';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };
  }

  handleClick = () => {
    const currentState = this.state.isToggle;
    this.setState(state => ({ isToggle: !currentState }));
  }

  render() {
    return (
      <LogInOut
        currentUser={this.props.currentUser}
        state={this.state}
        handleClick={this.handleClick.bind(this)}
      />
    )
  }
}

export default Nav;