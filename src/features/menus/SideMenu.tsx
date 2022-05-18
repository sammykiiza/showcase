import React from 'react'
import { Link } from 'react-router-dom'
import { MapIcon, ChartPieIcon, PresentationChartLineIcon, CurrencyDollarIcon, ClipboardListIcon, UserIcon } from '@heroicons/react/solid'


interface Navigation {
  name: string,
  href: string,
  icon: React.FC,
  current: boolean
}

const navigation: Navigation[] = [
  { name: 'Map', href: '', icon:MapIcon, current: true },
  { name: 'Dashboard', href: 'dashboard', icon:ChartPieIcon, current: false },
  { name: 'Road Network', href: 'road-network', icon:ChartPieIcon, current: false },
  { name: 'Road Inventory', href: 'road-inventory', icon:ChartPieIcon, current: false },
  { name: 'Planning', href: 'planning', icon:PresentationChartLineIcon, current: false },
  { name: 'Finance', href: 'finance', icon:CurrencyDollarIcon, current: false },
  { name: 'Contract Management', href: 'contract-management', icon:ClipboardListIcon, current: false },
  { name: 'User Management', href: 'user-management', icon:UserIcon, current: false },
]

type IconProps = {
  name:React.FC
}

const Icon = (props:IconProps) => {
  return React.createElement(props.name)
}

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

function SideMenu() {
  return (
    <div className="flex absolute top-0 min-h-screen w-[30%] md:w-[15%] bg-gray-900">
    <div>
      <div className="mb-10 pt-5">
        {navigation.map((item) => (
          <div className='flex flex-row hover:bg-sky-900'> 
            <div className='text-white basis-[12.5%] ml-2 mt-3'>
              <Icon name={item.icon}/>
            </div>
            <Link 
              to={`/${item.href}`}
              key={item.name}
              className={classNames(
                "flex items-center text-[17px] px-6 py-2.5 text-white hover:text-white basis-[87.5%]"
              )}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default SideMenu
