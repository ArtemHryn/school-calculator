import Link from "next/link";
import styles from "./Footer.module.scss";
import { kyivtype } from "@app/layout";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div
        className={`${styles.additional_politic_wrapper} ${styles.hide_container_small_container}`}
      >
        <div className={`${styles.politic_wrapper}`}>
          <Link
            href={"https://oksanailchyshyn.com/politika-konfidenciynosti"}
            className={styles.politic_link}
            target="_blank"
          >
            Політика конфіденціності
          </Link>
          <Link
            href={"https://oksanailchyshyn.com/dogovir-oferti"}
            className={styles.politic_link}
            target="_blank"
          >
            Договір оферти
          </Link>
        </div>
      </div>
      <div className={styles.contact_wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>Контактна інформація</h1>
          <Link
            href="https://www.instagram.com/brunette_os_"
            className={styles.social_link}
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            href="https://t.me/oksanailchy"
            className={styles.social_link}
            target="_blank"
          >
            Telegram
          </Link>
        </div>
      </div>
      <div className={styles.offer_wrapper}>
        <div className={styles.offer_container}>
          <Link
            href={"https://oksanailchyshyn.com/"}
            className={`${styles.author} ${kyivtype.className}`}
          >
            Oksana Ilchyshyn
          </Link>
          <div className={styles.politic_box}>
            <div
              className={`${styles.politic_wrapper} ${styles.hide_container}`}
            >
              <Link
                href={"https://oksanailchyshyn.com/politika-konfidenciynosti"}
                className={styles.politic_link}
              >
                Політика конфіденціності
              </Link>
              <Link
                href={"https://oksanailchyshyn.com/dogovir-oferti"}
                className={styles.politic_link}
              >
                Договір оферти
              </Link>
            </div>
            <p className={styles.copyright}>
              &copy;2023. <span>Усі права захищено.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
