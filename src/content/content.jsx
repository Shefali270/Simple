
import { useEffect, useState } from "react";
import "./Content.css";

function Contact() {
  const messages = [
    { text: "Hi! I'd like to know more about live classes for Class 9, CBSE.", type: "user" },
    { text: "Happy to help! Which subjects are you looking for?", type: "bot" },
    { text: "Maths and Science, with doubt solving.", type: "user" },
    { text: "Great choice — our team will share class options with you shortly.", type: "bot" }
  ];

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (count >= messages.length) return;

    const timer = setTimeout(() => {
      setCount(c => c + 1);
    }, 1500);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="contact-layout">
      <div className="contact-text">
        <span>⭐ Contact</span>
        <h1>Let's <b>connect.</b></h1>
        <p>
          Reach LiveMentorHub for learner support,
          mentorship or institutional partnerships.
        </p>
      </div>

      <div className="chat-box">
        <div className="chat-header">
          <h3>🌐 LiveMentorHub Support</h3>
          <small>🟢 Online now</small>
        </div>

        <div className="chat-messages">
          {messages.slice(0, count).map((msg, i) => (
            <div key={i} className={`message ${msg.type}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <form
          className="chat-input"
          onSubmit={e => {
            e.preventDefault();
            if (input.trim()) {
              setInput("");
            }
          }}
        >
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button type="submit">➤</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
