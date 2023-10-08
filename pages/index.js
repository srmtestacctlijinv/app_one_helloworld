import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Chip, Stack, Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Stack alignItems='center' justifyContent='center'>
        <Image src="/1.png" width={500} height={250} margintop={20} />
        <Stack alignItems='flex-start' spacing={2} mb={20}>
          <Typography variant='h3'>
            Introduction
          </Typography>
          <Typography>
            By library, we mean React provides helpful functions to build UI, but leaves it up to the developer where to use those functions in their application.
            Part of React’s success is that it is relatively unopinionated about the other aspects of building applications. This has resulted in a flourishing ecosystem of third-party tools and solutions.
            It also means, however, that building a complete React application from the ground up requires some effort. Developers need to spend time configuring tools and reinventing solutions for common application requirements.
          </Typography>
        </Stack>
        <Link href={"/nested"}> <Chip label="Go to User" /></Link>
      </Stack>
    </>
  )
}
