import styles from "../../styles/BodyItem.module.css";
import Image from "next/image";
import Map from "./Map.jpeg";

function BodyItem() {
  return (
    <div className={styles.container}>
      <div>
        <Image className={styles.map} width={290} height={160} src={Map} />
      </div>
      <div className={styles.rideinfo}>
        <div className={styles.ridedata}>
          <span>Ride Id : </span>002
        </div>
        <div className={styles.ridedata}>
          <span>Origin Station : </span>20
        </div>
        <div className={styles.ridedata}>
          <span>station_path : </span>
          [20, 39, 40, 42, 54, 63, 72, 88, 98]
        </div>
        <div className={styles.ridedata}>
          <span>Date : </span>15th Feb 2022 16:33
        </div>
        <div className={styles.ridedata}>
          <span>Distance : </span>0
        </div>
      </div>
      <div className={styles.place}>
        <span className={styles.city}>City Name</span>
        <span>State Name</span>
      </div>
    </div>
  );
}

export default BodyItem;
