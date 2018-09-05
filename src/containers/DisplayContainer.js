import React from 'react';

class DisplayContainer extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render() {
    console.log('state in the display', this.props.state);
    return (
      <React.Fragment>
        {(this.props.state.renderHome === true) ? (
          <div>
            renderHome
          </div>
        ) : (null)}
        {(this.props.state.renderAbout === true) ? (
          <div>
            renderAbout
          </div>
        ) : (null)}
        {(this.props.state.renderContact === true) ? (
          <div>
            renderContact
          </div>
        ) : (null)}
      </React.Fragment>
    )
  }
}

export default DisplayContainer;
