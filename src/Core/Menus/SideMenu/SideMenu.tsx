import React from 'react'
import { Link } from 'react-router-dom'

/**
 * @description The side menu which includes links to different sections of the system
 * @returns 
 */
function SideMenu() {
    return (
        <div className="w-60 h-[100vh] md:bg-black md:translate-x-0 -translate-x-full ease-in-out duration-700" id="sidenavExample">
            <h3 className='uppercase font-semibold text-white p-2 ml-4'>ITTRAMS</h3>
            <ul className="relative">
            <li className={((window.location.href.indexOf("/map") > -1)? 'bg-gray-100 border-r-2 border-slate-600': '') + " hover:border-r-2 hover:border-slate-600 relative"} id="sidenavEx8">
                    <Link to='/map' className={((window.location.href.indexOf("/map") > -1)? "text-gray-900" : "") + " flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"} data-mdb-ripple="true" data-mdb-ripple-color="dark" aria-expanded="true" aria-controls="collapseSidenavEx8">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill='currentColor' d="M384 476.1L192 421.2V35.93L384 90.79V476.1zM416 88.37L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L416 474.8V88.37zM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13V95.13z"/>
                    </svg>
                        <span>Map</span>
                    </Link>
                </li>
                <li className={((window.location.href.indexOf("/road-network/") > -1)? 'bg-gray-100 border-r-2 border-slate-600': '') + " hover:border-r-2 hover:border-slate-600 relative"} id="sidenavEx1">
                    <Link to='/road-network/manage-roads/road-sections' className={((window.location.href.indexOf("road-network") > -1)? "text-gray-900" : "") + " flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"} data-mdb-ripple="true" data-mdb-ripple-color="dark" aria-expanded="true" aria-controls="collapseSidenavEx8">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill='currentColor' d="M256 96C256 113.7 270.3 128 288 128C305.7 128 320 113.7 320 96V32H394.8C421.9 32 446 49.08 455.1 74.63L572.9 407.2C574.9 413 576 419.2 576 425.4C576 455.5 551.5 480 521.4 480H320V416C320 398.3 305.7 384 288 384C270.3 384 256 398.3 256 416V480H54.61C24.45 480 0 455.5 0 425.4C0 419.2 1.06 413 3.133 407.2L120.9 74.63C129.1 49.08 154.1 32 181.2 32H255.1L256 96zM320 224C320 206.3 305.7 192 288 192C270.3 192 256 206.3 256 224V288C256 305.7 270.3 320 288 320C305.7 320 320 305.7 320 288V224z"/>
                        </svg>
                        <span>Road Network</span>
                    </Link>
                </li>
                <li className={((window.location.href.indexOf("/road-inventory/") > -1)? 'bg-gray-100 border-r-2 border-slate-600': '') + " hover:border-r-2 hover:border-slate-600 relative"} id="sidenavEx2">
                    <Link to='/road-inventory/inventory/inventory-data' className={((window.location.href.indexOf("road-inventory") > -1)? "text-gray-900" : "") + " flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"} data-mdb-ripple="true" data-mdb-ripple-color="dark" aria-expanded="true" aria-controls="collapseSidenavEx8">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill='currentColor' d="M173.7 128L216 20.3C220.8 8.053 232.7 0 245.8 0H266.2C279.3 0 291.2 8.053 295.1 20.3L338.3 128H173.7zM363.4 192L401.1 288H110.9L148.6 192H363.4zM48 448L85.71 352H426.3L464 448H480C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448H48z"/>
                        </svg>
                        <span>Road Inventory</span>
                    </Link>
                </li>
                <li className={((window.location.href.indexOf("/planning/") > -1)? 'bg-gray-100 border-r-2 border-slate-600': '') + " hover:border-r-2 hover:border-slate-600 relative"} id="sidenavEx3">
                    <Link to='/planning/planning' className={((window.location.href.indexOf("planning") > -1)? "text-gray-900" : "") + " flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"} data-mdb-ripple="true" data-mdb-ripple-color="dark" aria-expanded="true" aria-controls="collapseSidenavEx8">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill='currentColor' d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM96 392c-13.25 0-24-10.75-24-24S82.75 344 96 344s24 10.75 24 24S109.3 392 96 392zM96 296c-13.25 0-24-10.75-24-24S82.75 248 96 248S120 258.8 120 272S109.3 296 96 296zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM304 384h-128C167.2 384 160 376.8 160 368C160 359.2 167.2 352 176 352h128c8.801 0 16 7.199 16 16C320 376.8 312.8 384 304 384zM304 288h-128C167.2 288 160 280.8 160 272C160 263.2 167.2 256 176 256h128C312.8 256 320 263.2 320 272C320 280.8 312.8 288 304 288z"/>
                        </svg>
                        <span>Planning</span>
                    </Link>
                </li>
                <li className={((window.location.href.indexOf("/contract-management/") > -1)? 'bg-gray-100 border-r-2 border-slate-600': '') + " hover:border-r-2 hover:border-slate-600 relative"} id="sidenavEx4">
                    <Link to='/contract-management/manage-contracts/contracts' className={((window.location.href.indexOf("contract-management") > -1)? "text-gray-900" : "") + " flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"} data-mdb-ripple="true" data-mdb-ripple-color="dark" aria-expanded="true" aria-controls="collapseSidenavEx8">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill='currentColor' d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256z"/>
                        </svg>
                        <span>Contract Management</span>
                    </Link>
                </li>
                <li className={((window.location.href.indexOf("/finance/") > -1)? 'bg-gray-100 border-r-2 border-slate-600': '') + " hover:border-r-2 hover:border-slate-600 relative"} id="sidenavEx5">
                    <Link to='/finance/manage/projects' className={((window.location.href.indexOf("finance") > -1)? "text-gray-900" : "") + " flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"} data-mdb-ripple="true" data-mdb-ripple-color="dark" aria-expanded="true" aria-controls="collapseSidenavEx8">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill='currentColor' d="M160 0C177.7 0 192 14.33 192 32V67.68C193.6 67.89 195.1 68.12 196.7 68.35C207.3 69.93 238.9 75.02 251.9 78.31C268.1 82.65 279.4 100.1 275 117.2C270.7 134.3 253.3 144.7 236.1 140.4C226.8 137.1 198.5 133.3 187.3 131.7C155.2 126.9 127.7 129.3 108.8 136.5C90.52 143.5 82.93 153.4 80.92 164.5C78.98 175.2 80.45 181.3 82.21 185.1C84.1 189.1 87.79 193.6 95.14 198.5C111.4 209.2 136.2 216.4 168.4 225.1L171.2 225.9C199.6 233.6 234.4 243.1 260.2 260.2C274.3 269.6 287.6 282.3 295.8 299.9C304.1 317.7 305.9 337.7 302.1 358.1C295.1 397 268.1 422.4 236.4 435.6C222.8 441.2 207.8 444.8 192 446.6V480C192 497.7 177.7 512 160 512C142.3 512 128 497.7 128 480V445.1C127.6 445.1 127.1 444.1 126.7 444.9L126.5 444.9C102.2 441.1 62.07 430.6 35 418.6C18.85 411.4 11.58 392.5 18.76 376.3C25.94 360.2 44.85 352.9 60.1 360.1C81.9 369.4 116.3 378.5 136.2 381.6C168.2 386.4 194.5 383.6 212.3 376.4C229.2 369.5 236.9 359.5 239.1 347.5C241 336.8 239.6 330.7 237.8 326.9C235.9 322.9 232.2 318.4 224.9 313.5C208.6 302.8 183.8 295.6 151.6 286.9L148.8 286.1C120.4 278.4 85.58 268.9 59.76 251.8C45.65 242.4 32.43 229.7 24.22 212.1C15.89 194.3 14.08 174.3 17.95 153C25.03 114.1 53.05 89.29 85.96 76.73C98.98 71.76 113.1 68.49 128 66.73V32C128 14.33 142.3 0 160 0V0z"/>
                        </svg>
                        <span>Finance</span>
                    </Link>
                </li>
                <li className={((window.location.href.indexOf("/reporting/") > -1)? 'bg-gray-100 border-r-2 border-slate-600': '') + " hover:border-r-2 hover:border-slate-600 relative"} id="sidenavEx6">
                    <Link to='/reporting/reports' className={((window.location.href.indexOf("/reporting/") > -1)? "text-gray-900" : "") + " flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"} data-mdb-ripple="true" data-mdb-ripple-color="dark" aria-expanded="true" aria-controls="collapseSidenavEx8">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill='currentColor' d="M64 400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64V400zM342.6 278.6C330.1 291.1 309.9 291.1 297.4 278.6L240 221.3L150.6 310.6C138.1 323.1 117.9 323.1 105.4 310.6C92.88 298.1 92.88 277.9 105.4 265.4L217.4 153.4C229.9 140.9 250.1 140.9 262.6 153.4L320 210.7L425.4 105.4C437.9 92.88 458.1 92.88 470.6 105.4C483.1 117.9 483.1 138.1 470.6 150.6L342.6 278.6z"/>
                        </svg>
                        <span>Reporting</span>
                    </Link>
                </li>
                <li className={((window.location.href.indexOf("/user-management/") > -1)? 'bg-gray-100 border-r-2 border-slate-600': '') + " hover:border-r-2 hover:border-slate-600 relative"} id="sidenavEx7">
                    <Link to='/user-management/users' className={((window.location.href.indexOf("/user-management/") > -1)? "text-gray-900" : "") + " flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"} data-mdb-ripple="true" data-mdb-ripple-color="dark" aria-expanded="true" aria-controls="collapseSidenavEx8">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill='currentColor' d="M256 288c79.53 0 144-64.47 144-144s-64.47-144-144-144c-79.52 0-144 64.47-144 144S176.5 288 256 288zM351.1 320H160c-88.36 0-160 71.63-160 160c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32C512 391.6 440.4 320 351.1 320z"/>
                        </svg>
                        <span>User Management</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu