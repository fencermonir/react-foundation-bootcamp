import React, { Component } from 'react'
import {Link} from "react-router-dom"

const contactStyles = {
  maxWidth: '400px',
  margin: '0 auto'
}
export default class Contact extends Component {
  render() {
    const { contact } = this.props
    return (
      <div className='card contact my-2 random' style={contactStyles}>
        <div className='card-body'>
          <h5 className='card-title'>
            {contact.first_name} {contact.last_name}
          </h5>
          <p className='card-text'>{contact.email}</p>
          <p className='card-text'>{contact.gender}</p>
          <p className='card-text'>{contact.dob}</p>
        </div>
        <Link to={`contacts/${contact.id}`} className="btn btn-primary">Show More</Link>
      </div>
    )
  }
}
