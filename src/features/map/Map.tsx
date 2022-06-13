import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import NavBar from '../menus/NavBar'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './styles.css'


function Map() {
  return (
    <>
    <NavBar title='Map'/>
      <MainLayout>
        <div className='leaflet-container mt-6 -ml-[3%]'>
          <MapContainer
            center={[13.1339, 27.8493]}  
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[13.1339, 27.8493]}>
              <Popup>
                Zambia.
              </Popup>
            </Marker>
          </MapContainer>
        </div>

      </MainLayout>
    </>
  )
}

export default Map