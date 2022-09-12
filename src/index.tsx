import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './App/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tw-elements';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Condition, FunctionalAssessment, Locations, ManageRoads, MaterialInformation, Regions, RoadSections, SurfaceDistress } from './Features/RoadNetwork';
import { Inventory, InventoryData, RoadAndSectionData } from './Features/RoadInventory';
import { Planning } from './Features/Planning';
import { Contractors, Contracts } from './Features/ContractManagement';
import { Projects } from './Features/Finance';
import { Reporting } from './Features/Reporting';
import { Roles, Users } from './Features/UserManagement';

const container = document.getElementById('root')!;
const root = createRoot(container);

const Map = lazy(() => import('./Features/Map'));
const ManageUsers = lazy(() => import('./Features/UserManagement'));
const ReportingMain = lazy(() => import('./Features/Reporting'));
const Manage = lazy(() => import('./Features/Finance'));
const ManageContracts = lazy(() => import('./Features/ContractManagement'));
const PlanningMain = lazy(() => import('./Features/Planning'));
const RoadInventory = lazy(() => import('./Features/RoadInventory'));
const RoadNetwork = lazy(() => import('./Features/RoadNetwork'));
const Login = lazy(() => import('./Features/Auth'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<button type="button" className="bg-indigo-500 ..." disabled>
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            <path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
          </svg>
          Processing...
        </button>}
        >
          <Routes>
            <Route element={<App />}>

              <Route index element={<Login />} />
              <Route path="map" element={<Map />} />

              {/* road network routes */}
              <Route path='road-network' element={<RoadNetwork />}>
                <Route path='manage-roads' element={<ManageRoads />}>
                  <Route path='regions' element={<Regions />} />
                  <Route path='road-sections' element={<RoadSections />} />
                  <Route path='locations' element={<Locations />} />
                </Route>

                <Route path='condition' element={<Condition />}>
                  <Route path='functional-assessment' element={<FunctionalAssessment />} />
                  <Route path='surface-distress' element={<SurfaceDistress />} />
                  <Route path='material-information' element={< MaterialInformation />} />
                </Route>
              </Route>

              {/* road inventory routes */}
              <Route path='road-inventory' element={<RoadInventory />}>
                <Route path='inventory' element={<Inventory />}>
                  <Route path='inventory-data' element={<InventoryData />} />
                  <Route path='road-and-section-data' element={<RoadAndSectionData />} />
                </Route>
              </Route>

              {/* planning routes            */}
              <Route path='planning' element={<PlanningMain />}>
                <Route path='planning' element={<Planning />} />
              </Route>

              {/* contract management routes */}
              <Route path='contract-management'>
                <Route path='manage-contracts' element={<ManageContracts />}>
                  <Route path='contracts' element={<Contracts />} />
                  <Route path='contractors' element={<Contractors />} />
                </Route>
              </Route>

              {/* finance routes */}
              <Route path='finance'>
                <Route path='manage' element={<Manage />}>
                  <Route path='projects' element={<Projects />} />
                </Route>
              </Route>

              {/* reporting routes */}
              <Route path='reporting' element={<ReportingMain />}>
                <Route path='reporting' element={<Reporting />} />
              </Route>

              {/* user management routes */}
              <Route path='user-management'>
                <Route path='manage-users' element={<ManageUsers />}>
                  <Route path='roles' element={<Roles />} />
                  <Route path='users' element={<Users />} />
                </Route>
              </Route>

            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
