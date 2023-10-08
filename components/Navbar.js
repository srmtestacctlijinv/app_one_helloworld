import styled from '@emotion/styled'
import { AppBar, Stack, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const StyledToolBar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between',
  background:'black'
})
const Navbar = () => {
  return (
    <AppBar position='static'>
      <StyledToolBar>
        <Typography variant='h5'>
         NEXT
        </Typography>
        <Stack direction='row' justifyContent='space-between' width='20%'>
          <Link href={'/'}>HOME</Link>
          <Link href={'/about'}>ABOUT</Link>
          <Link href={'/nested/contacts'}>CONTACTS</Link>
        </Stack>
      </StyledToolBar>
    </AppBar>
  )
}

export default Navbar