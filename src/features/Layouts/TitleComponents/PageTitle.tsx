import React from 'react'

interface SectionProps {
 section?: string   
}

function PageTitle(props:SectionProps) {
  return (
    <span className='text-lg text-medium'>
        {props.section}
    </span>
  )
}

export default PageTitle