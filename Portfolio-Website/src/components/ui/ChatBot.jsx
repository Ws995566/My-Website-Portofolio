import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Bot } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import '../../styles/ChatBot.css';

// ---------------------------------------------------------------------------
// System instruction — defines MemorixBot's personality & knowledge
// ---------------------------------------------------------------------------
const SYSTEM_INSTRUCTION = `
You are "MemorixBot", the official AI assistant for Wesley Sumedha Deano's portfolio.
Your goal is to answer questions about Wesley (also known as MemoriesW) in a professional, friendly, and deeply knowledgeable manner.

### About Wesley:
- Full Name: Wesley Sumedha Deano
- Alias: MemoriesW
- Profession: AI Engineer
- Education: Bina Nusantara University ( BINUS ) - Intelligence System.
- Location: Jakarta, Indonesia
- Bio: I am an AI-Specialized developer specializing in building intelligent, product-driven systems that bridge machine learning and real-world usability. With a strong foundation in computer vision and modern web technologies, I design and develop solutions that are not only technically robust but also intuitive and impactful.uct d

### Personal Persona:
- Favorite Food: **Japanese Curry**
- Relationship: Currently single.
- Favorite Color: **Blue**.
- Personality: Tech-savvy, modern, helpful, and very proud of his journey.

### Technical Skills & Certificates:
- Core Skills: Machine Learning, Java, Python, Figma, and many more
- Tech Stack: C/C++, Java, Python, Firebase, MySQL, PostgreSQL, Git, VS Code, Claude
- Certifications:
  - Fundamentals of Deep Learning (NVIDIA, 2025)
  - Java Programming (BNCC BINUS @Malang, 2025)
  - Claude 101 (Anthropic Education, 2026)
  - AI Fluency: Frameworks & Foundations (Anthropic Education, 2026)

### Key Statistics:
- Total Projects: 3+ (Innovative web solutions crafted)
- Certificates: 4 (Professional skills validated)
- Years of Experience: 1+ (Continuous learning journey)

### Projects:
- **Hello MMS**: A premium tourism platform meticulously designed to showcase the natural beauty and cultural heritage of Aklan through an immersive digital experience. (Tech: React Framework, UI/UX, Tourism)
- 

### Interaction Guidelines:
- If someone greets you, respond with a professional "Hello" or "Hi". Ensure perfect spelling for greetings.
- If someone asks how to contact Wesley, provide his email: wsly.sdeano@gmail.com or mention the contact section.
- If someone asks for his social media, provide: GitHub (https://github.com/Ws995566), LinkedIn (www.linkedin.com/in/wesley-sumedha-deano), Instagram (https://www.instagram.com/_.auzora/).
- Keep responses relatively short and formatted for a chat bubble (use bolding for emphasis where appropriate).
- Be polite and helpful. If you don't know something specific, suggest they reach out to Wesley directly via the contact form.
`;

