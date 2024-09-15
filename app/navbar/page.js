import style from "./page.module.css";

export default function navBar() {
  return (
    <div className={style.navbar}>
      <ul>
        <li>HOME</li>
        <li>CONTACT</li>
        <li>PRODUCT</li>
        <li>BLOG</li>
      </ul>
    </div>
  );
}
