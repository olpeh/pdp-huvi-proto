import React from 'react';
import './ContactPage.scss';
import { Link } from 'react-router-dom';

const ContactPage = () => (
  <div className="ContactPage">
    <div className="ContactPage-link-wrapper">
      <Link className="ContactPage-link" to="chat/lindstrom">
        Chat with Lindström
        <div className="ContactPage-icon chat-icon" />
      </Link>
      <Link className="ContactPage-link" to="chat/manager">
        Chat with Alepa manager
        <div className="ContactPage-icon chat-icon-alepa" />
      </Link>
      <a className="ContactPage-link" href="tel:12345678">
        Call Lindström customer service
        <div className="ContactPage-icon call-icon" />
      </a>
    </div>
  </div>
);

export default ContactPage;
