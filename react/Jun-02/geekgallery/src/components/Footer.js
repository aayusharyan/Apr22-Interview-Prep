import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
        <Container>
          <Navbar.Brand>Developed by Aayush and Team!</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer