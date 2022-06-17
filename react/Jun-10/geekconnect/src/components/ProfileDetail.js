import React from 'react'
import { Avatar, Container, Stack, Typography } from '@mui/material'

const ProfileDetail = ({ detail }) => {
  console.log(detail);
  return (
    <Container sx={{ maxWidth: 520 }}>
      <Stack direction="row" mt={4} mb={4} gap={4}>
        <Avatar
          alt="Remy Sharp"
          src={detail?.picture}
          sx={{ width: "16rem", height: "16rem" }}
        />
        <Stack ml={4}>
          <Typography variant="h3">{detail?.firstName} {detail?.lastName}</Typography>
          <Typography variant="h4">{detail?.location?.city}, {detail?.location?.country}</Typography>
          <Typography variant="h6">Member since {(new Date(detail?.registerDate)).getUTCFullYear()}</Typography>
          <Typography variant="p">{detail?.email}</Typography>
          <Typography variant="p">{detail?.phone}</Typography>
        </Stack>
      </Stack>
    </Container>
  )
}

export default ProfileDetail