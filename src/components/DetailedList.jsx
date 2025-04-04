import "../stylesheets/detailedList.css";
import cv from "/Li_CV_de_compressed.pdf";

const DetailedList = () => {
  return (
    <ul className="detailList">
      <li className="detailListItem center">
        <details>
          <summary>My CV</summary>
          <br />
          <object data={cv} type="application/pdf" width="100%" height="600px">
            <p>
              Your browser doesn't support PDF viewing.
              <a href="path/to/your/document.pdf">Download the PDF</a> instead.
            </p>
          </object>
        </details>
      </li>
    </ul>
  );
};

export default DetailedList;
