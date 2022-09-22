import { Popover, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function RoadNetwork() {
    return (
        <>
            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={`text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] px-3 py-4 lg:py-2.5 font-medium h-15 lg:h-10`}>
                            <span>Manage Roads</span>
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
                                    <Link className="hover:text-slate-300" to="/road-network/manage-roads/road-sections">Road Sections</Link>
                                    <Link className="hover:text-slate-300" to="/road-network/manage-roads/regions">Regions</Link>
                                    <Link className="hover:text-slate-300" to="/road-network/manage-roads/locations">Locations</Link>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>

            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={`text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] px-3 py-4 lg:py-2.5 font-medium h-15 lg:h-10`}>
                            <span>Condition</span>
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
                                    <Link className="hover:text-slate-300" to="/road-network/condition/functional-assessment">Functional Assessment</Link>
                                    <Link className="hover:text-slate-300" to="/road-network/condition/material-information">Material Information</Link>
                                    <Link className="hover:text-slate-300" to="/road-network/condition/surface-distress">Surface Distress</Link>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </>
    )
}

export default RoadNetwork