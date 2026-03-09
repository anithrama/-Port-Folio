import React, { useState } from "react";
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
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=anithra2002@gmail.com",
    action: "Open Gmail",
  },
  {
    icon: "IN",
    type: "LinkedIn",
    detail: "linkedin.com/in/anithra",
    href: "https://www.linkedin.com/in/anithra-m-a-aa249438b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
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
  const [submitStatus, setSubmitStatus] = useState("");

  const encode = (data) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    const botField = form["bot-field"]?.value || "";

    if (!name || !email || !subject || !message) {
      window.alert("Please fill in all fields before sending.");
      return;
    }

    try {
      setSubmitStatus("sending");
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          "bot-field": botField,
          name,
          email,
          subject,
          message,
        }),
      });

      form.reset();
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    }
  };

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

        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <h3>Send Message</h3>

          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="your@email.com" required />

          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" placeholder="Subject" required />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message..."
            required
          />

          <button type="submit">Send Message</button>
          {submitStatus === "sending" && <p>Sending message...</p>}
          {submitStatus === "success" && <p>Message sent successfully.</p>}
          {submitStatus === "error" && <p>Failed to send message. Try again.</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
