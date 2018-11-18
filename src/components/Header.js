import React from 'react';
import { Menu, Button } from 'semantic-ui-react'
import '../assets/Header.css';

const Header = (props) => {
  let activeItem = props.activeItem
    return (
      <Menu inverted id="Header" size="huge" color="black" fluid widths={5}>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={props.handleHeaderClick} />
        <Menu.Item name='about' active={activeItem === 'about'} onClick={props.handleHeaderClick} />
        <Menu.Item name='code' active={activeItem === 'code'} onClick={props.handleHeaderClick} />
        <Menu.Item name='comedy' active={activeItem === 'comedy'} onClick={props.handleHeaderClick} />
        <Menu.Item name='contact' active={activeItem === 'contact'} onClick={props.handleHeaderClick} />
      </Menu>
    )
}

export default Header;
