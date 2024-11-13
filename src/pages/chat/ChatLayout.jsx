import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFacebookMessenger, FaPlus } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import './chat.css'
const ChatLayout = () => {
    const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good Morning';
    if (hours < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getCurrentTime = () => {
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    return new Date().toLocaleTimeString([], options);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;

    setMessages([...messages, { text: input, sender: 'user', time: getCurrentTime() }]);

    try {
      const response = await axios.post('http://localhost:5000/ask', { question: input });
      const answer = response.data.answer;
      setMessages((prevMessages) => [...prevMessages, { text: answer, sender: 'bot', time: getCurrentTime() }]);
    } catch (error) {
      console.error("Error fetching the answer:", error);
    }

    setInput('');
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setMessages([...messages, { image: imageUrl, sender: 'user', time: getCurrentTime() }]);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    if (isChatOpen) {
      // Send greeting message when the chat opens
      setMessages([
        { text: `${getGreeting()}!`, sender: 'bot', time: getCurrentTime() },
      ]);
    }
  }, [isChatOpen]);
    return (
        <div>
             <div className="chat-wrapper">
        <button className="chat-toggle-button" onClick={toggleChat}>
          <FaFacebookMessenger className="text-white" />
        </button>

        {isChatOpen && (
          <div className="chat-container">
            <div className="chat-header">
              <p>bKash PGW</p>
              <button className="close-chat" onClick={toggleChat}>
                <IoIosArrowDown />
              </button>
            </div>
            <div className="chat-window">
              {messages.map((msg, index) => (
                <div key={index} className={msg.sender}>
                  <div className="message">
                    {msg.text}
                    {msg.image && <img src={msg.image} alt="Uploaded" className="uploaded-image" />}
                    <div className="time">{msg.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="imageUpload"
                onChange={handleImageUpload}
                className='upload-input-section'
              />
              <button
                type="button"
                className="upload-button"
                onClick={() => document.getElementById('imageUpload').click()}
              >
                <FaPlus />
              </button>
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your question..."
                className='input-section'
              />

              <button className='button'>
                <IoMdSend/>
              </button>
            </form>
          </div>
        )}
      </div>
        </div>
    );
};

export default ChatLayout;