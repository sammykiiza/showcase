import React from 'react'

interface TitleProps {
 title: string   
}

function PageTitle(props:TitleProps) {
  return (
    <span className='absolute top-[15%] md:top-[18%] xl:top-[12%] 2xl:top-[19%] left-[3%] md:left-[21%] xl:left-[19%] 2xl:left-[14%]'>
        {props.title}
    </span>
  )
}

export default PageTitle