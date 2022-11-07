import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline';
import { useAppDispatch, useAppSelector } from '../../../../App/hooks';
import { RootState } from '../../../../App/store';
import { setOpenDialog } from './RoadSectionsSlice';
import { splitString } from '../../../../Core/Helpers';
import { apiAuth, apiFilterMenu } from '../../../../Core/Services';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';

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
                                        <div className="absolute top-6 right-0 mr-2 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="text-white hover:text-gray-300 focus:outline-none focus:ring-0"
                                                onClick={() => dispatch(setOpenDialog())}
                                            >
                                                <span className="sr-only">Close panel</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="px-4 sm:px-6 bg-[#2271B1] py-10 rounded-tr-xl flex flex-col space-y-4">
                                            <Dialog.Title className="text-xl font-medium text-white"><span className='font-bold uppercase'>{road?.roadName}</span> details</Dialog.Title>
                                            <span className='text-white text-xs'>Specific road details including the geojson data</span>
                                        </div>
                                        <div className="relative my-2 flex-1 px-4 sm:px-6">
                                            {/* Replace with your content */}
                                            <div className="absolute inset-0 px-4 sm:px-6">
                                                <div className="h-full" aria-hidden="true">
                                                    <div className='mb-2'>
                                                        <div className='flex flex-col p-2 text-sm space-y-2'>
                                                            <span className='font-bold capitalize'>id</span>
                                                            <span className="text-slate-600">{road?.id}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm space-y-2'>
                                                            <span className='font-bold capitalize'>Date Uploaded</span>
                                                            <span className="text-slate-600">
                                                                {
                                                                road? (DateTime.fromISO(road?.dateCreated).toLocaleString(DateTime.DATETIME_MED)) :
                                                                (DateTime.fromISO('').toLocaleString(DateTime.DATETIME_MED))
                                                                }
                                                            </span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm space-y-2'>
                                                            <span className='font-bold capitalize'>Road Number</span>
                                                            <span className="text-slate-600">{road?.roadCode}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm space-y-2'>
                                                            <span className='font-bold capitalize'>Road Name</span>
                                                            <span className="text-slate-600">{road?.roadName}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm space-y-2'>
                                                            <span className='font-bold capitalize'>Road Type</span>
                                                            <span className="text-slate-600">{roadType?.name}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm space-y-2'>
                                                            <span className='font-bold capitalize'>Section Number</span>
                                                            <span className="text-slate-600">{road?.roadSectionNumber}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm space-y-2'>
                                                            <span className='font-bold capitalize'>Start(KM)</span>
                                                            <span className="text-slate-600">{road?.fromChainage}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm space-y-2'>
                                                            <span className='font-bold capitalize'>End(KM)</span>
                                                            <span className="text-slate-600">{road?.toChainage}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm space-y-2'>
                                                            <span className='font-bold capitalize'>Council</span>
                                                            <span className="text-slate-600">{council}</span>
                                                        </div>

                                                        <div className='flex flex-col p-2 text-sm space-y-2'>
                                                            <span className='font-bold capitalize'>Road Condition Index</span>
                                                            <span className="text-slate-600">{road?.conditionIndex}</span>
                                                        </div>
                                                    </div>

                                                    <div className='pb-6 pt-3 border-t border-slate-300 w-full'>
                                                        <h3 className='font-bold text-lg'>Shape File Properties</h3>
                                                        {oneRoad?.geoJson?.properties !== undefined? 
                                                        Object.keys(oneRoad.geoJson.properties).map((key) => (
                                                            <div key={key}>
                                                                <span>{key}</span>
                                                                <span className='text-slate-600'>{oneRoad.geoJson.properties[key]}</span>
                                                            </div>
                                                        )) 
                                                        : <div className='py-2 text-sm italic capitalize pl-1 animate-pulse'>No geo properties</div>}
                                                        <Link to={road? `/road-network/manage-roads/${road.roadName}` : `/road-network/manage-roads/road-sections/''`} className='bg-[#2271B1] text-white rounded p-2 my-4 text-sm'>
                                                            Open Road Map
                                                        </Link>
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
