import { useEffect } from "react";
import axios from "../utils/axios"

const Home = () => {
  const getproduct= async()=>{
    try{
      const {data}=await axios.get("/products");
      console.log(data);
    }
    catch (error){
      console.log(error);
    }
  };

  useEffect(()=>{
    getproduct();
  },[])

  return (
    <div>
      <h1>Home ❤️</h1>
      <button onClick={getproduct}>Show Products</button>
    </div>
  )
}

export default Home