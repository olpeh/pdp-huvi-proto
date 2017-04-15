import React from 'react';
import './ContactPage.scss';
import Footer from '../components/Footer';
import ChatBox from '../components/ChatBox';

const ChatPage = () => (
  <div className="ChatPage">
    <ChatBox />
    <Footer />
  </div>
);

export default ChatPage;
