import { Stack, Typography } from '@mui/material'
import React from 'react'


export const getStaticPaths = (async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const repo = await res.json()
    const paths = repo.map((user) => {
        return {
            params: { id: user.id.toString() }
        }
    })
    return {
        paths,
        fallback: false,
    }
})

export const getStaticProps = (async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const repo = await res.json()
    return { props: { user: repo }, };
})

const Details = ({ user }) => {
    console.log(user)
    return (
        <Stack spacing={5} m={20}>
            <Typography variant='h3'>
                {user.name}
            </Typography>
            <Typography variant='subtitle1' color='gray'>  {user.username}
            </Typography>
            <Typography variant='subtitle1' color='gray'>  {user.email}

            </Typography>
        </Stack>
    )
}

export default Details