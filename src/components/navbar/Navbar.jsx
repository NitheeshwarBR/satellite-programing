import "./Navbar.css";

import NavbarLinks from "./NavbarLinks";

//icons
function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div>
          <NavbarLinks name="Vayuyastra" src="rocket" />
          <NavbarLinks name="Mission" src="confirmation_number" />
          <NavbarLinks name="Teams" src="groups_2" />
          <NavbarLinks name="About" src="info" />
        </div>
        <div className="nav-bottom-container">
        
        <a href="https://www.orionprotocol.io/orn" className="plain-link primary">Feedback</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
