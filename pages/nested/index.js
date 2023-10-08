import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import React from 'react'


export const getStaticProps = (async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const repo = await res.json()
  return { props: { users:repo } ,};
}) 


const index = ({users}) => {
  console.log(users);
  return (
    <>
    <List>
      {
        users && users.map((user)=>{  
          return(
         <Link href={`nested/${user.id}`} key={user.id}>
         <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={user.name}>
            </ListItemText>
          </ListItemButton>
         </ListItem>
         </Link>
          );
        })}
    </List>
    </>
  );
};

export default index