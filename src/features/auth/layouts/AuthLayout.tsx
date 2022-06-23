import React from 'react'

type Props = {
    children?: React.ReactNode
}

function AuthLayout(props:Props) {
  return (
      <>
      <div className='h-screen bg-gradient-to-r from-indigo-700 to-blue-700'>
        {props.children}
      </div>
      </>

  )
}

export default AuthLayout