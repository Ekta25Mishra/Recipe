import { useContext } from "react";
import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";

const SingleRecipe = () => {

  const navigate=useNavigate()
  const {data, setdata}=useContext(recipecontext);
  const {register, handleSubmit, reset}=useForm();

  const SubmitHandler=(recipe)=>{
  };

  const params =useParams();
  const recipe=data.find((recipe)=>params.id==recipe.id);
  console.log(recipe);
  
  return recipe ?(
    <div className="w-full flex">
    <div className="left w-1/2 p-2">
      <h1 className="text-4xl font-black">{recipe.title} </h1>
      <img className="h-[20vh]" src={recipe.image} alt="" />
    </div>

    <div className="right w-1/2 p-2">
     <form className="w-1/2 p-2" onSubmit={handleSubmit(SubmitHandler)}>
      <input
      className="block border-b outline-0 p-2"
      {...register("image")}
      value={recipe.image}
       type="url" 
       placeholder="Enter image url"
      />
      <small className="text-red-400">Error</small>

      <input
      className="block border-b outline-0 p-2"
      {...register("title")}
      value={recipe.title}
       type="text" 
       placeholder="Recipe title" 
      />

      <input
      className="block border-b outline-0 p-2"
      {...register("chef")}
      value={recipe.chef}
       type="text" 
       placeholder="Chef Name" 
      />
      

      <textarea
      className="block border-b outline-0 p-2"
      {...register("desc")} 
      value={recipe.desc}
       placeholder="Start from here" 
      ></textarea>
      

       <textarea
      className="block border-b outline-0 p-2"
      {...register("ingr")} 
       placeholder="Write ingredients seperated by comma" 
      ></textarea>
      

      <textarea
      className="block border-b outline-0 p-2"
      {...register("inst")} 
       placeholder="Write instructions seperated by comma" 
      ></textarea>
      

      <select
      className="block text-gray-500 border-b outline-0 p-2"
      {...register("category")} 
      value={recipe.category}
       placeholder="Write instructions seperated by comma" 
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>

      <button className="block mt-5 bg-blue-900 px-4 py-2 rounded">Update Recipe</button>
      <button className="block mt-5 bg-red-900 px-4 py-2 rounded">Delete Recipe</button>
    </form>
    </div>
    </div>
  ):(
    "Loading..."
  );
};

export default SingleRecipe