import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, User, Bot, Phone, Mail, MapPin } from 'lucide-react'
import '../styles/components/Chatbot.css'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to K.H. STR Design. I'm here to help you with structural engineering solutions. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
    // Add a slight delay to ensure smooth transition when messages change
    const timer = setTimeout(() => {
      scrollToBottom()
    }, 300)
    return () => clearTimeout(timer)
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Predefined responses for common queries
  const responses = {
    greeting: [
      "Hello! How can I help you with your structural engineering needs?",
      "Hi there! Welcome to K.H. STR Design. What can I do for you today?",
      "Greetings! I'm here to assist you with structural design solutions."
    ],
    services: [
      "We offer comprehensive structural engineering services including:\n\n• Primary Steel Structure Design\n• Miscellaneous Steel Structure Design\n• 3D Modeling & Detailing\n• Structural Analysis\n• Site Supervision\n• Structural Audit\n\nWhich service interests you most?"
    ],
    pricing: [
      "Our pricing depends on project complexity and requirements. For accurate pricing, I'd recommend speaking with our team directly. Would you like me to connect you with our experts?"
    ],
    contact: [
      "You can reach us at:\n\n📞 Phone: +91 9991762005\n📧 Email: krishan@khstrdesign.com\n📍 Location: Palwal, Haryana\n\nWould you like to schedule a consultation?"
    ],
    experience: [
      "K.H. STR Design is a dynamic startup with experienced structural engineers. We combine cutting-edge technology with industry best practices to deliver innovative and safe steel structure solutions."
    ],
    timeline: [
      "Project timelines vary based on complexity and scope. Typically:\n\n• Small projects: 1-2 weeks\n• Medium projects: 2-4 weeks\n• Large projects: 4-8 weeks\n\nFor accurate timeline estimation, we'd need to review your specific requirements."
    ]
  }

  const getQuickReplies = () => [
    "Our Services",
    "Get Pricing",
    "Contact Info",
    "Project Timeline",
    "Schedule Consultation"
  ]

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return responses.greeting[Math.floor(Math.random() * responses.greeting.length)]
    }
    
    if (message.includes('service') || message.includes('what do you do') || message.includes('offerings')) {
      return responses.services[0]
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('pricing') || message.includes('quote')) {
      return responses.pricing[0]
    }
    
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach')) {
      return responses.contact[0]
    }
    
    if (message.includes('experience') || message.includes('about') || message.includes('company')) {
      return responses.experience[0]
    }
    
    if (message.includes('time') || message.includes('duration') || message.includes('how long')) {
      return responses.timeline[0]
    }

    if (message.includes('consultation') || message.includes('meeting') || message.includes('schedule')) {
      return "I'd be happy to help you schedule a consultation! Please provide your preferred date and time, or you can call us directly at +91 9991762005 to book an appointment."
    }

    // Default response
    return "I understand you're looking for information about structural engineering services. For specific queries, please contact our team at +91 9991762005 or krishan@khstrdesign.com. Is there anything specific about our services you'd like to know?"
  }

  const handleSendMessage = async (messageText = null) => {
    const textToSend = messageText || inputMessage.trim()
    if (!textToSend) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(textToSend),
        sender: 'bot',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleQuickReply = (reply) => {
    handleSendMessage(reply)
  }

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && (
          <div className="chatbot-badge">
            <span>Chat with us!</span>
          </div>
        )}
      </div>

      {/* Chatbot Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <Bot size={20} />
            </div>
            <div className="chatbot-header-text">
              <h3>K.H. STR Design Assistant</h3>
              <span className="online-status">
                <div className="status-dot online"></div>
                Online
              </span>
            </div>
          </div>
          <button 
            className="chatbot-close"
            onClick={() => setIsOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`message ${message.sender}`}
            >
              <div className="message-avatar">
                {message.sender === 'bot' ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div className="message-content">
                <div className="message-bubble">
                  <p>{message.text}</p>
                </div>
                <span className="message-time">
                  {formatTime(message.timestamp)}
                </span>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot">
              <div className="message-avatar">
                <Bot size={16} />
              </div>
              <div className="message-content">
                <div className="message-bubble typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies Container - Always present for layout consistency */}
        <div className={`quick-replies ${messages.length === 1 ? 'visible' : 'hidden'}`}>
          <p>Quick options:</p>
          <div className="quick-replies-buttons">
            {getQuickReplies().map((reply, index) => (
              <button
                key={index}
                className="quick-reply-btn"
                onClick={() => handleQuickReply(reply)}
              >
                {reply}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="chatbot-contact-info">
          <div className="contact-items">
            <a href="tel:+919991762005" className="contact-item">
              <Phone size={14} />
              <span>+91 9991762005</span>
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=krishan@khstrdesign.com&su=Inquiry%20from%20K.H.%20STR%20Design%20Website" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-item"
            >
              <Mail size={14} />
              <span>Email Us</span>
            </a>
            <div className="contact-item">
              <MapPin size={14} />
              <span>Palwal, Haryana</span>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="chatbot-input">
          <div className="input-container">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              disabled={isTyping}
            />
            <button 
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isTyping}
              className="send-button"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chatbot
