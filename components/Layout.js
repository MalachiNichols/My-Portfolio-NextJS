import NavBar from "./NavBar";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.bgWrap}>
      </div>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
