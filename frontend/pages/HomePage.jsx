import storedProducts from "../utilities/loadAllProducts";
import { useState,useEffect } from "react";
import ProductCard from "../components/ProductCard";
import styles from "../stylesheets/homePage.module.css";

function HomePage(){
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    async function loadData(){
      const data=await storedProducts();
      setProducts(data.products);
    }
    loadData();
  },[]);
  return <main className={styles["products-container"]}>
    {(products.length>0)?
    products.map(product=>{
      return <ProductCard key={product.id} product={product}/>
    }):<h1>Start adding new products....</h1>}
  </main>
}

export default HomePage;