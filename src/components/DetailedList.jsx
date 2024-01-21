import "../stylesheets/detailedList.css";
import Utilities from "./Utilities";

const DetailedList = () => {
  return (
    <ul className="detailList">
      <li className="detailListItem center">
        <details>
          <summary>Learn Resources</summary>
          <p>
            At the beginning, I like to learn programming on YouTube. There are
            some good YouTube courses that I find very useful, for example the
            fullcourses from <strong>SuperSimpleDev</strong> (for beginners) and
            from
            <strong>Dave Gray</strong> . Those are my favorite! <br />
            <br />
            Later on, I discovered learn-plattforms like{" "}
            <strong>FreeCodeCamp</strong>, <strong>Scrimba</strong> and also{" "}
            <strong>Udemy</strong>.
          </p>
          <p>
            And, like everyone said: practice is the most important of all. It
            motivates you and makes programming a very interesting thing to do.
            I <strong>practice</strong> a lot building my own projects and have
            great fun, too.
          </p>
        </details>
      </li>
      <li className="detailListItem center">
        <details>
          <summary>Some Utilities</summary>
          <p>
            Here are some useful links, that you might find useful for your
            projects:
          </p>
          <ul className="utilityList">
            <Utilities />
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default DetailedList;
