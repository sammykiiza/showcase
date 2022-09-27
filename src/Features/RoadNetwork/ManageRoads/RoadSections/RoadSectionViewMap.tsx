import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useAppDispatch, useAppSelector } from '../../../../App/hooks'
import { RootState } from '../../../../App/store'
import { setOpenMap } from './RoadSectionsSlice';

export default function RoadSectionViewMap() {
    const open = useAppSelector((state: RootState) => state.roadSections.openMap);
    const dispatch = useAppDispatch();


    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-20" onClose={() => dispatch(setOpenMap())}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-[65%] transform overflow-hidden rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Payment successful
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <MapContainer
                                            center={[-15.4245, 28.3197]}
                                            zoom={13}
                                            scrollWheelZoom={true}
                                            style={{ height: 300, width: '100%', zIndex: 0 }}
                                        >
                                            <TileLayer
                                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                            {/* <GeoJSON
                                                            data={geoData}
                                                        /> */}
                                            <Marker position={[-15.4245, 28.3197]}>
                                                <Popup>
                                                    Zambia.
                                                </Popup>
                                            </Marker>
                                        </MapContainer>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={() => dispatch(setOpenMap())}
                                        >
                                           Close Map
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
