import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
    };
  }

  // clickedImg = () => {
  //   this.setState({
  //     click: this.state.click + 1,
  //   });
  // };

  cardView = () => {
    this.props.modalData(
      this.props.image_url,
      this.props.description,
      this.props.visible
    );
    this.props.modalUpdateVisible;
    this.setState({
      click: this.state.click + 1,
    });
  };

  selectHorn = (event) => {
    this.props.image_url;
      this.props.description;
      this.props.visible;
    this.setState({
      newColor: event.target.name.value
    });
  }
  render() {
    return (
      <div>
        <Form.Select aria-label="Choose Horns images">
          <option>Select Number if horns</option>
          <option value={(event => this.selectHorn(event))}  name="hornNum">One</option>
        </Form.Select>
        <Card style={{ width: "18rem" }} key={this.props.keyword}>
          <Card.Img
            variant="top"
            src={this.props.image_url}
            alt={this.props.horns}
            title={this.props.keyword}
            onClick={() => this.props.cardView}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>Favorited :{this.state.click}</Card.Text>
            <Button onClick={this.cardView} variant="primary">
              give {this.props.keyword} Like
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default HornedBeasts;
