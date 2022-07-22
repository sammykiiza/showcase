import React from 'react'

interface TitleProps {
 title: string   
}

function PageTitle(props:TitleProps) {
  return (
    <span className='text-lg text-medium'>
        {props.title}
    </span>
  )
}

export default PageTitle