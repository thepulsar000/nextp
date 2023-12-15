import styles from "./page.module.css";
import { Button } from "./heading";

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.gap}`}>
        <h4>INFORMATION</h4>
        <li>Home</li>
        <li>Blog</li>
        <li>About Us</li>
        <li>Menu</li>
        <li>Contact Us</li>
      </div>
      <div className={`${styles.gap}`}>
        <h4>TOP ITEMS</h4>
        <li>Pepperoni</li>
        <li>Swiss Mushroom</li>
        <li>Barbecue Chicken</li>
        <li>Vegetarian</li>
        <li>More & Cheese</li>
      </div>
      <div className={`${styles.gap}`}>
        <h4>OTHERS</h4>
        <li>Checkout</li>
        <li>Cart</li>
        <li>Product</li>
        <li>Location</li>
        <li>Legal</li>
      </div>
      <div className={`${styles.gap}`}>
        <h4>SOCIAL MEDIA</h4>
        <p>Sign up and get exclusive offers, coupons and more</p>
        <div>
          <Button text="SIGN UP" />
        </div>
      </div>
    </footer>
  );
}
