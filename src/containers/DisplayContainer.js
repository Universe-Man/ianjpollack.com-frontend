import React from 'react';
import '../assets/DisplayContainer.css';
import homeImage from '../images/ian_tie_center_whitebg.jpg';

class DisplayContainer extends React.Component {

  render() {
    console.log('state in the display', this.props.state);
    return (
      <React.Fragment>
        {(this.props.state.renderHome === true) ? (
          <div id="homePage">
            <h2 id="homeText1">Ian Pollack</h2>
            <h2 id="homeText2">thinks you're cool</h2>
            <img src={homeImage} alt="Ian tie center" width="1200" height="800" ></img>
          </div>
        ) : (null)}
        {(this.props.state.renderAbout === true) ? (
          <div id="aboutPage">
            renderAbout
          </div>
        ) : (null)}
        {(this.props.state.renderContact === true) ? (
          <div id="contactPage">
            renderContact
          </div>
        ) : (null)}
      </React.Fragment>
    )
  }
}

export default DisplayContainer;
