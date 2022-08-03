import { Fragment } from 'react'
import { Disclosure, Menu, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from '@heroicons/react/outline'

interface Navigation {
  name: string,
  href: string,
  current: boolean
}

const navigation: Navigation[] = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


function NavBar() {
  return (
    <Disclosure as="nav" className={"bg-black w-full w-screen"}>
      {({ open }) => (
        <>
          <div className="w-full mx-full px-2">
            <div className="relative flex items-center justify-between h-10">
              <div className="absolute inset-y-0 left-20 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <ChevronUpIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <ChevronDownIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className='uppercase font-semibold text-white p-2'>ITTRAMS</h3>
                  <div className="hidden sm:block">
                    <div className="flex">
                      <Popover>
                        {({ open }) => (
                          <>
                            <Popover.Button className={`text-white text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-2.5 text-sm font-medium`}>
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
                            <Popover.Button className={`text-white text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-2.5 text-sm font-medium`}>
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
                            <Popover.Button className={`text-white text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-2.5 text-sm font-medium`}>
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
                            <Popover.Button className={`text-white text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-2.5 text-sm font-medium`}>
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
                            <Popover.Button className={`text-white text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-2.5 text-sm font-medium`}>
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
                            <Popover.Button className={`text-white text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-2.5 text-sm font-medium`}>
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
                            <Popover.Button className={`text-white text-sm flex items-center text-white hover:bg-[#2271B1] hover:text-white px-3 py-2.5 text-sm font-medium`}>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="inset-y-0 justify-end flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="bg-gradient-to-r from-indigo-700 to-indigo-900 p-1 rounded-full text-white hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-black flex text-sm rounded-full">
                      <span className="sr-only">Open user menu</span>
                      {/* <img
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      /> */}
                      <svg className='w-5 h-5' role='img' data-prefix='fas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill='white' d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                      </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'hover:text-slate-500' : '', 'block px-4 py-2 text-sm text-black')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'hover:text-slate-500' : '', 'block px-4 py-2 text-sm text-black')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'hover:text-slate-500' : '', 'block px-4 py-2 text-sm text-black')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar