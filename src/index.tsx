import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './App/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tw-elements';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Features/Auth';
import { Condition, FunctionalAssessment, Locations, ManageRoads, MaterialInformation, Regions, RoadNetwork, RoadSections, SurfaceDistress } from './Features/RoadNetwork';
import { Map } from './Features/Map';
import { Inventory, InventoryData, RoadAndSectionData, RoadInventory } from './Features/RoadInventory';
import { Planning, PlanningMain } from './Features/Planning';
import { Contractors, Contracts, ManageContracts } from './Features/ContractManagement';
import { Manage, Projects } from './Features/Finance';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
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

            <Route path='finance'>
              <Route path='manage' element={<Manage />}>
                <Route path='projects' element={<Projects />} />
              </Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
