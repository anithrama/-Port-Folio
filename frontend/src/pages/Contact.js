import React from "react";
import "./Contact.css";

const contactItems = [
  {
    icon: "GH",
    type: "GitHub",
    detail: "github.com/anithrama",
    href: "https://github.com/anithrama",
    action: "Open GitHub",
  },
  {
    icon: "EM",
    type: "Email",
    detail: "anithra2002@gmail.com",
    href: "mailto:anithra2002@gmail.com",
    action: "Send Email",
  },
  {
    icon: "IN",
    type: "LinkedIn",
    detail: "linkedin.com/in/anithra",
    href: "https://www.linkedin.com/in/anithra",
    action: "Open LinkedIn",
  },
  {
    icon: "WA",
    type: "WhatsApp",
    detail: "+91 6282410827",
    href: "https://wa.me/916282410827",
    action: "Open Chat",
  },
];

function Contact() {
  return (
    <section className="contact-page">
      <header className="contact-hero">
        <h2>Get in Touch</h2>
        <p>
          I am open to opportunities and collaborations. Feel free to reach out.
        </p>
      </header>

      <div className="contact-layout">
        <div className="contact-cards" aria-label="Contact details">
          {contactItems.map((item) => (
            <a
              key={item.type}
              className="contact-card"
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
            >
              <span className="contact-icon">{item.icon}</span>
              <div>
                <h3>{item.type}</h3>
                <p>{item.detail}</p>
                <small>{item.action}</small>
              </div>
            </a>
          ))}
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h3>Send Message</h3>

          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="your@email.com" />

          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" placeholder="Subject" />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message..."
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
