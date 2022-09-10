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
import { Contracts } from './Features/ContractManagement';
import { Locations, ManageRoads, Regions, RoadNetwork, Roads, RoadTypes } from './Features/RoadNetwork';
import { Map } from './Features/Map';

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
            <Route path="contract-management" element={<Contracts />} />

            {/* road network routes */}
            <Route element={<RoadNetwork />} path='road-network'>
              <Route path='manage-roads' element={<ManageRoads />}>
                <Route path='regions' element={<Regions />} />
                <Route path='road-sections' element={<Roads />} />
              </Route>
              <Route path='locations' element={<Locations />} />
              <Route path='road-types' element={<RoadTypes />} />
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
