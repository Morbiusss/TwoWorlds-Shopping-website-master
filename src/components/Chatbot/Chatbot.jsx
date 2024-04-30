import React, { useState } from 'react';


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat Icon */}
      <button
        className="bg-black text-white rounded-full p-3 shadow-md hover:bg-gray-900 focus:outline-none"
        onClick={toggleChat}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
</svg>

      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-32 right-0 z-50 w-80 bg-white shadow-md rounded-lg">
          {/* Chat Header */}
          <div className=" bg-black text-white p-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">Assistant</h3>
            <button
              className="float-right"
              onClick={toggleChat}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          {/* Chat Content */}
          <div className="p-4">
            {/* Chat Messages */}
            <div className="flex flex-col space-y-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === 'user' ? 'items-end justify-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`${
                      message.sender === 'user' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
                    } p-2 rounded-lg max-w-xs`}
                  >
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Chat Input */}
            <div className="mt-4 flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                className="bg-black text-white rounded-full p-2 ml-2 hover:bg-gray-900 focus:outline-none"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
