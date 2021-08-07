import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfFavorites: 0,
    };
  }

  viewBeast = () => {
    this.props.updatingShow();
    this.props.dataModeling(
      this.props.title,
      this.props.image_url,
      this.props.description,
      this.props.horn,
      this.props.keyword,
      this.state.numberOfFavorites
    );
  };
  favBeast = () => {
    this.setState({
      numberOfFavorites: this.state.numberOfFavorites + 1,
    });
  };
  render() {
    return (
      <div>
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            onClick={() => {
              this.viewBeast();
            }}
            src={this.props.image_url}
            alt={this.props.keyword}
          />
          <Card.Body>
            <Card.Title> Title: {this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
              Favorite beasts: {this.state.numberOfFavorites} 😍😍
            </Card.Text>
            <Button variant="primary" onClick={this.favBeast}>
              {" "}
              Give Like
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default HornedBeasts;
