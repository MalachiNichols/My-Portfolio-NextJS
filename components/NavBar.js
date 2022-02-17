import { useState } from "react";
import { CgMenuBoxed } from "react-icons/cg";
import { CgCloseR } from "react-icons/cg";
import Nav from "./Nav";
import OnClickOutside from "react-onclickoutside";
import style from '../styles/Nav.module.css'

function NavBar () {
  const [open, setOpen] = useState(false);

  NavBar.handleOutClick = () => setOpen(false);

  const menuIcon = (
    <CgMenuBoxed
      className={style.menuIcon}
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

    const changeIcon = () => {
        setOpen(!open);
    }


  const closeIcon = (
    <CgCloseR
      className={style.closeIcon}
      size="32px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <div className={style.nav}>
      {open ? closeIcon : menuIcon}
      <p className={style.mee}>Malachi Nichols</p>
      {open && <Nav close={changeIcon}/>}
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => NavBar.handleOutClick,
};

export default OnClickOutside(NavBar, clickOutsideConfig);