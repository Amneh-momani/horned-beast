import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export class Hornsform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectHorn: ''
    };
  }

  hornsNum = (event) => {
    let hornsFilter = this.props.Horned;
    if (event.target.value) {
      hornsFilter = this.props.Horned.filter((element) => {
        return ((element.horns) === parseInt(event.target.value));
      });
    }
    this.props.filterHornBeasts(hornsFilter);
  };
  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Select
              aria-label="Default select example"
              onChange={(event) => this.hornsNum(event)}
            >
              <option>Select The Horns Number</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">hundred</option>
              <option value="4">All</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Hornsform;
