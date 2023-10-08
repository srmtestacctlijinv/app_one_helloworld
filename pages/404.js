import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const PageNotFound = () => {

const router= useRouter()

useEffect(()=>{
const id=setTimeout(()=>{
    router.push('/')  
},3000)  

return ()=>{
    clearTimeout
}
},[]);


  return (
    <Box sx={{margin:20}}>
        <Typography variant='t5'>
        whoops!! Page not found
        </Typography>
        <Link href='/'> <Button variant='text'>Go to Home page</Button>
        </Link>
    </Box>
  )
}

export default PageNotFound