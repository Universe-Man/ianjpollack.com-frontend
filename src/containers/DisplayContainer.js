import React from 'react';
import '../assets/DisplayContainer.css';
import homeImage from '../images/ian_tie_center_whitebg.jpg';
import otherImage from '../images/ian_tie_left_whitebg.jpg';

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
            <h2 id="aboutText1">Here are some <del>interesting</del> facts about Ian:</h2>
            <p id="aboutTextItem1">Performs improv and standup comedy.</p>
            <p id="aboutTextItem2">Writer and Voice-Actor</p>
            <p id="aboutTextItem3">Deals Blackjack and Craps.</p>
            <p id="aboutTextItem4">Plays the ukulele well enough to say he plays the ukulele.</p>
            <p id="aboutTextItem5">Great at <del>playing</del> watching baseball.</p>
            <p id="aboutTextItem6">Likes boardgames not named "Clue".</p>
            <p id="aboutTextItem7">Can solve a Rubix Cube way slower than the guys on YouTube.</p>
            <p id="aboutTextItem8">Built this very website with his own two hands.</p>
            <img src={otherImage} alt="Ian tie left" width="1200" height="800" ></img>
          </div>
        ) : (null)}
        {(this.props.state.renderContact === true) ? (
          <div id="contactPage">
            <img src={otherImage} alt="Ian tie left" width="1200" height="800" ></img>
          </div>
        ) : (null)}
      </React.Fragment>
    )
  }
}

export default DisplayContainer;
