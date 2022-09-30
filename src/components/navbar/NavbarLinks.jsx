
function NavbarLinks(props) {

  return (
    <>
      <div className="navbarlink-container" >
        <a href={props.href} target={props.target ?  "_blank" : "_self"} >
        <div  className="navbar-link-icon">
            <img src={props.src} alt={props.name}  className="navbar-svg-icon" />
        </div>
        </a>
        <pre  className="navlink-title" >{props.name}</pre>
      </div>
    </>
  )
}

export default NavbarLinks
