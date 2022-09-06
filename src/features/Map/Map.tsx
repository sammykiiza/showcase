import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON as Geo } from 'react-leaflet'
import './styles.css';
import { useGeoJsonQuery } from '../../services/apiAuth';

function Map() {
  const { data = [] } = useGeoJsonQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.map(({ geoJson }) => ({ geoJson })),
    })
  });

  let geoData = data.map(({ geoJson }) => geoJson);

  return (
    <MainLayout component='Map' section='Map'>
      <MapContainer
        center={[-15.4245, 28.3197]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '77vh', width: '100%', zIndex: 0 }}
      >
        {/* <Geo
        data={geoData}
        /> */}
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
  )
}

export default Map