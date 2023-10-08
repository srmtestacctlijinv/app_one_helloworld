import { Stack, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'

const contacts = () => {
  return (
    <>
  
    <Head>
     <title>
      Next Js | Contacts 
     </title>
     <meta name ="keyword" contents="home"/>

    </Head>
<Stack spacing={5} mt={10} mb={20}>
    <Typography variant='h3'>
    Contacts
    </Typography>
    <Typography color='grey'>
    One option for sending 1,000 texts at once is to use a bulk SMS service like SimpleTexting. These services allow you to send hundreds or thousands of texts at once, which is more efficient than using a messaging platform that limits the number of messages you can send in 24 hours.
    </Typography>
</Stack>
</>
    )
}

export default contacts