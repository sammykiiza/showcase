import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

const  AddRoadSection = () => {
  const [open, setOpen] = useState(true)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-2xl">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-6 right-0 mr-4 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-0"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white pb-6 shadow-xl">
                    <div className="px-4 sm:px-6 bg-[#2271B1] py-10 rounded-tr-xl text-white flex flex-col">
                      <Dialog.Title className="text-2xl font-bold">New Road</Dialog.Title>
                      <span className='text-sm'>Get started by filling in the required fields below to create a new road section</span>
                      <span className='text-red-200 text-sm'>*  required field</span>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute inset-0 px-4 sm:px-6">

                        {/* road item */}
                        <div className='flex justify-between items-center'>
                          <div className='text-gray-600 text-sm'>Road Number *</div>
                          <input type="text" className='w-3/4 rounded-lg border-gray-300 focus:ring-0 appearance-none focus:border-[#2271B1] focus-outline-none' />
                        </div>
                        <hr className='mt-4 -ml-6 -mr-6' />
                        {/* road items end */}

                        {/* road item */}
                        <div className='flex justify-between items-center mt-4'>
                          <div className='text-gray-600 text-sm'>Road Name *</div>
                          <input type="text" className='w-3/4 rounded-lg border-gray-300 focus:ring-0 appearance-none focus:border-[#2271B1] focus-outline-none' />
                        </div>
                        <hr className='mt-4 -ml-6 -mr-6' />
                        {/* road items end */}

                        {/* road item */}
                        <div className='flex justify-between items-center mt-4'>
                          <div className='text-gray-600 text-sm'>Road Type *</div>
                          <input type="text" className='w-3/4 rounded-lg border-gray-300 focus:ring-0 appearance-none focus:border-[#2271B1] focus-outline-none' />
                        </div>
                        <hr className='mt-4 -ml-6 -mr-6' />
                        {/* road items end */}

                        {/* road item */}
                        <div className='flex justify-between items-center mt-4'>
                          <div className='text-gray-600 text-sm'>Segment Number *</div>
                          <input type="text" className='w-3/4 rounded-lg border-gray-300 focus:ring-0 appearance-none focus:border-[#2271B1] focus-outline-none' />
                        </div>
                        <hr className='mt-4 -ml-6 -mr-6' />
                        {/* road items end */}

                        {/* road item */}
                        <div className='flex justify-between items-center mt-4'>
                          <div className='text-gray-600 text-sm'>Start (KM)</div>
                          <input type="text" className='w-3/4 rounded-lg border-gray-300 focus:ring-0 appearance-none focus:border-[#2271B1] focus-outline-none' />
                        </div>
                        <hr className='mt-4 -ml-6 -mr-6' />
                        {/* road items end */}

                        {/* road item */}
                        <div className='flex justify-between items-center mt-4'>
                          <div className='text-gray-600 text-sm'>End (KM)</div>
                          <input type="text" className='w-3/4 rounded-lg border-gray-300 focus:ring-0 appearance-none focus:border-[#2271B1] focus-outline-none' />
                        </div>
                        <hr className='mt-4 -ml-6 -mr-6' />
                        {/* road items end */}

                        {/* road item */}
                        <div className='flex justify-between items-center mt-4'>
                          <div className='text-gray-600 text-sm'>Fiscal Year *</div>
                          <input type="text" className='w-3/4 rounded-lg border-gray-300 focus:ring-0 appearance-none focus:border-[#2271B1] focus-outline-none' />
                        </div>
                        <hr className='mt-4 -ml-6 -mr-6' />
                        {/* road items end */}

                        {/* road item */}
                        <div className='flex justify-between items-center mt-4'>
                          <div className='text-gray-600 text-sm'>Region *</div>
                          <input type="text" className='w-3/4 rounded-lg border-gray-300 focus:ring-0 appearance-none focus:border-[#2271B1] focus-outline-none' />
                        </div>
                        <hr className='mt-4 -ml-6 -mr-6' />
                        {/* road items end */}

                        {/* road item */}
                        <div className='flex justify-between items-center mt-4'>
                          <div className='text-gray-600 text-sm'>Council *</div>
                          <input type="text" className='w-3/4 rounded-lg border-gray-300 focus:ring-0 appearance-none focus:border-[#2271B1] focus-outline-none' />
                        </div>
                        <hr className='mt-4 -ml-6 -mr-6' />
                        {/* road items end */}

                        {/* road item */}
                        <div className='flex justify-between items-center mt-4'>
                          <div className='text-gray-600 text-sm'>Road Condition Index *</div>
                          <input type="text" className='w-3/4 rounded-lg border-gray-300 focus:ring-0 appearance-none focus:border-[#2271B1] focus-outline-none' />
                        </div>
                        <hr className='mt-4 -ml-6 -mr-6' />
                        {/* road items end */}

                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default AddRoadSection