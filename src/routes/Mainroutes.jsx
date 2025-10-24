import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Home from '../pages/Home'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/recipes" element={<Recipes/>}/>
      <Route path="/recipes/details/:id" element={<SingleRecipe/>}/>
      <Route path="/create-recipe" element={<Create/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    )
}

export default Mainroutes