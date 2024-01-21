import "../stylesheets/table.css";

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <td colSpan="2">Areas of Expertise</td>
        </tr>
      </thead>
      <tbody className="center">
        <tr>
          <td>HTML/CSS</td>
          <td rowSpan="2">Programming Languages</td>
        </tr>
        <tr>
          <td>Javascript</td>
        </tr>
        <tr>
          <td>React</td>
          <td rowSpan="2">Frameworks</td>
        </tr>
        <tr>
          <td>Bootstrap</td>
        </tr>
        <tr>
          <td>Firebase</td>
          <td rowSpan="3">Utilities</td>
        </tr>
        <tr>
          <td>GitHub</td>
        </tr>
        <tr>
          <td>VS Code</td>
        </tr>
        <tr>
          <td>German (C2 Level)</td>
          <td rowSpan="3">My Speaking Languages</td>
        </tr>
        <tr>
          <td>English (fluent)</td>
        </tr>
        <tr>
          <td>Chinese (Native Tongue)</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
