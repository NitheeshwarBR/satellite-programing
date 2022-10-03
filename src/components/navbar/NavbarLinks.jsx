function NavbarLinks(props) {
  return (
    <>
      <div className="navbarlink-container">
        <a href={props.href}>
          <div className="navbar-link-icon">
            <span class="navbar-svg-icon do-not-touch">{props.src}</span>
          </div>
        </a>
        <p className="navlink-title do-not-touch">{props.name}</p>
      </div>
    </>
  );
}

export default NavbarLinks;
