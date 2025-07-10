import Layout from "../components/Layout";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ErrorComponent from "../components/ErrorComponent";
import AddNewProductPage from "../pages/AddNewProductPage";
import EditProductPage from "../pages/EditProductPage";
import {Toaster} from "react-hot-toast";

function App(){
  const router=createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    errorElement:<ErrorComponent/>,
    children:[{
      index:true,
      element:<HomePage/>
    },{
      path:"product/:id",
      element:<ProductPage/>
    },{
      path:"add-a-new-product",
      element:<AddNewProductPage/>
    },{
      path:"edit-product/:id",
      element:<EditProductPage/>
    }],
  }]);
  return <>
    <Toaster/>
    <RouterProvider router={router}/>
  </>
}

export default App;