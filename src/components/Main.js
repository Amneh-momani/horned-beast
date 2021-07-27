import React from "react";
import Horned from "../assest/horned.json";
import HornedBeasts from "./HornedBeasts";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfclick: 0
    };
  }
  clicking = () => {
    this.setState({
      numberOfclick: this.state.numberOfclick + 1
    });
    this.props.getclickedImg({
      data: 'one'
    });
  }
  render() {
    return (
      <div>
        {Horned.map((imag) => {
          return (
            <HornedBeasts
              title={imag.title}
              description={imag.description} {this.state.numberOfclick}
              image_url={imag.image_url}
              horns={imag.horns}
              keyword={imag.keyword}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
