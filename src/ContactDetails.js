import { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import dayjs from 'dayjs'
const contactStyles = {
  maxWidth: "400px",
  margin: "0 auto",
};

class ContactDetails extends Component {
  state = {
    contact: [],
    isLoader: true,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://randomuser.me/api/?login.uuid=${id}&seed=unique`)
      .then((data) =>
        this.setState({ contact: data.data.results[0], isLoader: false })
      )
      .catch((err) => console.log(err));
  }
  render() {
    const { contact, isLoader } = this.state;
    // console.log("after",contact);
    return (
      <>
        {
          <div className="card contact my-2 random" style={contactStyles}>
            {isLoader && (
              <Loader
                visible={isLoader}
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
              />
            )}
            {!isLoader && (
            <>
              <div className="card-body">
                <img src={contact.picture.medium} alt="contact image" />
                <h5 className="card-title">
                  {contact.name.first} {contact.name.last}
                </h5>
                <p className="card-text">{contact.email}</p>
                <p className="card-text">{contact.gender}</p>
                <p className="card-text">Date of Birth: {dayjs(contact.dob.date).format('DD/MM/YYYY')}</p>
              </div>
              <button
                className="btn btn-secondary"
                onClick={() => this.props.history.goBack()}
              >
                Go Back
              </button>
            </>
            )}
          </div>
        }
      </>
    );
  }
}

export default withRouter(ContactDetails);
