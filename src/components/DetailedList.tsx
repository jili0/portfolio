export default function DetailedList() {
  return (
    <ul className="detailList">
      <li className="detailListItem center">
        <details>
          <summary>My CV</summary>
          <br />
          <object data="/Li_CV_de_compressed.pdf" type="application/pdf" width="100%" height="600px">
            <p>
              Your browser doesn&apos;t support PDF viewing.
              <a href="/Li_CV_de_compressed.pdf">Download the PDF</a> instead.
            </p>
          </object>
        </details>
      </li>
    </ul>
  );
}