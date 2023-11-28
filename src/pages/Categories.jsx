import React , {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { style } from '@mui/system';
const Categories = () => {
    let [data,setData]=useState([]);
    useEffect(()=>{
        axios("http://localhost:3000/categories").then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    },[])
  return (
   data.map(elem=>{
    return <Card sx={{ maxWidth: 345  }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {elem.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {elem.id}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">{elem.description}</Button>
      <Button style={{background:"red", color:"white",display:"block", margin:"20px auto"}} size="small"
      >
        <Link to={"/categories/" + elem.id}> Detail</Link>
       </Button>

    </CardActions>
  </Card>
   })
   
  )
}

export default Categories