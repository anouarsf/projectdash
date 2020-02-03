import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux'
import {putContact}  from '../js/actions/actions'
import "./list.css"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class EditModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      role: "",
    }
  }


  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

 

  render() {
    return (
      <div>
        <button className="btn-edit" onClick={this.openModal}>Edit</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        
          <input type="text" class="form-control" placeholder="nom" id="nom" name="" onChange={(e) => this.setState({ nom: e.target.value })} />
          <input type="text" class="form-control" placeholder="prenom" id="prenom" name="" onChange={(e) => this.setState({ prenom: e.target.value })} />
          <input type="text" class="form-control" placeholder="email" id="email" name="" onChange={(e) => this.setState({ email: e.target.value })} />
          <input type="text" class="form-control" placeholder="telephone" id="telephone" name="" onChange={(e) => this.setState({ telephone: e.target.value })} />
          <input type="text" class="form-control" placeholder="role" id="role" name="" onChange={(e) => this.setState({ role: e.target.value })} />


          <button className="btn btn-outline-dark" onClick={this.closeModal}>close</button>
          <button className="btn" onClick={() => this.props.putContact({ id: this.props.index, task: [this.state.nom , this.state.prenom , this.state.email , this.state.telephone , this.state.role]  })}>Update</button>

        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = (dispatch) => ({
  putContact : (payload) => dispatch(putContact(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditModal)