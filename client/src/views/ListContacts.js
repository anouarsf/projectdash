import React, { Component } from "react";
import ModalExample from "./modal";
import { connect } from "react-redux";
import {
  getContacts,
  deleteContact,
  postContact,
  putContact
} from "../../src/js/actions/actions";
import ContactCard from "./contactCard";
import { Grid, Row, Col, Table } from "react-bootstrap";
class App extends Component {
  state = {
    nom: "",
    prenom: "",
    Telephone: "",
    email: "",
    role: "",
    id: "",
    edit: false
  };
  getPerson = contact => {
    this.setState({
      nom: contact.nom,
      prenom: contact.prenom,
      telephone: contact.telephone,
      email: contact.email,
      role: contact.role,
      id: contact._id,
      edit: true
    });
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  reset = () => {
    this.setState({
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      role: ""
    });
  };
  addContact = () => {
    this.props.postContact(this.state);
    // this.reset();
  };
  componentDidMount = () => {
    this.props.getContacts();
  };
  render() {
    return (
      <div className="contact-card">
        <div className="content">
          <Grid fluid>
            <Row>
              <Col md={12}>
                <Table striped hover>
                  <thead>
                    <tr>
                      <th> nom </th>
                      <th> Prenom </th>
                      <th> email </th>
                      <th> Telephone </th>
                      <th> role </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                </Table>
              </Col>
            </Row>
          </Grid>
        </div>
        {this.props.contacts.map(el => (
          <ContactCard
            deleteContact={this.props.deleteContact}
            getPerson={this.getPerson}
            contact={el}
          />
        ))}
        <Grid fluid>
          <Row>
            <Col md={12}>
              <ModalExample
                handleChange={this.handleChange}
                contact={this.state}
                action={this.addContact}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
const MapStateToProps = state => ({
  contacts: state.Reducer.contacts
});
export default connect(MapStateToProps, {
  getContacts,
  deleteContact,
  putContact,
  postContact
})(App);