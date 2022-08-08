import { Popover, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'

function InnerNavBar() {
    return (
        <>
            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={`text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-2 lg:py-2.5 font-medium`}>
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
                                    <a href="/analytics">Analytics</a>
                                    <a href="/engagement">Engagement</a>
                                    <a href="/security">Security</a>
                                    <a href="/integrations">Integrations</a>
                                </div></Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>

            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={`text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-2 lg:py-2.5 font-medium`}>
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
                                    <a href="/analytics">Analytics</a>
                                    <a href="/engagement">Engagement</a>
                                    <a href="/security">Security</a>
                                    <a href="/integrations">Integrations</a>
                                </div></Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>

            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={`text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-2 lg:py-2.5 font-medium`}>
                            <span>Road Condition</span>
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
                                    <a href="/analytics">Analytics</a>
                                    <a href="/engagement">Engagement</a>
                                    <a href="/security">Security</a>
                                    <a href="/integrations">Integrations</a>
                                </div></Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>

            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={`text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-2 lg:py-2.5 font-medium`}>
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
                                    <a href="/analytics">Analytics</a>
                                    <a href="/engagement">Engagement</a>
                                    <a href="/security">Security</a>
                                    <a href="/integrations">Integrations</a>
                                </div></Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>

            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={`text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-2 lg:py-2.5 font-medium`}>
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
                                    <a href="/analytics">Analytics</a>
                                    <a href="/engagement">Engagement</a>
                                    <a href="/security">Security</a>
                                    <a href="/integrations">Integrations</a>
                                </div></Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>

            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={`text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-2 lg:py-2.5 font-medium`}>
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
                                    <a href="/analytics">Analytics</a>
                                    <a href="/engagement">Engagement</a>
                                    <a href="/security">Security</a>
                                    <a href="/integrations">Integrations</a>
                                </div></Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>

            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={`text-white text-xs lg:text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-2 lg:py-2.5 font-medium`}>
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
                                    <a href="/analytics">Analytics</a>
                                    <a href="/engagement">Engagement</a>
                                    <a href="/security">Security</a>
                                    <a href="/integrations">Integrations</a>
                                </div></Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </>
    )
}

export default InnerNavBar