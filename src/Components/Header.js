import React from 'react'

function Header() {
  return (
    <>
        <div className='progressbar-wapper'>
            <ul class="list-unstyled multi-steps">
                <li>Form Selection</li>
                <li className="is-active">Set up</li>
                <li className="">Form Creation</li>
                <li className="">Review</li>
            </ul>
      </div>
    </>
  )
}

export default Header