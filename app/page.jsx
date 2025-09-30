import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

      <h1 className={styles.title}>Welcome to Madis Marine</h1>
      <p className={styles.description}>
        Your one-stop solution for all marine needs.
      </p>
      
    </div>
  );
}
