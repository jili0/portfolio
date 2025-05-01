"use client";

import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Reset form and show success
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Your name: </legend>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="your name"
          required
        />
      </fieldset>
      <fieldset>
        <legend>Your email: </legend>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email"
          required
        />
      </fieldset>
      <fieldset>
        <legend>Your message:</legend>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={10}
          cols={100}
          placeholder="your message"
          required
        ></textarea>
      </fieldset>
      {error && (
        <div className="form__error">
          <p style={{ color: 'red' }}>{error}</p>
        </div>
      )}
      <button
        type="submit"
        id="submit"
        className="submitButton"
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'send'}
      </button>
      {isSubmitted && (
        <div className="form__confirmMessage">
          <p>Thanks for your message!</p>
          <button 
            type="button"
            className="form__confirmMessageButton" 
            onClick={() => setIsSubmitted(false)}
          >
            ×
          </button>
        </div>
      )}
    </form>
  );
}