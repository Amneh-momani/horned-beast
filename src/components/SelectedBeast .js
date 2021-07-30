import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.visible} onHide={this.props.modalUpdateVisible}>
          <Card.Body>
            <Card.Img
              variant="top"
              src={this.props.image_url}
              onClick={this.props.cardView}
            />
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>

            <Button variant="primary" onClick={this.props.modalUpdateVisible}>
              close
            </Button>
          </Card.Body>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
