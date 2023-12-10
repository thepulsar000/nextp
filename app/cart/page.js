import styles from "./style.module.css";

export default function Cart() {
  return (
    <div className={`${styles.cart}`}>
      <div className={`${styles.cart_items}`}>
        <table className={`${styles.table}`}>
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Name</th>
              <th scope="col">Extra</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Image</p>
              </td>
              <td>
                <p>Burga pizza</p>
              </td>
              <td></td>
              <td>$40</td>
              <td>4</td>
              <td>$160</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={`${styles.cart_total}`}>
        <h2>CART TOTAL</h2>
        <div>
          <p>
            <span>Subtotal:</span> $160
          </p>
          <p>
            <span>Discount:</span> $79.60
          </p>
          <p>
            <span>Total:</span> $160
          </p>
        </div>
        <div className={`${styles.button}`}>
          <button>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
}
