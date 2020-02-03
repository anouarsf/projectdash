import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Table } from "react-bootstrap";
import "./Login.css";
export default function ContactCart({ contact, deleteContact, getPerson }) {
  console.log("contact.email", contact.email);
  return (
    <div className="contact-card">
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Table striped hover>
                <thead>
                  <tr>
                    <th> {contact.nom} </th>
                    <th> {contact.prenom} </th>
                    <th> {contact.email} </th>
                    <th> {contact.telephone} </th>
                    <th> {contact.role} </th>
                    <th> {contact.action} </th>
                    <th>
                      <Link to="/edit-contact">
                        <i
                          class="fa fa-pencil-square-o"
                          aria-hidden="true"
                          onClick={() => getPerson(contact)}
                        ></i>
                      </Link>
                      <Link>
                        <i
                          className="fa fa-trash-o"
                          aria-hidden="true"
                          style={{ minWidth: "223px", maxWidth: "180px" }}
                          onClick={() => deleteContact(contact._id)}
                        ></i>
                      </Link>
                    </th>
                  </tr>
                </thead>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}