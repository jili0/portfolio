import "../stylesheets/form.css";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    setMessageList((prev) => [...prev, { name: name, message: message }]);
    setName("");
    setMessage("");
    setIsSubmitted(true)
  };


  return (
    <form className="contactForm" onSubmit={e => e.preventDefault()}>
      <fieldset>
        <legend htmlFor="name">Your name: </legend>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="your name"
        />
      </fieldset>
      <fieldset>
        <legend htmlFor="message">Your message:</legend>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="10"
          cols="100"
          placeholder="your message"
        ></textarea>
      </fieldset>
      <button
        onClick={handleSubmit}
        type="submit"
        id="submit"
        className="submitButton"
        value="submit"
      >
        send
      </button>
      {isSubmitted && <div className="form__confirmMessage" >
        <p>Thanks for your message!</p><button className="form__confirmMessageButton" onClick={() => setIsSubmitted(false)}><RxCross2 /></button>
      </div>}
    </form>
  );
};

export default Form;
