import axios from "axios";

async function loadProducts(){
  try{
    const response=await axios.get(`${import.meta.env.VITE_API_BASE_URL}`);
    return response.data;
  }
  catch(error){
    console.error(`unable to fetch data due to : ${error.message}`);
  }
}

export default loadProducts;