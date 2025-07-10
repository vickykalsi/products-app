import { NavLink } from "react-router-dom";
import styles from "../stylesheets/productCard.module.css";

function ProductCard({ product }) {
  return <div className={styles["product-container"]}>
    <h2><NavLink className={styles["product-name"]} to={`/product/${product.id}`}>{product.name}</NavLink></h2>
    <img src={product.image} alt={product.name} width="200px" height="200px" className={styles["product-image"]}/>
    <p>{product.price}</p>

  </div>
}

export default ProductCard;