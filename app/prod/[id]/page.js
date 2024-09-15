"use client";

import { useRouter } from "next/router";
import styles from "../style.module.css";

function TheDetails({ params }) {
  const router = useRouter();
  const { data } = router.query;
  console.log(data);
  return (
    <>
      <div className={`${styles.details}`}>
        <h3>Burga pizza {params.id}</h3>
        <h5>$20</h5>
        <p>This is burga pi zza</p>

        <p>Category: Chicken, Launch, Pizza, Burger</p>
        <p>Tags: Healthy, Organic, Chicken Sauce</p>
      </div>
    </>
  );
}

export default TheDetails;
