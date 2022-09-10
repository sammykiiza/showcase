import React from 'react'
import { SectionProps } from '../../Types/LayoutProps/sectionProps'

/**
 * @description The component that renders the current system section name will be displayed. e.g. Road Network, Road Inventory.
 * @param props 
 * @returns 
 */
function PageTitle(props:SectionProps) {
  return (
    <span className='text-lg text-medium'>
        {props.section}
    </span>
  )
}

export default PageTitle