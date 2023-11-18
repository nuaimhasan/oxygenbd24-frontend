import { Link } from "react-router-dom";

export default function AboutDropdown({ aboutDropdown }) {
  return (
    <ol className={`dropdown ${aboutDropdown && "dropdown_show"}`}>
      <li>
        <Link to="/about-us/company-profile">Company Profile</Link>
      </li>
      <li>
        <Link to="/about-us/mission-vision">Mission Vision</Link>
      </li>
      <li>
        <Link to="/about-us/purpose-service">Purpose & Service</Link>
      </li>
      <li>
        <Link to="/about-us/testimonials">Testimonials</Link>
      </li>
      <li>
        <Link to="/about-us/manpower">Manpower</Link>
      </li>
      <li>
        <Link to="/about-us/area-operation">Area Of Operation</Link>
      </li>
      <li>
        <Link to="/about-us/our-team">Our Team</Link>
      </li>
    </ol>
  );
}
