import { Link } from "react-router-dom";

export default function BusinessunitDropdown({ businessDropdown }) {
  return (
    <ol className={`dropdown ${businessDropdown && "dropdown_show"}`}>
      <li>
        <Link to="/business-units/on-grid">On Grid</Link>
      </li>
      <li>
        <Link to="/business-units/off-grid">Off Grid</Link>
      </li>
      <li>
        <Link to="/business-units/hybrid">Hybrid</Link>
      </li>
    </ol>
  );
}
