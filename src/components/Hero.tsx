import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div id="hero" className="backgroundImgContainer">
        <p className="heroText">
          <span className="nowrap">to my</span>
        </p>
        <div className="colorFilter"></div>
      </div>
      <div className="technologiesContainer">
        <p className="technologiesDescription">
          Technologies <span className="nowrap headerFont">for the</span> portfolio:
        </p>
        <div className="technologiesImgContainer">
          <Image
            className="technologiesImg"
            title="Html"
            src="/logos/html.png"
            alt="html"
            height={48}
            width={48}
          />
          <Image
            className="technologiesImg"
            title="Css"
            src="/logos/css.svg"
            alt="css"
            height={48}
            width={48}
          />
          <Image
            className="technologiesImg"
            title="Javascript"
            src="/logos/javascript.png"
            alt="javascript"
            height={48}
            width={48}
          />
          <Image
            className="technologiesImg"
            title="React"
            src="/logos/react.png"
            alt="react"
            height={48}
            width={48}
          />
        </div>
      </div>
      <article className="textBox">
        <h2 className="center textBoxTitle">
          <i className="fa-solid fa-mug-saucer"></i> Greetings{" "}
          <span className="nowrap headerFont">from Jing</span>
        </h2>
        <br />
        <p>
          Hello, I am Jing Li and I develop web applications. I live and work in
          Berlin, Germany. I spend most of my time experimenting with Javascript
          and its framework React. I enjoy coding and the challenge of learning
          something new everyday.
          <br />
          In my rest time, I like jogging, listening to music and cooking good
          food. 🍲
        </p>
      </article>
    </>
  );
}