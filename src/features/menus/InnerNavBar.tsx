import { Popover, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

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

                        <Transition
                            as={Fragment}
                            enter="transition duration-300 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Popover.Panel className="absolute z-10 bg-black text-white text-sm w-36 p-2">
                                <div className="grid grid-cols-1 gap-y-1">
                                    <Link className="hover:text-slate-300" to="/road-network/roads">Roads</Link>
                                    <a className="hover:text-slate-300" href="/road-network/regions">Regions</a>
                                    <a className="hover:text-slate-300" href="/road-network/locations">Locations</a>
                                    <a className="hover:text-slate-300" href="/road-network/types">Road Types</a>
                                </div></Popover.Panel>
                        </Transition>
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

                        <Transition
                            as={Fragment}
                            enter="transition duration-300 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Popover.Panel className="absolute z-10 bg-black text-white text-sm w-36 p-2">
                                <div className="grid grid-cols-1 gap-y-1">
                                    <a className="hover:text-slate-300" href="/road-inventory/inventory-data">Inventory Data</a>
                                    <a className="hover:text-slate-300" href="/road-inventory/road-and-section-data">Road and Section Data</a>
                                </div></Popover.Panel>
                        </Transition>
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

                        <Transition
                            as={Fragment}
                            enter="transition duration-300 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Popover.Panel className="absolute z-10 bg-black text-white text-sm w-36 p-2">
                                <div className="grid grid-cols-1 gap-y-1">
                                    <a className="hover:text-slate-300" href="/road-condition/functional-assesment">Functional Assesment</a>
                                    <a className="hover:text-slate-300" href="/road-condition/material-information">Material Information</a>
                                    <a className="hover:text-slate-300" href="/road-condition/surface-distress">Surface Distress</a>
                                </div></Popover.Panel>
                        </Transition>
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

                        <Transition
                            as={Fragment}
                            enter="transition duration-300 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Popover.Panel className="absolute z-10 bg-black text-white text-sm w-36 p-2">
                                <div className="grid grid-cols-1 gap-y-1">
                                    <a className="hover:text-slate-300" href="/planning/planning">Planning</a>
                                </div></Popover.Panel>
                        </Transition>
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

                        <Transition
                            as={Fragment}
                            enter="transition duration-300 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Popover.Panel className="absolute z-10 bg-black text-white text-sm w-36 p-2">
                                <div className="grid grid-cols-1 gap-y-1">
                                    <a className="hover:text-slate-300" href="/finance/projects">Projects/Programs</a>
                                </div></Popover.Panel>
                        </Transition>
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

                        <Transition
                            as={Fragment}
                            enter="transition duration-300 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Popover.Panel className="absolute z-10 bg-black text-white text-sm w-36 p-2">
                                <div className="grid grid-cols-1 gap-y-1">
                                    <a className="hover:text-slate-300" href="/contract-management/contracts">Contracts</a>
                                    <a className="hover:text-slate-300" href="/contract-management/contractors">Contractors</a>
                                </div></Popover.Panel>
                        </Transition>
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

                        <Transition
                            as={Fragment}
                            enter="transition duration-300 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-200 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Popover.Panel className="absolute z-10 bg-black text-white text-sm w-36 p-2">
                                <div className="grid grid-cols-1 gap-y-1">
                                    <a className="hover:text-slate-300" href="/user-management/users">Users</a>
                                    <a className="hover:text-slate-300" href="/user-management/roles">Roles</a>
                                </div></Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </>
    )
}

export default InnerNavBar