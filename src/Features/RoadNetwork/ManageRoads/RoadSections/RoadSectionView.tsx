import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline';
import { useAppDispatch, useAppSelector } from '../../../../App/hooks';
import { RootState } from '../../../../App/store';
import { setOpenDialog, setOpenMap } from './RoadSectionsSlice';
import { splitString } from '../../../../Core/Helpers';
import { apiAuth, apiFilterMenu } from '../../../../Core/Services';
import { DateTime } from 'luxon';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function RoadSectionView() {
    const dispatch = useAppDispatch();
    const open = useAppSelector((state: RootState) => state.roadSections.openDialog);
    const road = useAppSelector((state: RootState) => state.roadSections.road);

    const councilStorage = localStorage.getItem('council');
    const council = splitString(councilStorage, 1);

    const { data: roadTypes } = apiFilterMenu.useRoadTypesQuery();

    const { data = [] } = apiAuth.useRoadsQuery();
    const oneRoad = data.find(data => data.id === road?.id);

    const roadType = roadTypes?.find(roadType => roadType.id === road?.roadTypeId);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => {dispatch(setOpenDialog())}} >
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
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                onClick={() => dispatch(setOpenDialog())}
                                            >
                                                <span className="sr-only">Close panel</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <Dialog.Title className="text-lg font-medium text-gray-900"><span className='font-bold'>{road?.roadName}</span> details</Dialog.Title>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            {/* Replace with your content */}
                                            <div className="absolute inset-0 px-4 sm:px-6">
                                                <div className="h-full" aria-hidden="true">
                                                    <div>
                                                        <div className='flex flex-col p-2 text-sm'>
                                                            <span className='font-bold uppercase'>id</span>
                                                            <span>{road?.id}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm'>
                                                            <span className='font-bold uppercase'>Date Uploaded</span>
                                                            <span>
                                                                {
                                                                road? (DateTime.fromISO(road?.dateCreated).toLocaleString(DateTime.DATETIME_MED)) :
                                                                (DateTime.fromISO('').toLocaleString(DateTime.DATETIME_MED))
                                                                }
                                                            </span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm'>
                                                            <span className='font-bold uppercase'>Road Number</span>
                                                            <span>{road?.roadCode}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm'>
                                                            <span className='font-bold uppercase'>Road Name</span>
                                                            <span>{road?.roadName}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm'>
                                                            <span className='font-bold uppercase'>Road Type</span>
                                                            <span>{roadType?.name}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm'>
                                                            <span className='font-bold uppercase'>Section Number</span>
                                                            <span>{road?.roadSectionNumber}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm'>
                                                            <span className='font-bold uppercase'>Start(KM)</span>
                                                            <span>{road?.fromChainage}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm'>
                                                            <span className='font-bold uppercase'>End(KM)</span>
                                                            <span>{road?.toChainage}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm'>
                                                            <span className='font-bold uppercase'>Council</span>
                                                            <span>{council}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm'>
                                                            <span className='font-bold uppercase'>Road Condition Index</span>
                                                            <span>{road?.conditionIndex}</span>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h3 className='font-bold'>Shape File Properties</h3>
                                                        {oneRoad?.geoJson?.properties !== undefined? 
                                                        Object.keys(oneRoad.geoJson.properties).map((key) => (
                                                            <div key={key}>
                                                                <span>{key}</span>
                                                                <span>{oneRoad?.geoJson.properties[key]}</span>
                                                            </div>
                                                        )) 
                                                        : <div>No properties</div>}
                                                        <button className='bg-[#2271B1] text-white rounded p-2 text-sm my-2' onClick={() => {
                                                            dispatch(setOpenMap());
                                                        }}>
                                                            Open Road Map
                                                        </button>
                                                    </div>
                                                </div>
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
