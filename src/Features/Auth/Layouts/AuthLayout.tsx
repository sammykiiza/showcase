import React from 'react'
import { ChildrenProps } from '../../../Types/LayoutProps/childrenProps'

/**
 * @description Layout for the Auth pages .i.e. Registration, Login, Password Management pages, etc. 
 * @param props 
 * @returns 
 */
function AuthLayout(props:ChildrenProps) {
  return (
      <>
      <div className='h-screen bg-gradient-to-r from-indigo-700 to-blue-700'>
        {props.children}
      </div>
      </>

  )
}

export default AuthLayout