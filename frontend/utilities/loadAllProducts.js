import axios from "axios";

async function loadProducts(){
  try{
    const response=await axios.get("http://localhost:3000/api/v1/products");
    return response.data;
  }
  catch(error){
    console.error(`unable to fetch data due to : ${error.message}`);
  }
}

export default loadProducts;