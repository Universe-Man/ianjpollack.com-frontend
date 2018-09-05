import React from 'react';

class DisplayContainer extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render() {
    console.log('state in the display', this.props.state);
    return (
      <div>
        Yo! DisplayContainer
      </div>
    )
  }
}

export default DisplayContainer;
