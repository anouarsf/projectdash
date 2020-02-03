import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  Label,
  FormGroup,
  Input,
  ControlLabel,
  ModalFooter
} from "reactstrap";
import "./Company.css";
class Mo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div className="modal-container">
        <a className="btn-ligth" color="light" onClick={this.toggle} value="+">
          <i class="far fa-user"></i>
          {this.props.buttonLabel}
        </a>
        <Modal
          isOpen={this.state.modal}
          fade={false}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            {" "}
            <a class="text-danger"> Connexion </a>
          </ModalHeader>

          <Modal showOverlay={false}></Modal>
          <ModalFooter>
            <a href="/register" class="text-danger">
              {" "}
              Espace Utilsateur{" "}
            </a>

            <a href="/login" class="text-success" className="AD">
              {" "}
              Acceder à Dashtok{" "}
            </a>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default Mo;
