import styles from "../stylesheets/productForm.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ProductForm from "../components/ProductForm";

function AddNewProductPage() {
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    if(!data.name || !data.image || !data.price){
      toast.error("please fill in all the product details");
    }
    else {
      try {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/products`, data);
        toast.success("product has been successfully created!");
        setData({ name: "", image: "", price: "" });
        navigate("/");
      }
      catch (error) {
        console.error(`unable to post data due to : ${error}`);
      }
    }
  }
  const [data, setData] = useState({ name: "", image: "", price: "" });
  return <>
    <form onSubmit={handleSubmit} className={styles["label-container"]}>
      <ProductForm data={data} setData={setData} />
      <button type="submit">create a new product</button>
    </form>
  </>
}

export default AddNewProductPage;