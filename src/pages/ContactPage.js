import React from 'react';
import './ContactPage.scss';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const ContactPage = () => (
  <div className="ContactPage">
    <div className="ContactPage-link-wrapper">
      <a className="ContactPage-link" href="tel:12345678">
        Call Lindström customer service
      </a>
      <a className="ContactPage-link" href="mailto:contact@lindstrom.fi">
        Email Lindström customer service
      </a>
      <Link className="ContactPage-link" to="chat">
        Chat with Lindström customer service
      </Link>
    </div>
    <Footer />
  </div>
);

export default ContactPage;
