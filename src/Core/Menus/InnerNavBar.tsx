import { Popover } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

/**
 * @description The horizontal nav bar that is displayed on the main nav bar of all the sections of the system apart from the map section.
 * @returns 
 */
function InnerNavBar() {
    return (
        <>
            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={((window.location.href.indexOf("/road-network/") > -1) ? 'bg-[#2271B1]' : '') + ` text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] px-3 py-4 lg:py-2.5 font-medium h-15 lg:h-10`}>
                            <span>Road Network</span>
                            <ChevronRightIcon
                                className={`rotate-90 w-3 h-3 ml-2`}
                            />
                        </Popover.Button>

                        
                        <Popover.Panel className="absolute z-10 bg-black text-white text-sm w-40">
                            <div className="grid grid-cols-1 gap-y-1">
                                <ul className='relative'>
                                    <li className="relative" id="sidenavEx1">
                                        <a href='#!' className="flex items-center text-sm px-4 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                                            <span>Manage Roads</span>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                            </svg>
                                        </a>
                                        <ul className="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                            <li className="relative">
                                                <Link to={{pathname: '/road-network/manage-roads/road-sections'}} className="flex items-center text-xs py-4 pl-6 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out" 
                                                data-mdb-ripple="true" data-mdb-ripple-color="dark">Road Sections</Link>
                                            </li>
                                            <li className="relative">
                                                <Link to={{pathname: '/road-network/manage-roads/regions'}} className="flex items-center text-xs py-4 pl-6 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out" 
                                                data-mdb-ripple="true" data-mdb-ripple-color="dark">Regions</Link>
                                            </li>
                                            <li className="relative">
                                                <Link to={{pathname: '/road-network/manage-roads/locations'}} className="flex items-center text-xs py-4 pl-6 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out" 
                                                data-mdb-ripple="true" data-mdb-ripple-color="dark">Locations</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative" id="sidenavEx2">
                                        <a href='#!' className="flex items-center text-sm px-4 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx2" aria-expanded="true" aria-controls="collapseSidenavEx2">
                                            <span>Condition</span>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                            </svg>
                                        </a>
                                        <ul className="relative accordion-collapse collapse" id="collapseSidenavEx2" aria-labelledby="sidenavEx2" data-bs-parent="#sidenavExample2">
                                            <li className="relative">
                                                <Link to={{pathname: '/road-network/condition/functional-assessment'}} className="flex items-center text-xs py-4 pl-6 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out" 
                                                data-mdb-ripple="true" data-mdb-ripple-color="dark">Functional Assessment</Link>
                                            </li>
                                            <li className="relative">
                                                <Link to={{pathname: '/road-network/condition/material-information'}} className="flex items-center text-xs py-4 pl-6 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out" 
                                                data-mdb-ripple="true" data-mdb-ripple-color="dark">Material Information</Link>
                                            </li>
                                            <li className="relative">
                                                <Link to={{pathname: '/road-network/condition/surface-distress'}} className="flex items-center text-xs py-4 pl-6 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out" 
                                                data-mdb-ripple="true" data-mdb-ripple-color="dark">Surface Distress</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>

            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={((window.location.href.indexOf("/road-inventory/") > -1) ? 'bg-[#2271B1]' : '') + ` text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-4 lg:py-2.5 font-medium h-15 lg:h-10`}>
                            <span>Road Inventory</span>
                            <ChevronRightIcon
                                className={`rotate-90 w-3 h-3 ml-2`}
                            />
                        </Popover.Button>

                        <Popover.Panel className="absolute z-10 bg-black text-white text-sm w-36">
                            <div className="grid grid-cols-1 gap-y-1">
                                <ul className='relative'>
                                    <li className="relative" id="sidenavEx1">
                                        <a href='#!' className="flex items-center text-sm px-4 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                                            <span>Inventory</span>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                            </svg>
                                        </a>
                                        <ul className="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                            <li className="relative">
                                                <Link to={{pathname: '/road-inventory/inventory/inventory-data'}} className="flex items-center text-xs py-4 pl-3 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out" 
                                                data-mdb-ripple="true" data-mdb-ripple-color="dark">Inventory Data</Link>
                                            </li>
                                            <li className="relative">
                                                <Link to={{pathname: '/road-inventory/inventory/road-and-section-data'}} className="flex items-center text-xs py-4 pl-3 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out" 
                                                data-mdb-ripple="true" data-mdb-ripple-color="dark">Road and Section Data</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>

            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={((window.location.href.indexOf("/planning/") > -1) ? 'bg-[#2271B1]' : '') + ` text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-6 lg:py-2.5 font-medium h-15 lg:h-10`}>
                            <span>Planning</span>
                            <ChevronRightIcon
                                className={`rotate-90 w-3 h-3 ml-2`}
                            />
                        </Popover.Button>

                       
                        <Popover.Panel className="absolute z-10 bg-black text-white text-sm w-36">
                            <div className="grid grid-cols-1 gap-y-1">
                                <ul className='relative'>
                                    <li className="relative" id="sidenavEx1">
                                        <a href='#!' className="flex items-center text-sm px-4 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                                            <span>Planning</span>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                            </svg>
                                        </a>
                                        <ul className="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                            <li className="relative">
                                                <Link to={{pathname: '/planning/planning'}} className="flex items-center text-xs py-4 pl-6 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out" 
                                                data-mdb-ripple="true" data-mdb-ripple-color="dark">Planning</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>

            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={((window.location.href.indexOf("/contract-management/") > -1) ? 'bg-[#2271B1]' : '') + ` text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-4 lg:py-2.5 font-medium h-15 lg:h-10`}>
                            <span>Contract Management</span>
                            <ChevronRightIcon
                                className={`rotate-90 w-3 h-3 ml-2`}
                            />
                        </Popover.Button>

                        
                        <Popover.Panel className="absolute z-10 bg-black text-white text-sm w-48">
                            <div className="grid grid-cols-1 gap-y-1">
                                <ul className='relative'>
                                    <li className="relative" id="sidenavEx1">
                                        <a href='#!' className="flex items-center text-sm px-4 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                                            <span>Manage Contracts</span>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                            </svg>
                                        </a>
                                        <ul className="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                            <li className="relative">
                                                <Link to={{pathname: '/contract-management/manage-contracts/contracts'}} className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out" 
                                                data-mdb-ripple="true" data-mdb-ripple-color="dark">Contracts</Link>
                                            </li>
                                            <li className="relative">
                                                <Link to={{pathname: '/contract-management/manage-contracts/contractors'}} className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out" 
                                                data-mdb-ripple="true" data-mdb-ripple-color="dark">Contractors</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>

            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={((window.location.href.indexOf("/finance/") > -1) ? 'bg-[#2271B1]' : '') + ` text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-6 lg:py-2.5 font-medium h-15 lg:h-10`}>
                            <span>Finance</span>
                            <ChevronRightIcon
                                className={`rotate-90 w-3 h-3 ml-2`}
                            />
                        </Popover.Button>

                        
                        <Popover.Panel className="absolute z-10 bg-black text-white text-sm w-36">
                            <div className="grid grid-cols-1 gap-y-1">
                                <ul className='relative'>
                                    <li className="relative" id="sidenavEx1">
                                        <a href='#!' className="flex items-center text-sm px-4 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                                            <span>Manage</span>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                            </svg>
                                        </a>
                                        <ul className="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                            <li className="relative">
                                                <Link to={{pathname: '/finance/manage/projects'}} className="flex items-center text-xs py-4 pl-6 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out" 
                                                data-mdb-ripple="true" data-mdb-ripple-color="dark">Projects/Programs</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>

            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={((window.location.href.indexOf("/reporting/") > -1) ? 'bg-[#2271B1]' : '') + ` text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-6 lg:py-2.5 font-medium h-15 lg:h-10`}>
                            <span>Reporting</span>
                            <ChevronRightIcon
                                className={`rotate-90 w-3 h-3 ml-2`}
                            />
                        </Popover.Button>

                        
                        <Popover.Panel className="absolute z-10 bg-black text-white text-sm w-36">
                            <div className="grid grid-cols-1 gap-y-1">
                                <ul className='relative'>
                                    <li className="relative" id="sidenavEx1">
                                        <a href='#!' className="flex items-center text-sm px-4 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                                            <span>Reporting</span>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                            </svg>
                                        </a>
                                        <ul className="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                            <li className="relative">
                                                <Link to={{pathname: '/reporting/reporting'}} className="flex items-center text-xs py-4 pl-6 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out" 
                                                data-mdb-ripple="true" data-mdb-ripple-color="dark">Reporting</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>

            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={((window.location.href.indexOf("/user-management/") > -1) ? 'bg-[#2271B1]' : '') + ` text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-4 lg:py-2.5 font-medium h-15 lg:h-10`}>
                            <span>User Management</span>
                            <ChevronRightIcon
                                className={`rotate-90 w-3 h-3 ml-2`}
                            />
                        </Popover.Button>

                        
                        <Popover.Panel className="absolute z-10 bg-black text-white text-sm w-36">
                            <div className="grid grid-cols-1">
                                <ul className='relative'>
                                    <li className="relative" id="sidenavEx1">
                                        <a href='#!' className="flex items-center text-sm py-4 px-4 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                                            <span>Manage Users</span>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                            </svg>
                                        </a>
                                        <ul className="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                            <li className="relative">
                                                <Link to={{pathname: '/user-management/manage-users/users'}} className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out" 
                                                data-mdb-ripple="true" data-mdb-ripple-color="dark">Users</Link>
                                            </li>
                                            <li className="relative">
                                                <Link to={{pathname: '/user-management/manage-users/roles'}} className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out" 
                                                data-mdb-ripple="true" data-mdb-ripple-color="dark">Roles</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>
        </>
    )
}

export default InnerNavBar