import "../assets/styles/Contact.scss";
import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const submitting = useRef(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitting.current) return;

    const missingName = name.trim() === "";
    const invalidEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const missingMessage = message.trim() === "";

    setNameError(missingName);
    setEmailError(invalidEmail);
    setMessageError(missingMessage);
    setStatus("");

    if (missingName || invalidEmail || missingMessage) {
      setStatus("Please check the highlighted fields.");
      return;
    }

    submitting.current = true;
    setSending(true);

    try {
      const response = await fetch("https://formspree.io/f/xzedopyy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("Thanks! Your message was sent successfully.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus(
        "Your message could not be sent. Please try again or email me directly."
      );
    } finally {
      submitting.current = false;
      setSending(false);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>

            <p>
              Get in touch! Send me a message using the form below.
            </p>

          <Box
            component="form"
            onSubmit={sendEmail}
            noValidate
            className="contact-form"
            aria-busy={sending}
          >
            <div className="form-flex">
              <TextField
                required
                id="contact-name"
                name="name"
                label="Your Name"
                placeholder="What's your name?"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={sending}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />

              <TextField
                required
                id="contact-email"
                name="email"
                type="email"
                label="Email"
                placeholder="How can I reach you?"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={sending}
                error={emailError}
                helperText={
                  emailError ? "Please enter a valid email address" : ""
                }
              />
            </div>

            <TextField
              required
              id="contact-message"
              name="message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={sending}
              error={messageError}
              helperText={messageError ? "Please enter your message" : ""}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </Button>

            <p role="status" aria-live="polite">
              {status}
            </p>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;