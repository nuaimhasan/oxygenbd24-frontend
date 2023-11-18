import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ProductDropdown({ productsDropdown }) {
  return (
    <ol className={`dropdown ${productsDropdown && "dropdown_show"}`}>
      <li>
        <Link to="/products/Solar-Panel">
          Solar Panel <MdKeyboardArrowRight />
        </Link>
        <ol className="sub_dropdown">
          <li>
            <Link to="/products/Solar-Panel/Mono-Solar-Panel">
              Mono Solar Panel <MdKeyboardArrowRight />
            </Link>

            <ol className="sub_sub_dropdown">
              <li>
                <Link to="/products/Solar-Panel/Mono-Solar-Panel">
                  50 Watt Solar Panel
                </Link>
              </li>
              <li>
                <Link to="/products/Solar-Panel/Mono-Solar-Panel">
                  65 Watt Solar Panel
                </Link>
              </li>
              <li>
                <Link to="/products/Solar-Panel/Mono-Solar-Panel">
                  85 Watt Solar Panel
                </Link>
              </li>
              <li>
                <Link to="/products/Solar-Panel/Mono-Solar-Panel">
                  100 Watt Solar Panel
                </Link>
              </li>
              <li>
                <Link to="/products/Solar-Panel/Mono-Solar-Panel">
                  130 Watt Solar Panel
                </Link>
              </li>
              <li>
                <Link to="/products/Solar-Panel/Mono-Solar-Panel">
                  150 Watt Solar Panel
                </Link>
              </li>
              <li>
                <Link to="/products/Solar-Panel/Mono-Solar-Panel">
                  165 Watt Solar Panel
                </Link>
              </li>
              <li>
                <Link to="/products/Solar-Panel/Mono-Solar-Panel">
                  200 Watt Solar Panel
                </Link>
              </li>
            </ol>
          </li>
          <li>
            <Link to="/products/DC-LED-Tube/125V-LED-Tube">
              Grid Tied Solar Panel <MdKeyboardArrowRight />
            </Link>

            <ol className="sub_sub_dropdown">
              <li>
                <Link to="/products/Solar-Panel/Grid-Tied-Solar-Panel">
                  3000 Watt Solar Panel
                </Link>
              </li>
              <li>
                <Link to="/products/Solar-Panel/Grid-Tied-Solar-Panel">
                  550 Watt Solar Panel
                </Link>
              </li>
            </ol>
          </li>
        </ol>
      </li>
      <li>
        <Link to="/products/Solar-Charge-Controller">
          Solar Charge Controller <MdKeyboardArrowRight />
        </Link>

        <ol className="sub_dropdown">
          <li>
            <Link to="/products/Solar-Charge-Controller/">
              10 AMP Micro Controller
            </Link>
          </li>
          <li>
            <Link to="/products/Solar-Charge-Controller/">
              10 AMP Controller
            </Link>
          </li>
          <li>
            <Link to="/products/Solar-Charge-Controller/">
              20 AMP Controller
            </Link>
          </li>
          <li>
            <Link to="/products/Solar-Charge-Controller/">
              20 AMP Digital Controller
            </Link>
          </li>
        </ol>
      </li>
      <li>
        <Link to="/products/Solar-Mobile-Charger">
          Solar Mobile Charger <MdKeyboardArrowRight />
        </Link>

        <ol className="sub_dropdown">
          <li>
            <Link to="/products/Solar-Mobile-Charger/">
              DC to AC Charger 1 Port
            </Link>
          </li>
          <li>
            <Link to="/products/Solar-Mobile-Charger/">
              DC to AC Charger 2 Port
            </Link>
          </li>
        </ol>
      </li>
      <li>
        <Link to="/products/LED-DC-Bulb">
          LED DC Bulb <MdKeyboardArrowRight />
        </Link>

        <ol className="sub_dropdown">
          <li>
            <Link to="/products/LED-DC-Bulb/3-Watt-LED-DC-Bulb">
              3 Watt LED DC Bulb
            </Link>
          </li>
          <li>
            <Link to="/products/LED-DC-Bulb/5-Watt-LED-DC-Bulb">
              5 Watt LED DC Bulb
            </Link>
          </li>
          <li>
            <Link to="/products/LED-DC-Bulb/5-Watt-LED-DC-Bulb">
              7 Watt LED DC Bulb
            </Link>
          </li>
        </ol>
      </li>
      <li>
        <Link to="/products/LED-DC-Tube">
          LED DC Tube <MdKeyboardArrowRight />
        </Link>

        <ol className="sub_dropdown">
          <li>
            <Link to="/products/LED-DC-Tube/3-Watt-LED-DC-Tube">
              3 Watt LED DC Tube
            </Link>
          </li>
          <li>
            <Link to="/products/LED-DC-Tube/5-Watt-LED-DC-Tube">
              5 Watt LED DC Tube
            </Link>
          </li>
          <li>
            <Link to="/products/LED-DC-Tube/5-Watt-LED-DC-Tube">
              7 Watt LED DC Tube
            </Link>
          </li>
        </ol>
      </li>
      <li>
        <Link to="/products/Solar-Cable">
          Solar Cable <MdKeyboardArrowRight />
        </Link>

        <ol className="sub_dropdown">
          <li>
            <Link to="/products/Solar-Cable/23-76-Gray-Cable">
              23/76 Gray Cable
            </Link>
          </li>
          <li>
            <Link to="/products/Solar-Cable/70-76-Gray-Cable">
              70/76 Gray Cable
            </Link>
          </li>
          <li>
            <Link to="/products/Solar-Cable/23-76-White-Cable">
              23/76 White Cable
            </Link>
          </li>
          <li>
            <Link to="/products/Solar-Cable/70-76-White-Cable">
              70/76 White Cable
            </Link>
          </li>
          <li>
            <Link to="/products/Solar-Cable/23-76-White-super-Cable">
              23/76 White Super Cable
            </Link>
          </li>
        </ol>
      </li>
      <li>
        <Link to="/products/DC-Fan">Solar Battery Cable</Link>
      </li>
      <li>
        <Link to="/products/Solar-Inventer">
          Solar Inventer <MdKeyboardArrowRight />
        </Link>

        <ol className="sub_dropdown">
          <li>
            <Link to="/products/Solar-Inventer">Solar OFF Grid Inventer</Link>
          </li>
          <li>
            <Link to="/products/Solar-Inventer">Solar ON Grid Inventer</Link>
          </li>
          <li>
            <Link to="/products/Solar-Inventer">
              Solar Hybrid Grid Inventer
            </Link>
          </li>
        </ol>
      </li>

      <li>
        <Link to="/products/Solar-Street-Light">
          Solar Street Light <MdKeyboardArrowRight />
        </Link>

        <ol className="sub_dropdown">
          <li>
            <Link to="/products/Solar-Street-Light">15 watt Street Light</Link>
          </li>
          <li>
            <Link to="/products/Solar-Street-Light">20 watt Street Light</Link>
          </li>
          <li>
            <Link to="/products/Solar-Street-Light">30 watt Street Light</Link>
          </li>
        </ol>
      </li>

      <li>
        <Link to="/products/Solar-DC-Fan">
          Solar DC Fan <MdKeyboardArrowRight />
        </Link>

        <ol className="sub_dropdown">
          <li>
            <Link to="/products/Solar-DC-Fan">Solar 12&quot; Table Fan</Link>
          </li>
          <li>
            <Link to="/products/Solar-DC-Fan">Solar 16&quot; Stand Fan</Link>
          </li>
          <li>
            <Link to="/products/Solar-DC-Fan">Solar 16&quot; Net Fan</Link>
          </li>
        </ol>
      </li>

      <li>
        <Link to="/products/AC-Fan">
          AC Fan <MdKeyboardArrowRight />
        </Link>

        <ol className="sub_dropdown">
          <li>
            <Link to="/products/AC-Fan">16&quot; AC Stand Fan</Link>
          </li>
          <li>
            <Link to="/products/AC-Fan">16&quot; AC Net Fan</Link>
          </li>
          <li>
            <Link to="/products/AC-Fan">20&quot; AC Net Fan</Link>
          </li>
        </ol>
      </li>

      <li>
        <Link to="/products/AC-Fan">Moveable IPS</Link>
      </li>
    </ol>
  );
}
