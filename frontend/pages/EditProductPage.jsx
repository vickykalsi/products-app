import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "../stylesheets/productForm.module.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ProductForm from "../components/ProductForm";

function EditProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({ name: "", image: "", price: "" });
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/api/v1/products/${id}`, data);
      toast.success("product has been successfully edited!");
      setData({ name: "", image: "", price: "" });
      navigate("/");
    }
    catch (error) {
      console.error(`unable to send data for patch request due to error : ${error}`);
    }
  }
  return <>
    <form onSubmit={handleSubmit} className={styles["label-container"]}>
    <p>Enter only those details which are to be modified!!</p>
      <ProductForm data={data} setData={setData} />
      <button type="submit">edit this product</button>
    </form>
  </>
}

export default EditProductPage;