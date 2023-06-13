const Navbar = () => {
  return (
    <div className="navBarStyle">
      <div className="contenidoNav">
        <img src="icons/logo.svg" alt="" />
        <div id="menuNav">
          <a className="namesNav" href="#featuresDiv">
            Features
          </a>
          <a className="namesNav" href="#myTeam">
            Team
          </a>
          <a className="namesNav" href="#signUpWindow">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
