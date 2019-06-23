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
      // renderCode: false,
      // renderComedy: false,
      headerActiveItem: 'home',
    }
  }

  handlePageChange = (pageName) => {
    if (pageName === 'home') {
      this.setState({
        renderHome: true,
        renderAbout: false,
        renderContact: false,
        // renderCode: false,
        // renderComedy: false,
      })
    } else if (pageName === 'about') {
      this.setState({
        renderHome: false,
        renderAbout: true,
        renderContact: false,
        // renderCode: false,
        // renderComedy: false,
      })
    } else if (pageName === 'contact') {
      this.setState({
        renderHome: false,
        renderAbout: false,
        renderContact: true,
        // renderCode: false,
        // renderComedy: false,
      })
    } // else if (pageName === 'code') {
    //   this.setState({
    //     renderHome: false,
    //     renderAbout: false,
    //     renderContact: false,
    //     // renderCode: true,
    //     // renderComedy: false,
    //   })
    // } else if (pageName === 'comedy') {
    //   this.setState({
    //     renderHome: false,
    //     renderAbout: false,
    //     renderContact: false,
    //     // renderCode: false,
    //     // renderComedy: true,
    //   })
    // }
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
