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
      renderVideos: false,
      renderPhotos: false,
      renderCode: false,
    }
  }

  render() {
    return(
      <div id="GodContainer">
        <Header />
        <DisplayContainer />
      </div>
    )
  }

}

export default GodContainer;
