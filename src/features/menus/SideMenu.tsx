import React from 'react'
import { Link } from 'react-router-dom'
import { MapIcon, ChartPieIcon, PresentationChartLineIcon, CurrencyDollarIcon, ClipboardListIcon, UserIcon } from '@heroicons/react/solid'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {RootState} from '../../app/store'
import { toggle1, toggle2, toggle3, toggle4, toggle5, toggle6, toggle7 } from './dropDownSlice'

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
  const dropDown1 = useAppSelector((state:RootState) => state.dropDown.open1);
  const dropDown2 = useAppSelector((state:RootState) => state.dropDown.open2);
  const dropDown3 = useAppSelector((state:RootState) => state.dropDown.open3);
  const dropDown4 = useAppSelector((state:RootState) => state.dropDown.open4);
  const dropDown5 = useAppSelector((state:RootState) => state.dropDown.open5);
  const dropDown6 = useAppSelector((state:RootState) => state.dropDown.open6);
  const dropDown7 = useAppSelector((state:RootState) => state.dropDown.open7);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col absolute top-0 left-0 min-h-screen w-[30%] md:w-[15%] bg-gray-900">
      <div>
        <div className="mb-10">
          <div className='px-6 py-4 flex hover:bg-sky-900'> 
            <div className='basis-[22%] text-white'>
              <Icon name={MapIcon}/>
            </div>
            <Link
              to=''
              className={classNames(
                "basis-[78%] ml-[10px] mt-1 text-base text-white hover:text-white"
              )}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className='-mt-[38px]'>
        <div className="mb-10">
          <div className='px-6 py-4 flex hover:bg-sky-900'> 
            <div className='basis-[22%] text-white'>
              <Icon name={ChartPieIcon}/>
            </div>
            <Link
              to=''
              className={classNames(
                "basis-[78%] ml-[10px] mt-1 text-base text-white hover:text-white"
              )}
              onClick={() => dispatch(toggle1())}
            >
              Road Network
            </Link>
          </div>

          <div className={(!dropDown1? 'hidden': 'block') + ' flex flex-col mx-8'}>
            <a href="/" className='text-white mt-3'>Roads</a>
            <a href="/" className='text-white mt-3'>Regions</a>
            <a href="/" className='text-white mt-3'>Locations</a>
            <a href="/" className='text-white mt-3'>Road Types</a>
          </div>
        </div>
      </div>

      <div className='-mt-[38px]'>
        <div className="mb-10">
          <div className='px-6 py-4 flex hover:bg-sky-900'> 
            <div className='basis-[22%] text-white'>
              <Icon name={ChartPieIcon}/>
            </div>
            <Link
              to=''
              className={classNames(
                "basis-[78%] ml-[10px] mt-1 text-base text-white hover:text-white"
              )}
              onClick={() => dispatch(toggle2())}
            >
              Road Inventory
            </Link>
          </div>

          <div className={(!dropDown2? 'hidden': 'block') + ' flex flex-col mx-8'}>
            <a href="/" className='text-white mt-3'>Inventory Data</a>
            <a href="/" className='text-white mt-3'>Road and Section Deta</a>
          </div>
        </div>
      </div>

      <div className='-mt-[38px]'>
        <div className="mb-10">
          <div className='px-6 py-4 flex hover:bg-sky-900'> 
            <div className='basis-[22%] text-white'>
              <Icon name={PresentationChartLineIcon}/>
            </div>
            <Link
              to=''
              className={classNames(
                "basis-[78%] ml-[10px] mt-1 text-base text-white hover:text-white"
              )}
              onClick={() => dispatch(toggle7())}
            >
              Road Condition
            </Link>
          </div>

          <div className={(!dropDown7? 'hidden': 'block') + ' flex flex-col mx-8'}>
            <a href="/" className='text-white mt-3'>Functional Assesment</a>
            <a href="/" className='text-white mt-3'>Material Information</a>
            <a href="/" className='text-white mt-3'>Surface Distress</a>
          </div>
        </div>
      </div>

      <div className='-mt-[38px]'>
        <div className="mb-10">
          <div className='px-6 py-4 flex hover:bg-sky-900'> 
            <div className='basis-[22%] text-white'>
              <Icon name={PresentationChartLineIcon}/>
            </div>
            <Link
              to=''
              className={classNames(
                "basis-[78%] ml-[10px] mt-1 text-base text-white hover:text-white"
              )}
              onClick={() => dispatch(toggle3())}
            >
              Planning
            </Link>
          </div>

          <div className={(!dropDown3? 'hidden': 'block') + ' flex flex-col mx-8'}>
            <a href="/" className='text-white mt-3'>Link 1</a>
            <a href="/" className='text-white mt-3'>Link 2</a>
            <a href="/" className='text-white mt-3'>Link 3</a>
          </div>
        </div>
      </div>

      <div className='-mt-[38px]'>
        <div className="mb-10">
          <div className='px-6 py-4 flex hover:bg-sky-900'> 
            <div className='basis-[22%] text-white'>
              <Icon name={CurrencyDollarIcon}/>
            </div>
            <Link
              to=''
              className={classNames(
                "basis-[78%] ml-[10px] mt-1 text-base text-white hover:text-white"
              )}
              onClick={() => dispatch(toggle4())}
            >
              Finance
            </Link>
          </div>

          <div className={(!dropDown4? 'hidden': 'block') + ' flex flex-col mx-8'}>
            <a href="/" className='text-white mt-3'>Projects/Programs</a>
          </div>
        </div>
      </div>

      <div className='-mt-[38px]'>
        <div className="mb-10">
          <div className='px-6 py-4 flex hover:bg-sky-900'> 
            <div className='basis-[22%] mt-1 text-white'>
              <Icon name={ClipboardListIcon}/>
            </div>
            <Link
              to=''
              className={classNames(
                "basis-[78%] ml-[10px] text-base text-white hover:text-white"
              )}
              onClick={() => dispatch(toggle5())}
            >
              Contract Management
            </Link>
          </div>

          <div className={(!dropDown5? 'hidden': 'block') + ' flex flex-col mx-8'}>
            <a href="/" className='text-white mt-3'>Contracts</a>
            <a href="/" className='text-white mt-3'>Contractors</a>
          </div>
        </div>
      </div>

      <div className='-mt-[38px]'>
        <div className="mb-10">
          <div className='px-6 py-4 flex hover:bg-sky-900'> 
            <div className='basis-[22%] mt-1 text-white'>
              <Icon name={UserIcon}/>
            </div>
            <Link
              to=''
              className={classNames(
                "basis-[78%] ml-[10px] text-base text-white hover:text-white"
              )}
              onClick={() => dispatch(toggle6())}
            >
              User Management
            </Link>
          </div>

          <div className={(!dropDown6? 'hidden': 'block') + ' flex flex-col mx-8'}>
            <a href="/" className='text-white mt-3'>Users</a>
            <a href="/" className='text-white mt-3'>Roles</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideMenu
