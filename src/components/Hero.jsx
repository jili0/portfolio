import "../stylesheets/hero.css";
import html from "../logos/html.png";
import css from "../logos/css.svg";
import javascript from "../logos/javascript.png";
import react from "../logos/react.png";
import firebase from "../logos/firebase.png";
import bootstrap from "../logos/bootstrap.png";
const Hero = () => {
  return (
    <>
      <div id="hero" className="backgroundImgContainer">
        <p className="heroText">
          <span className="nowrap">to my</span>
        </p>
        <div className="colorFilter"></div>
      </div>
      <div className="technologiesContainer">
        <p className="technologiesDescription"> Technologies <span className="nowrap headerFont">for the</span> portfolio:</p>
        <div className="technologiesImgContainer">
          <img
            className="technologiesImg"
            title="Html"
            src={html}
            alt="html"
            height="48"
            width="48"
          />
          <img
            className="technologiesImg"
            title="Css"
            src={css}
            alt="css"
            height="48"
            width="48"
          />
          <img
            className="technologiesImg"
            title="Javascript"
            src={javascript}
            alt="javascript"
            height="48"
            width="48"
          />
          <img
            className="technologiesImg"
            title="React"
            src={react}
            alt="react"
            height="48"
            width="48"
          />
          <img
            className="technologiesImg"
            title="Firebase"
            src={firebase}
            alt="firebase"
            height="48"
            width="48"
          />
          <img
            className="technologiesImg"
            title="Bootstrap"
            src={bootstrap}
            alt="bootstrap"
            height="48"
            width="48"
          />{" "}
        </div>
      </div>
      <article className="textBox">
        <h2 className="center textBoxTitle">
          <i className="fa-solid fa-mug-saucer"></i> Greetings <span className="nowrap headerFont">from Jing</span>
        </h2>
        <br />
        <p>
          Hello, I am Jing Li and I develop web applications. I live and work in
          Berlin, Germany. I spend most of my time experimenting with Javascript and it's framework React. I enjoy coding and the
          challenge of learning something new everyday.
          <br />
          In my rest time, I like jogging, listening to music and cooking good food. 🍲
        </p>
      </article>
    </>
  );
};

export default Hero;
