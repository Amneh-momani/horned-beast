import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
    };
  }

  clickedImg = () => {
    this.setState({
      click: this.state.click + 1,
    });
  };

  cardView = () => {
    this.props.modalUpdateVisible();

    this.props.modalData(
      this.props.title,
      this.props.description,
      this.props.image_url,
      this.props.click
    );
    this.setState({
      click: this.state.click + 1,
    });
  };
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }} key={this.props.keyword}>
          <Card.Img
            variant="top"
            src={this.props.image_url}
            alt={this.props.horns}
            title={this.props.keyword}
            onClick={this.cardView}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>Favorited :{this.state.click} 😍😍</Card.Text>
            <Button onClick={this.clickedImg} variant="primary">
              give {this.props.keyword} Like
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default HornedBeasts;
