import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.shown}
        width='800'
        height='800'
        effect="fadeInUp"
        onClickAway={this.props.updatingShow}
      >
        
        <Card.Body>
          <Card.Img
            variant="top"
            src={this.props.image_url}
            onClick={this.props.updatingShow}
            alt={this.props.keyword}
            title={this.props.title}
          />
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Title>Favorite Beast : {this.props.favoriteBeast}</Card.Title>

          <Button variant="primary" onClick={this.props.updatingShow}>
            close
          </Button>
        </Card.Body>
      </Modal>
    );
  }
}

export default SelectedBeast;
