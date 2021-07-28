import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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

    [this.show, this.setShow] = useState(true);

    handleClose = () => this.setShow(false);
    handleShow = () => this.setShow(true);
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
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description} {this.state.click}
            </Card.Text>
            <Button onClick={this.clickedImg} variant="primary">
              👋 Give {this.props.keyword} a click
            </Button>
          </Card.Body>
        </Card>

        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img
              variant="top"
              src={this.props.image_url}
              alt={this.props.horns}
              title={this.props.keyword}
            />
            {this.props.description}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default HornedBeasts;
