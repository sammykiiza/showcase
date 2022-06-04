import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {RootState} from '../../app/store'
import { toggle1, toggle2, toggle3, toggle4, toggle5, toggle6, toggle7, toggleMenu } from './dropDownSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBook, faBuilding, faCubesStacked, faFolder, faHdd, faIndustry, faInfo, faInfoCircle, faLineChart, faLink, faMap, faMapMarker, faMapPin, faMoneyBill, faRoad, faTh, faUser, faUsers, faWrench } from '@fortawesome/free-solid-svg-icons'


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
  const menuState = useAppSelector((state:RootState) => state.dropDown.closeMenu);
  const dispatch = useAppDispatch();
  return (
    <>
    <div 
      className={
        (menuState? "transform transition ease-in-out duration-300 -translate-x-full" : "transform transition ease-in-out duration-300 translate-x-0") + " flex flex-col absolute top-0 left-0 min-h-screen w-[30%] md:w-[15%] bg-gradient-to-r from-indigo-700 to-blue-700"
      }
    >
      <div className='ml-0.5'>
        <div className="mb-10">
          <div className='py-4 flex'> 
            <FontAwesomeIcon icon={faMap} color="white" className='basis-[15%]' size='lg'/>

            <Link
              to=''
              className={classNames(
                "basis-[85%] ml-[10px] text-base text-white hover:text-slate-300"
              )}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className='-mt-[38px] ml-0.5'>
        <div className="mb-10">
          <div className='py-4 flex'>
            <FontAwesomeIcon icon={faLink} color="white" className='basis-[15%]' size='lg'/>
            <Link
              to=''
              className={classNames(
                "basis-[85%] ml-[10px] text-base text-white hover:text-slate-300"
              )}
              onClick={() => dispatch(toggle1())}
            >
              Road Network
            </Link>
          </div>
            
            <div className={(!dropDown1? 'hidden': 'block') + ' bg-slate-100 py-2'}>
              <ul className='fa-ul text-base space-y-3'>
                <li>
                  <FontAwesomeIcon icon={faRoad} className="text-indigo-700" listItem/>
                  <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Roads</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapMarker} className="text-indigo-700" listItem/>
                  <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Regions</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapPin} className="text-indigo-700" listItem/>
                  <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Locations</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faTh} className="text-indigo-700" listItem/>
                  <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Road Types</a>
                </li>
              </ul>
            </div>
        </div>
      </div>

      <div className='-mt-[38px] ml-0.5'>
        <div className="mb-10">
          <div className='py-4 flex'> 
            <FontAwesomeIcon icon={faCubesStacked} color="white" className='basis-[15%]' size='lg'/>

            <Link
              to=''
              className={classNames(
                "basis-[85%] ml-[10px] text-base text-white hover:text-slate-300"
              )}
              onClick={() => dispatch(toggle2())}
            >
              Road Inventory
            </Link>
          </div>

          <div className={(!dropDown2? 'hidden': 'block') + ' bg-slate-100 py-2'}>
            <ul className=' fa-ul text-base space-y-3'>
              <li>
                <FontAwesomeIcon icon={faIndustry} className="text-indigo-700" listItem/>
                <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Inventory Data</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faHdd} className="text-indigo-700" listItem/>
                <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Road and Section Data</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='-mt-[38px] ml-0.5'>
        <div className="mb-10">
          <div className='py-4 flex'> 
            <FontAwesomeIcon icon={faInfoCircle} color="white" className='basis-[15%]' size='lg'/>

            <Link
              to=''
              className={classNames(
                "basis-[85%] ml-[10px] text-base text-white hover:text-slate-300"
              )}
              onClick={() => dispatch(toggle7())}
            >
              Road Condition
            </Link>
          </div>

          <div className={(!dropDown7? 'hidden': 'block') + ' bg-slate-100 py-2'}>
            <ul className=' fa-ul text-base space-y-3'>
              <li>
                <FontAwesomeIcon icon={faBuilding} className="text-indigo-700" listItem/>
                <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Functional Assesment</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faInfoCircle} className="text-indigo-700" listItem/>
                <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Material Information</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faInfo} className="text-indigo-700" listItem/>
                <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Surface Distress</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='-mt-[38px] ml-0.5'>
        <div className="mb-10">
          <div className='py-4 flex'> 
            <FontAwesomeIcon icon={faLineChart} color="white" className='basis-[15%]' size='lg'/>

            <Link
              to=''
              className={classNames(
                "basis-[85%] ml-[10px] text-base text-white hover:text-slate-300"
              )}
              onClick={() => dispatch(toggle3())}
            >
              Planning
            </Link>
          </div>

          <div className={(!dropDown3? 'hidden': 'block') + ' bg-slate-100 py-2'}>
            <ul className=' fa-ul text-base space-y-3'>
              <li>
                <FontAwesomeIcon icon={faMapPin} className="text-indigo-700" listItem/>
                <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Inventory Data</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faMapPin} className="text-indigo-700" listItem/>
                <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Road and Section Deta</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='-mt-[38px] ml-0.5'>
        <div className="mb-10">
          <div className='py-4 flex'> 
            <FontAwesomeIcon icon={faMoneyBill} color="white" className='basis-[15%]' size='lg'/>

            <Link
              to=''
              className={classNames(
                "basis-[85%] ml-[10px] text-base text-white hover:text-slate-300"
              )}
              onClick={() => dispatch(toggle4())}
            >
              Finance
            </Link>
          </div>

          <div className={(!dropDown4? 'hidden': 'block') + ' bg-slate-100 py-2'}>
            <ul className=' fa-ul text-base space-y-3'>
              <li>
                <FontAwesomeIcon icon={faFolder} className="text-indigo-700" listItem/>
                <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Projects/Programs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='-mt-[38px] ml-0.5'>
        <div className="mb-10">
          <div className='py-4 flex'> 
            <FontAwesomeIcon icon={faWrench} color="white" className='basis-[15%]' size='lg'/>

            <Link
              to=''
              className={classNames(
                "basis-[85%] ml-[10px] text-base text-white hover:text-slate-300"
              )}
              onClick={() => dispatch(toggle5())}
            >
              Contract Management
            </Link>
          </div>

          <div className={(!dropDown5? 'hidden': 'block') + ' bg-slate-100 py-2'}>
            <ul className=' fa-ul text-base space-y-3'>
              <li>
                <FontAwesomeIcon icon={faBook} className="text-indigo-700" listItem/>
                <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Contracts</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faUsers} className="text-indigo-700" listItem/>
                <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Contractors</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='-mt-[38px] ml-0.5'>
        <div className="mb-10">
          <div className='py-4 flex'> 
            <FontAwesomeIcon icon={faUser} color="white" className='basis-[15%]' size='lg'/>

            <Link
              to=''
              className={classNames(
                "basis-[85%] ml-[10px] text-base text-white hover:text-slate-300"
              )}
              onClick={() => dispatch(toggle6())}
            >
              User Management
            </Link>
          </div>

          <div className={(!dropDown6? 'hidden': 'block') + ' bg-slate-100 py-2'}>
            <ul className=' fa-ul text-base space-y-3'>
              <li>
                <FontAwesomeIcon icon={faUsers} className="text-indigo-700" listItem/>
                <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Users</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faUser} className="text-indigo-700" listItem/>
                <a href="/" className='text-indigo-700 mt-3 hover:text-black'>Roles</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <button
        className={(menuState? 'transform transition ease-in-out duration-300 -translate-x-[800%]' : 'transform transition ease-in-out duration-300 translate-x-0') + ' absolute top-3 left-[13%]'}
        onClick={() => dispatch(toggleMenu())}
      >
        <FontAwesomeIcon icon={faBars} className={(menuState? 'text-indigo-700 hover:text-black' : '') + ' text-white text-2xl hover:text-slate-300'} />
      </button>
    </>
  )
}

export default SideMenu
