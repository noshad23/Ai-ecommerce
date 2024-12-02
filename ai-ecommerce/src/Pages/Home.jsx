import React from 'react'
import { Typography,Container } from '@mui/material'
function Home() {
  return (
    <div>
        <Container>
            <Typography variant='h3' gutterBottom>
            Welcome to the AI-Powered E-commerce Platform
            </Typography>
            <Typography variant='body1'>
            Browse products and enjoy personalized recommendations.
            </Typography>
        </Container>
    </div>
  )
}

export default Home