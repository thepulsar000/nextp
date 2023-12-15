// import Image from 'next/image'
import styles from "./page.module.css";
import pizza from "../public/pizza.png";
import Image from "next/image";
import onions from "../public/onions.png";
import vegpiz from "../public/vegpiz.png";
import scoop from "../public/scooped_piz.png";
import garlic from "../public/garlic.png";
import sliced from "../public/sliced.png";
import leaf from "../public/leaf.png";
import whitecart from "../public/shopping-cart-white.png";
// import Link from "next/link";
import {Products} from './prod/page';
import Strength from "./strength";
import Testimonials from "./testimonial";
import { Heading } from "./heading";
// import { Button } from "./heading";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* FIRST SECTION */}
      <section className={styles.header}>
        <div className={`${styles.main_div} ${styles.first}`}>
          <h1>
            Handmade,
            <br /> With an Extra <br />
            Pinch of <span className={styles.red}>Love</span>
          </h1>
          <p className={styles.font}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            obcaecati suscipit ipsa itaque saepe cum assumenda quam iusto natus
            pariatur
          </p>
          <div>
            <button>
              <div className={`${styles.whitecart}`}>
                <Image src={whitecart} alt="A white cart icon" />
              </div>
              <p>ORDER NOW</p>
            </button>
          </div>
        </div>
        <div className={`${styles.main_div} ${styles.second}`}>
          <div className={`${styles.pizza_onion}`}>
            <div className={`${styles.pizza}`}>
              <Image
                src={pizza}
                placeholder="blur"
                alt="Pizza with yellow toppings"
              />
            </div>

            <div className={`${styles.onion}`}>
              <div className={`${styles.onions}`}>
                <Image src={onions} placeholder="blur" alt="Sliced Onions" />
              </div>
              <div className={`${styles.vegpiz}`}>
                <Image
                  src={vegpiz}
                  placeholder="blur"
                  alt="Pizza with vegetables"
                />
              </div>
            </div>
          </div>
          <div className={`${styles.semi_circle}`}></div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className={styles.piz_garlic}>
        {/* First div */}
        <div className={`${styles.scoop}`}>
          <Image src={scoop} placeholder="blur" alt="Pizza with vegetables" />
        </div>
        {/* Second div */}
        <div>
          <h2>Daily fresh and always tasty</h2>
          <div className={`${styles.garlic_text}`}>
            <p>
              There are many variations of passages of Lorem ipsum, dolor sit
              amet consectetur adipisicing elit.
            </p>
            <div className={`${styles.garlic}`}>
              <Image
                src={garlic}
                placeholder="blur"
                alt="Pizza with vegetables"
              />
            </div>
          </div>
        </div>
      </section>

      {/* THIRD SECTION */}

      <section>
        <Heading title="Popular Dishes" subtitle="Browse our Menu" />
        <div className={`${styles.menu}`}>
          <Products />
        </div>
      </section>

      {/* FOURTH SECTION */}
      <section className={`${styles.strength}`}>
        <Heading title="Our Strength" subtitle="Why We Are The Best?" />
        <div>
          <Strength />
        </div>
        <div className={`${styles.sliced}`}>
          <Image src={sliced} />
        </div>
      </section>

      {/* FIFTH SECTION */}
      <section>
        <div className={`${styles.leaf}`}>
          <Image
            src={leaf}
            placeholder="blur"
            alt="Pizza with yellow toppings"
          />
        </div>
        <Heading title="Customer Feedback" subtitle="Client Testimonials" />
        <div>
          <Testimonials />
        </div>
      </section>
    </main>
  );
}
