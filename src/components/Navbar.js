import styles from "../../styles/Navbar.module.css";
import Default from "./Default.jpeg";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.name}>Edvora</div>
      <div className={styles.user}>
        <span className={styles.username}>Name</span>
        <Image
          height={44}
          width={44}
          src={Default}
          className={styles.userimage}
        />
      </div>
    </div>
  );
}

export default Navbar;
