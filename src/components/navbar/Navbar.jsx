import "./Navbar.css";

import NavbarLinks from "./NavbarLinks";

//icons
import rocket from "./icons/rocket.svg";
import mission from "./icons/mission.svg";
import groups from "./icons/groups.svg";
import info from "./icons/info.svg";
function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div>
          <NavbarLinks name="Vayuyastra" src={rocket} />
          <NavbarLinks name="Mission" src={mission} />
          <NavbarLinks name="Teams" src={groups} />
          <NavbarLinks name="About" src={info} />
        </div>
        <div className="nav-bottom-container">
        
        <a href="https://www.orionprotocol.io/orn" className="plain-link primary">Feedback</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