const ChatBot = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', content: `Hi! I'm **MemorixBot**. I can tell you all about Wesley's work, skills, and projects. What would you like to know?` }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);
    setIsRetrying(false);

    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      try {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        if (!apiKey) {
          throw new Error('Gemini API Key is missing. Please set VITE_GEMINI_API_KEY in your .env file.');
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: 'gemini-flash-latest',
          systemInstruction: SYSTEM_INSTRUCTION,
        });

        const firstUserIndex = messages.findIndex(m => m.role === 'user');
        const history = firstUserIndex !== -1
          ? messages.slice(firstUserIndex).map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }],
          }))
          : [];

        const chat = model.startChat({
          history,
          generationConfig: { maxOutputTokens: 500 },
        });

        const result = await chat.sendMessage(userMessage);
        const aiResponse = result.response.text() || "I'm sorry, I couldn't generate a response. Please try again!";
        
        setMessages(prev => [...prev, {
          role: 'ai',
          content: aiResponse
        }]);
        
        setIsRetrying(false);
        break; // Success!
      } catch (error) {
        console.error(`Attempt ${attempts + 1} failed:`, error);
        
        const isTransient = error.message.includes('503') || error.message.includes('High demand');
        
        if (isTransient && attempts < maxAttempts - 1) {
          attempts++;
          setIsRetrying(true);
          // Wait before retrying: 2s, 4s...
          await new Promise(resolve => setTimeout(resolve, 2000 * attempts));
          continue;
        }

        // If we reach here, it's a permanent error or we ran out of retries
        setIsOffline(true);
        setMessages(prev => [...prev, {
          role: 'ai',
          content: "I'm having some trouble connecting to my services. I'll be **offline** for a bit while Wesley fixes things. Sorry for the inconvenience!"
        }]);
        break;
      }
    }
    setIsTyping(false);
    setIsRetrying(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="chatbot-panel-elite"
          initial={{ x: 450, opacity: 0, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: 450, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.8 }}
        >
          <div className="chatbot-window-elite">
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar">
                  <Bot size={18} color="var(--primary)" />
                </div>
                <div className="chatbot-header-text">
                  <span className="chatbot-label">AI ASSISTANT</span>
                  <h4>MemorixBot</h4>
                </div>
              </div>
              <div className="chatbot-header-actions">
                <div className={`chatbot-status ${isOffline ? 'status-offline' : ''}`}>
                  <span className="chatbot-status-dot" />
                  {isOffline ? 'Offline' : 'Online'}
                </div>
                <button className="chatbot-close-elite" onClick={onClose}>
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <ChatMessage
                  key={index}
                  msg={msg}
                  isLast={index === messages.length - 1}
                />
              ))}
              {isTyping && (
                <div className="message message-ai">
                  <div className="typing-indicator-wrapper">
                    <div className="typing-indicator">
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                    </div>
                    {isRetrying && <span className="retrying-label">Connecting (High Demand)...</span>}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-footer">
              {!isOffline ? (
                <form className="chatbot-input-wrapper-elite" onSubmit={handleSend}>
                  <input
                    type="text"
                    className="chatbot-input-elite"
                    placeholder="Inquire about Wesley's expertise..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isTyping}
                  />
                  <button
                    type="submit"
                    className="chatbot-send-elite"
                    disabled={!input.trim() || isTyping}
                  >
                    <Send size={18} />
                  </button>
                </form>
              ) : (
                <div className="chatbot-offline-notice">
                  <span className="notice-icon">⚠</span>
                  <div className="notice-text">
                    <strong>Service Interrupted</strong>
                    <p>MemorixBot is currently offline.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ---------------------------------------------------------------------------
// ChatMessage — typewriter effect for AI responses
// ---------------------------------------------------------------------------
const ChatMessage = ({ msg, isLast }) => {
  const [displayText, setDisplayText] = useState(msg.role === 'user' ? msg.content : '');
  const [isTyping, setIsTyping] = useState(msg.role === 'ai' && isLast);

  useEffect(() => {
    if (msg.role === 'ai' && isLast) {
      setDisplayText(''); // Reset text when starting to type
      let index = 0;
      const content = msg.content || '';
      
      const interval = setInterval(() => {
        if (index < content.length) {
          const nextChar = content[index];
          if (nextChar !== undefined) {
            setDisplayText(prev => prev + nextChar);
          }
          index++;
        } else {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, 15);
      return () => clearInterval(interval);
    } else {
      setDisplayText(msg.content || '');
      setIsTyping(false);
    }
  }, [msg.content, msg.role, isLast]);

  const formattedContent = displayText
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br />');

  return (
    <div className={`message ${msg.role === 'ai' ? 'message-ai' : 'message-user'}`}>
      <span dangerouslySetInnerHTML={{ __html: formattedContent }} />
      {isTyping && <span className="typewriter-cursor" />}
    </div>
  );
};

export default ChatBot;
