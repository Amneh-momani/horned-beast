import React from "react";
import Modal from "react-bootstrap/Modal";
// import Modal from "react-bootstrap/ModalHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
  render() {
    return (
      <div>
        {/* <Modal
          show={this.props.visible}
          onClickAway={this.props.modalUpdateVisible}
          width="700"
          height="600"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={this.props.image_url}
              onClick={() => this.props.cardView()}
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
              <Card.Text>Favorited : {this.props.count}</Card.Text>

              <Button variant="primary" onClick={() => this.props.modalUpdateVisible()}>
                close
              </Button>
            </Card.Body>
          </Card>
        </Modal> */}

        <Modal
          show={this.props.visible}
          onHide={this.props.modalUpdateVisible}
          animation={false}
        >
          <Modal.Header closeButton>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={this.props.image_url} />
            </Card>

            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.description}</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={this.props.visible}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
