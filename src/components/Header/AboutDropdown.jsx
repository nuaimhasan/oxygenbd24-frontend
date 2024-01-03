import { Link } from "react-router-dom";

export default function AboutDropdown({ aboutDropdown }) {
  return (
    <ol className={`dropdown ${aboutDropdown && "dropdown_show"}`}>
      <li>
        <Link to="/about-us/company-profile">Company Profile</Link>
      </li>
      <li>
        <Link to="/about-us/our-mission">Our Mission</Link>
      </li>
      <li>
        <Link to="/about-us/our-vision">Our Vision</Link>
      </li>
      <li>
        <Link to="/about-us/our-team">Our Team</Link>
      </li>
    </ol>
  );
}
