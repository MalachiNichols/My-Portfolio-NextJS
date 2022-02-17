import NavBar from "./NavBar";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.bgWrap}>
        {/* <img src="/images/webback.jpg" className="backImg"/> */}
        <Image
          className="backImg"
          alt="background image"
          src="/images/webback.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
