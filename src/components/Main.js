import React from "react";
import HornedBeasts from "./HornedBeasts";
import Horned from "./data.json";

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
              click={imag.click}
              modalUpdateVisible={this.props.modalUpdateVisible}
              modalData={this.props.modalData}

              select={this.props.selectHorn.filter((img) => {
                return(
                  <select.title
                title={img.title}
                description={img.description}
                image_url={img.image_url}
                horns={img.horns}
                keyword={img.keyword}
                modalVisible={this.props.modalVisible}
                modalData={this.props.modalData}
                />
                );
              })
            }

            />
          );
        })}
      </div>
    );
  }
}

export default Main;
