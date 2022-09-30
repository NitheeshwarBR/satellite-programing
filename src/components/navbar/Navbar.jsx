import "./Navbar.css"

import NavbarLinks from "./NavbarLinks"

//icons
import rocket from "./icons/rocket.svg"
import mission from "./icons/mission.svg"
import groups from "./icons/groups.svg"
import info from "./icons/info.svg"
function Navbar() {
  return (
    <>
      <div className="nav-container">
            <NavbarLinks name="Vayuyastra" src={rocket}  href={"/"}  target={false} />
            <NavbarLinks name="Mission" src={mission} />
            <NavbarLinks name="Teams" src={groups} />
            <NavbarLinks name="About" src={info} />

      </div>
    </>
  )
}

export default Navbar
