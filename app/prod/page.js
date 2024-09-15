"use client";

import styles from "./style.module.css";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import bread from "./public/bread-salad.jpg";
// import { Button } from "./heading";
import star from "./public/star.png";
import whitecart from "./public/shopping-cart-white.png";
import { useRouter } from "next/router";


const Details = [
  {
    img: bread,
    text: "Burger pizza",
    number: "$20",
    desc: "This is burga pizza",
    id: 1,
  },
  {
    img: bread,
    text: "Burger pizza",
    number: "$20",
    desc: "This is burga pizza",
    id: 2,
  },
  {
    img: bread,
    text: "Burger pizza",
    number: "$20",
    desc: "This is burga pizza",
    id: 3,
  },
  {
    img: bread,
    text: "Burger pizza",
    number: "$20",
    desc: "This is burga pizza",
    id: 4,
  },
];

function ProductDiv(props) {
  const { img, text, number, desc,id } = props;
  // const data = {img, desc, text, id, number}
  // const router = useRouter()
  // function handleClick(id){
  //   return {pathname: `./prod/${id}`, query: {data}}
  // }
  return (
    <div className={`${styles.product}`}>
      <Link href="./prod">
        <div className={`${styles.upper_prod}`}>
          <Image src={img} />
        </div>
        <div className={`${styles.lower_prod}`}>
          <div className={`${styles.flex}`}>
            <h4>{text}</h4>
            <h4 className={`${styles.red}`}>{number}</h4>
          </div>
          <div className={`${styles.stars}`}>
            <div>
              <Image src={star} alt="A star rating" />
            </div>
            <div>
              <Image src={star} alt="A star rating" />
            </div>
            <div>
              <Image src={star} alt="A star rating" />
            </div>
            <div>
              <Image src={star} alt="A star rating" />
            </div>
            <div>
              <Image src={star} alt="A star rating" />
            </div>
          </div>
          <p>{desc}</p>
          <div>
            <button>
              <div className={`${styles.whitecart}`}>
                <Image src={whitecart} alt="A white cart icon" />
              </div>
              <p>ORDER NOW</p>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function Products() {
  return (
    <>
      <div className={`${styles.products}`}>
        {Details.map((items) => {
          return (
            <div key={items.id}>
              <ProductDiv {...items} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function ProductPage(){
  return (
    <>
      <div className={`${styles.product_top}`}>
        <div>
          <button>Filter</button>
        </div>
        <div className={`${styles.sort}`}>
          <h4>Showing all 9 results</h4>
          <select name="Sort" id="">
            <option value="">Default Sorting</option>
          </select>
        </div>
      </div>
      <Products />
    </>
  );
}

