import logo from "../assets/images/logo.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <div className={classes.navLeft}>
        <a href="index.html" className={classes.brand}>
          <img src={logo} alt="Code with Bappi Logo" />
          <h3>Code With Bappi</h3>
        </a>
      </div>

      <div>
        <Account />
      </div>
    </nav>
  );
}
