import { Stack, Typography } from '@mui/material'
import React from 'react'

const contacts = () => {
  return (
    <Stack spacing={5} mt={10} mb={20}>
      <Typography variant='h3'>
       Contacts
      </Typography>
      <Typography>
      By library, we mean React provides helpful functions to build UI, but leaves it up to the developer where to use those functions in their application.
Part of React’s success is that it is relatively unopinionated about the other aspects of building applications. This has resulted in a flourishing ecosystem of third-party tools and solutions.
It also means, however, that building a complete React application from the ground up requires some effort. Developers need to spend time configuring tools and reinventing solutions for common application requirements.
      </Typography>
    </Stack>
  )
}

export default contacts