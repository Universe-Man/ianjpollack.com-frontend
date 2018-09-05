import React from 'react';
import Header from '../components/Header.js';
import DisplayContainer from './DisplayContainer.js';

class GodContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      renderHome: true,
      renderAbout: false,
      renderContact: false,
      headerActiveItem: 'home',
    }
  }

  handlePageChange = (pageName) => {
    if (pageName === 'home') {
      this.setState({
        renderHome: true,
        renderAbout: false,
        renderContact: false,
      })
    } else if (pageName === 'about') {
      this.setState({
        renderHome: false,
        renderAbout: true,
        renderContact: false,
      })
    } else if (pageName === 'contact') {
      this.setState({
        renderHome: false,
        renderAbout: false,
        renderContact: true,
      })
    }
  }

  handleHeaderClick = (event, name) => {
    this.setState({
      headerActiveItem: name.name
    })
    this.handlePageChange(name.name)
  }

  render() {
    return(
      <div id="GodContainer">
        <Header activeItem={this.state.headerActiveItem} handleHeaderClick={this.handleHeaderClick} />
        <DisplayContainer state={this.state} />
      </div>
    )
  }

}

export default GodContainer;
