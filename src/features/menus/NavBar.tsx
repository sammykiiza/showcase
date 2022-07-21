import {Fragment} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/outline'

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

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}


function NavBar () {
  return (
    <Disclosure as="nav" className={"bg-white w-full w-screen rounded-md shadow sticky top-0"}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1">
                <div className="flex items-center">
                  {/* <h3 className='uppercase font-semibold'>{props.title}</h3> */}
                </div>
              </div>
              <div className="inset-y-0 justify-end flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gradient-to-r from-indigo-700 to-indigo-900 p-1 rounded-full text-white hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative z-[1]">
                  <div>
                    <Menu.Button className="bg-gradient-to-r from-indigo-700 to-indigo-900 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'hover:text-black' : '', 'block px-4 py-2 text-sm text-indigo-900')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'hover:text-black' : '', 'block px-4 py-2 text-sm text-indigo-900')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'hover:text-black' : '', 'block px-4 py-2 text-sm text-indigo-900')}
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