import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex items-center mb-10 justify-center gap-x-10 text-sm">
      <NavLink className={(e)=>e.isActive ? "text-red-400" : ""} to='/'>Home</NavLink>

      <NavLink className={(e)=>e.isActive ? "text-red-400" : ""} to='/about'>About</NavLink>

      <NavLink className={(e)=>e.isActive ? "text-red-400" : ""} to='/recipes'>Recipes</NavLink>

      <NavLink className={`px-4 rounded py-2 bg-gray-900  ${(e)=>e.isActive ? "text-red-400" : ""}`} to='/create-recipe'>Create Recipe</NavLink>
    </div>
  )
}

export default Navbar;