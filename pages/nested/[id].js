import { Stack, Typography } from '@mui/material'
import React from 'react'

export const getStaticPaths = async ()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonResp=await response.json()
    const paths = jsonResp.map((user)=>
    {
        return {
            params:{id:user.id.toString()}
        }
    })
  
    return{
    paths,
    fallback:false
  };
}
export const getStaticProps = async (context)=>{
    const id=context.params.id;
    const response= await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const jsonResp=await response.json()
   
  
    return{
      props: {user:jsonResp}
  };
}




const Detail = ({user}) => {
    console.log(user);
  return (
  <Stack spacing={5} m={20}>
  <Typography variant='h3'>{user.name}</Typography>
  <Typography variant='subtitle1' color='grey'>{user.username}</Typography>
  <Typography variant='subtitle2' color='grey'>{user.email}</Typography>
  </Stack>

    )
}

export default Detail