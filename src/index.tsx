import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tw-elements';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contracts from './features/ContractManagement/Contracts';
import Dashboard from './features/Dashboard/Dashboard';
import Map from './features/map/Map';
import Login from './features/auth/login/Login';
import Locations from './features/RoadNetwork/Locations/Locations';
import Regions from './features/RoadNetwork/Regions/Regions';
import Roads from './features/RoadNetwork/Roads/Roads';
import RoadTypes from './features/RoadNetwork/RoadTypes/RoadTypes';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}/>
          <Route path="/" element={<App />}/>
          <Route path="map" element={<Map/>}/>
          <Route path="contract-management" element={<Contracts />}/>
          <Route path='dashboard' element={<Dashboard />}/>
          <Route path='road-network'>
            <Route path='locations' element={<Locations />}/>
            <Route path='regions' element={<Regions/>}/>
            <Route path='roads' element={<Roads/>}/>
            <Route path='road-types' element={<RoadTypes/>}/>
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
