import React from 'react';
import { Menu, Button } from 'semantic-ui-react'
import '../assets/Header.css';



class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (event, name) => {
    this.setState({
      activeItem: name.name
    })
  }

  render() {
    const activeItem = this.state.activeItem
    return (
      <Menu inverted id="Header" size="huge" color="white" fluid widths={3}>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='contact'
                active={activeItem === 'contact'}
                onClick={this.handleItemClick}
              />
      </Menu>
    )
  }
}

export default Header;
