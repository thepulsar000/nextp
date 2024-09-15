import "./nav.css";
// import styles from "./page.module.css";
import pizzon from "../public/pizza-logo.png";
import tomato from "../public/tomato.png";
import search from '../public/search.png';
import bluecart from '../public/shopping-cart-blue.png';
import ham from '../public/ham.png';
import Image from "next/image";
import Link from "next/link";

// function showNavBar(e){
//   e.prevenrDefault();
//   console.log("Yayyy");
// }



export default function Nav() {
  return (
    <>
      <nav>
        <div className="pizzon">
          <Image src={pizzon} placeholder="blur" alt="Pizza image" />
        </div>
        <div className="tomato">
          <Image src={tomato} placeholder="blur" alt="Tomato image" />
        </div>
        <div className="list">
          <li>
            <Link href="./">HOME</Link>
          </li>
          <li>
            <Link href="./prod">PRODUCT</Link>
          </li>
          <li>PAGES</li>
          <li>
            <Link href="./about">BLOG</Link>
          </li>
          <li>CONTACT</li>
          <div className="navsearch">
            <div>
              <Image src={search} alt="" />
            </div>
            <Link href="./cart">
              <div>
                <Image src={bluecart} alt="" />
              </div>
            </Link>
          </div>
        </div>
        <Link href="./navbar">
          {/* <div className="ham">
            <Image src={ham} alt="" />
          </div> */}
        </Link>
      </nav>
    </>
  );
}
