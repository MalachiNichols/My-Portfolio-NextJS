import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = ({ close }) => {
const change = () => {
  close();
}

  return (
    <div className={navStyles.navList}>
      <Link href="/about"><p className={navStyles.navLinks} onClick={() => change()}>About</p></Link>
      <Link href="/portfolio"><p className={navStyles.navLinks} onClick={() => change()}>Portfolio</p></Link>
      <Link href="/maze"><p className={navStyles.navLinks} onClick={() => change()}>Maze</p></Link>
      <Link href="/myfavoritedrummers"><p className={navStyles.navLinks} onClick={() => change()}>My Favorite Drummers</p></Link>

    </div>
  );
};

export default Nav;
