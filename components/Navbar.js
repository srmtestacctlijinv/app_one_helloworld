import React from 'react'
import Link from 'next/link';
import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyleToolBar=styled(Toolbar)({
display:'flex',
justifyContent:'space-between',
background:'#ccffcc',
color:'red'
}
)

const Navbar = () => {
  return (
    <AppBar position='static'>
    <StyleToolBar>
      <Typography variant='h5'>NextJs Portfolio</Typography>
        <Stack direction={'row'} justifyContent={'space-between'} width={'20%'}>
          <Link href='/' color='white'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/contacts'>Contact</Link>
        </Stack>
    </StyleToolBar>
    </AppBar>
  )
}

export default Navbar