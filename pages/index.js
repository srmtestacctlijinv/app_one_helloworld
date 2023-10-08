import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Box, Chip, Stack, Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
     <title>
      Next Js | home 
     </title>
     <meta name ="keyword" contents="home"/>

    </Head>
    <Box sx={{marginBottom:20}}>
    <Stack alignContent='center' justifyContent='center'>
    <Image src='/1.png' width={500} height={200} marginTop={20}/>
    <Stack alignSelf='flex-start' spacing={5} mt={10} mb={20}>
      <Typography variant='h3'>
        Introduction
      </Typography>
      <Typography color='grey'>
    One option for sending 1,000 texts at once is to use a bulk SMS service like SimpleTexting. These services allow you to send hundreds or thousands of texts at once, which is more efficient than using a messaging platform that limits the number of messages you can send in 24 hours.
    </Typography>
    </Stack>
    <Link href="/nested"><Chip label="Go to user"/></Link>
    </Stack>
    </Box>
    </>
  )
}
