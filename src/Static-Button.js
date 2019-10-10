import React from 'react';

class StaticButton extends React.Component {

        state = {
          appClass: "App"
        };

        render() {

    return (
    <button onClick={this.handleClick}>  
            tune-out static
    </button>
    );
  }

  handleClick = () => {
          console.log("clicked");
          this.setState({appClass: "App static-off"});
          console.log(this.state.appClass);
  }
  componentDidMount() {
        this.handleClick();
      }
}

export default StaticButton;
