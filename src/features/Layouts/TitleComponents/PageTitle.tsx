import React from 'react'
import { SectionProps } from '../../../Types/sectionProps'

function PageTitle(props:SectionProps) {
  return (
    <span className='text-lg text-medium'>
        {props.section}
    </span>
  )
}

export default PageTitle