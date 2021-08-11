import { Component } from "react";
import { withRouter } from "react-router-dom";

import Loader from "react-loader-spinner";
const contactStyles = {
  maxWidth: "400px",
  margin: "0 auto",
};

class ContactDetails extends Component {
  state = {
    contact: {},
    isLoader: true
  };
  findContact() {
    const id = this.props.match.params.id;
    const contact = this.props.contacts.find(
      (contact) => contact.id === Number(id)
    );
    this.setState({ contact: contact });
    // contact ? this.setState({isLoader: false}) : true;
    if( contact ) {
        console.log('contact found')
        this.setState({isLoader: false})
    } else {
        this.setState({isLoader: true})
    }
  }
  componentDidMount() {
    this.findContact();
  }
  render() {
    const { contact, isLoader } = this.state;
    console.log('loader0', isLoader)
    return (
      <>
        <Loader
        visible={isLoader}
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
        <div className="card contact my-2 random" style={contactStyles}>
          <div className="card-body">
            <img src={contact.picture} alt="contact image" />
            <h5 className="card-title">
              {contact.first_name} {contact.last_name}
            </h5>
            <p className="card-text">{contact.email}</p>
            <p className="card-text">{contact.gender}</p>
            <p className="card-text">{contact.dob}</p>
          </div>
          <button
            className="btn btn-secondary"
            onClick={() => this.props.history.goBack()}
          >
            Go Back
          </button>
        </div>
      </>
    );
  }
}

export default withRouter(ContactDetails);
