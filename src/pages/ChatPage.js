import React from 'react';
import './ChatPage.scss'
import ChatBox from '../components/ChatBox';

const ChatPage = ({pathname}) => {
  let title = '';
  let owner = '';
  switch(pathname) {
    case '/chat/manager':
      owner = 'Alepa';
      title = 'Chat with Alepa manager';
      break;

    default:
    case '/chat/lindstrom':
      owner = 'Lindström';
      title = 'Chat with Lindström';
      break;
  }
  return (
    <div className="ChatPage" title={title}>
      <ChatBox title={title} owner={owner}/>
    </div>
  );
}

export default ChatPage;
