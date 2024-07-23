import Button from 'react-bootstrap/Button';
import React from 'react'

function Footer() {
  return (
    <>
      <footer>
          <div className='d-flex justify-content-end p-3 pe-5'>
             <Button variant="primary px-5">NEXT</Button>
          </div>
      </footer>
    </>
  )
}

export default Footer