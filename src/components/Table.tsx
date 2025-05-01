export default function Table() {
  return (
    <table>
      <thead>
        <tr>
          <td colSpan={2} className="headerFont">Technical Expertise</td>
        </tr>
      </thead>
      <tbody className="center">
        <tr>
          <td>HTML</td>
          <td rowSpan={6}>Frontend</td>
        </tr>
        <tr>
          <td>CSS</td>
        </tr>
        <tr>
          <td>Sass</td>
        </tr>
        <tr>
          <td>Tailwind</td>
        </tr>
        <tr>
          <td>Figma</td>
        </tr>
        <tr>
          <td>JavaScript/TypeScript</td>
        </tr>
        <tr>
          <td>React</td>
          <td rowSpan={4}>Backend</td>
        </tr>
        <tr>
          <td>Node.js</td>
        </tr>
        <tr>
          <td>Express.js</td>
        </tr>
        <tr>
          <td>MongoDB</td>
        </tr>
        <tr>
          <td>Git</td>
          <td rowSpan={4}>Tools</td>
        </tr>
        <tr>
          <td>GitHub</td>
        </tr>
        <tr>
          <td>GitLab</td>
        </tr>
        <tr>
          <td>VS Code</td>
        </tr>
        <tr>
          <td>German (C2 Level)</td>
          <td rowSpan={3}>Languages</td>
        </tr>
        <tr>
          <td>English (Fluent)</td>
        </tr>
        <tr>
          <td>Chinese (Native)</td>
        </tr>
      </tbody>
    </table>
  );
}