import React from "react";
import HornedBeasts from "./HornedBeasts";
import Hornsform from "./Hornsform";

// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Horned from "./data.json";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectHorn: 1,
      hornArrFilter: this.props.Horned,
    };
  }

  filterHornBeasts = (filterBeasts) => {
    this.setState({
      hornArrFilter: filterBeasts
    });
  };
  render() {
    return (
      <div>
        <Hornsform
          title={this.state.title}
          description={this.state.description}
          image_url={this.state.image_url}
          horns={this.state.horns}
          keyword={this.state.keyword}
          modalVisible={this.props.modalVisible}
          modalData={this.props.modalData}
          filterHornBeasts={this.props.filterHornBeasts}
          data={Horned}
        />
        {Horned.map((imag) => {
          return (
            <Col xs={12} md={8}>
              <HornedBeasts
                title={imag.title}
                description={imag.description}
                image_url={imag.image_url}
                horns={imag.horns}
                keyword={imag.keyword}
                click={imag.click}
                modalUpdateVisible={this.props.modalUpdateVisible}
                modalData={this.props.modalData}
              />
            </Col>
          );
        })}
      </div>
    );
  }
}

export default Main;
