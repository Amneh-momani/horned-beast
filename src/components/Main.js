import React from "react";
import Horned from "../assest/horned.json";
import HornedBeasts from "./HornedBeasts";

class Main extends React.Component {
  render() {
    return (
      <div>
        {Horned.map((imag) => {
          return (
            <HornedBeasts
              title={imag.title}
              description={imag.description}
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
