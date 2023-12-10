import styles from "./styles.module.css"


export const metadata = {
  title: "About",
  description: "Product page",
};


export default function AboutLayout({ children }) {
  return (
  <>
  <main className={styles.main}>
    {children}
  </main>
  </>
  )
}


