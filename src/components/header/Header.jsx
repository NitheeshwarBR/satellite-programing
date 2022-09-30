import "./Header.css"

//images
import vayu_logo from "../../images/vayuvyastra_logo_name.png"

function Header() {
  return (
    <>
      <div className="app-header" >
        <img src={vayu_logo} alt="vayuhastra logo" id="vayuhastra-logo" />
      </div>
    </>
  )
}

export default Header
