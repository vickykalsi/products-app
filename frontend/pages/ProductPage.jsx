import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../stylesheets/productPage.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/products/${id}`);
        setProduct(response.data.product);
      }
      catch (error) {
        console.error(`unable to fetch product due to error : ${error}`);
      }
    }
    getProduct();
  }, [id]);
  async function handleClick(e) {
    e.preventDefault();
    if (confirm("Do you want to delete this product?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/${id}`);
        toast.success("product has been successfully deleted!");
        navigate("/");
      }
      catch (error) {
        console.error(`unable to send data for deletion due to error : ${error}`);
      }
    }
    else
      return;
  }

  return <div className={styles["product-container"]}>
    <div className={styles["product-div"]}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={`${product.name}-image`} width="300px" height="300px" className={styles["product-image"]} />
      <p>{product.price}</p>
    </div>
    <div className={styles["navbar-container"]}>
      <h2><NavLink to={`/edit-product/${id}`}>edit this product</NavLink></h2>
      <button type="submit" onClick={handleClick}>delete this product</button>
    </div>
  </div>
}

export default ProductPage;