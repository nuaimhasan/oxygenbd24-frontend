import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ProductDropdown({ productsDropdown }) {
  return (
    <ol className={`dropdown ${productsDropdown && "dropdown_show"}`}>
      <li>
        <Link to="/products/Solar-Switch">Solar Switch</Link>
      </li>
      <li>
        <Link to="/products/Solar-Panel">Solar Panel</Link>
      </li>
      <li>
        <Link to="/products/Solar-Optimizer">Solar Optimizer</Link>
      </li>
      <li>
        <Link to="/products/Solar-Cable">Solar Cable</Link>
      </li>
      <li>
        <Link to="/products/Hitaci-Tube">Hitaci Tube</Link>
      </li>
      <li>
        <Link to="/products/Inverter">Inverter</Link>
      </li>
      <li>
        <Link to="/products/DC-LED-TV">DC-LED TV</Link>
      </li>
      <li>
        <Link to="/products/DC-Fan">DC-Fan</Link>
      </li>
      <li>
        <Link to="/products/DC-CFL">DC-CFL</Link>
      </li>
      <li>
        <Link to="/products/DC-LED">DC-LED</Link>
      </li>
      <li>
        <Link to="/products/DC-LED-Tube">
          DC-LED Tube <MdKeyboardArrowRight />
        </Link>

        <ol className="sub_dropdown">
          <li>
            <Link to="/products/DC-LED-Tube/125V-LED-Tube">125V LED Tube</Link>
          </li>
        </ol>
      </li>
      <li>
        <Link to="/products/Charger-Controller">Charger Controller</Link>
      </li>
      <li>
        <Link to="/products/Battery-Water">Battery Water</Link>
      </li>
      <li>
        <Link to="/products/Battery-Terminal">Battery Terminal</Link>
      </li>
    </ol>
  );
}
