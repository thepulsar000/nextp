import "./globals.css";
import styles from "./page.module.css";
import Image from "next/image";
import whitecart from '../public/shopping-cart-white.png';

export function Heading(props) {
  const { title, subtitle } = props;
  return (
    <div className={`${styles.heading}`}>
      <p>{title}</p>
      <h1>{subtitle}</h1>
    </div>
  );
}

export function Button(props) {
  const { text,img } = props;
  return (
    <>
      <button>
        {/* <div className={`${styles.whitecart}`}>
          <Image src={whitecart} alt="A white cart icon" />
        </div> */}
        <p>{text}</p>
      </button>
    </>
  );
}
