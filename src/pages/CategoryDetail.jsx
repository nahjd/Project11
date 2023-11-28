import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CategoryDetail = () => {
 const { id }=useParams();
 console.log(id);

 axios.get("http://localhost:3000/categories/${id}")

  return (
    <h1>Detail</h1>
  )
}

export default CategoryDetail