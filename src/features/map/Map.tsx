import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './styles.css'
import PageTitle from '../Layouts/titleComponents/PageTitle'

function Map() {
  return (
    <>
      <MainLayout component='Map view'>
      <PageTitle title="Map"/>
          <MapContainer
            center={[-15.4245, 28.3197]}  
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: '70vh', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-15.4245, 28.3197]}>
              <Popup>
                Zambia.
              </Popup>
            </Marker>
          </MapContainer>
      </MainLayout>
    </>
  )
}

export default Map