import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      redirect: false
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
        <Button
          className="btn-secondary"
          color="danger"
          onClick={this.toggle}
          value="+"
        >
          Ajouter{this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          fade={false}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Ajouter nouveau utilisateur
          </ModalHeader>
          <ModalBody>
            <div className="add-card">
              <p className="card-title-add">Ajouter contact</p>
              <p>Nom</p>
              <input
                name="nom"
                type="text"
                placeholder="Nom..."
                onChange={this.props.handleChange}
                value={this.props.contact.nom}
              />
              <p>Prenom</p>
              <input
                name="prenom"
                type="text"
                placeholder="Prenom..."
                onChange={this.props.handleChange}
                value={this.props.contact.prenom}
              />
              <p>Telephone</p>
              <input
                name="telephone"
                type="text"
                placeholder="telephone..."
                onChange={this.props.handleChange}
                value={this.props.contact.telephone}
              />
              <p>Email</p>{" "}
              <input
                name="email"
                type="text"
                placeholder="Email..."
                onChange={this.props.handleChange}
                value={this.props.contact.email}
              />
              <p>Role</p>
              <select
                name="role"
                onChange={this.props.handleChange}
                value={this.props.contact.role}
              >
                <option value="choisir un role">choisir Le role</option>
                <option value="Admin">Admin</option>
                <option value="GERANT">GERANT</option>
                <option value="magazinier">Magazinier</option>
                <input type="submit" />
              </select>
            </div>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" className="add-btn" onClick={() => this.props.add(this.state.addlist)} >validate</Button>{' '} */}
            <Button
              color="primary"
              className="add-btn"
              onClick={this.props.action}
            >
              valider
            </Button>{" "}
            <Button color="secondary" className="add-btn" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default ModalExample;