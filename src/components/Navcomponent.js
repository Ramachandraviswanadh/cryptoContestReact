import React from 'react'
import {Navbar ,Container} from 'react-bootstrap'

function Navcomponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{textAlign:'center'}}>
            <img
              alt="cryptologo"
              src="https://image.cnbcfm.com/api/v1/image/107017923-1645373318428-gettyimages-1366475373-2022_jan_02_olemedia_002.jpeg?v=1648669888"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Crypto Tracker
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Navcomponent