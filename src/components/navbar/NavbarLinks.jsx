function NavbarLinks(props) {
  return (
    <>
      <div className="navbarlink-container">
        <a href={props.href}>
          <div className="navbar-link-icon">
            <img src={props.src} alt={props.name} className="navbar-svg-icon" />
          </div>
        </a>
        <p className="navlink-title">{props.name}</p>
      </div>
    </>
  );
}

export default NavbarLinks;
