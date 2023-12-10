import style from "./style.module.css";

export const metadata = {
  title: "Product",
  description: "Product page",
};

export default function ProductLayout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
