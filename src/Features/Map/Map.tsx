import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON as Geo } from 'react-leaflet'
import './Styles/styles.css';
import { MainLayout } from '../../Core/Layouts';
import { apiAuth } from '../../Core/Services';

/**
 * @description The component that renders the map.
 * @returns 
 */
function Map() {
  const { data = [] } = apiAuth.useGeoJsonQuery(undefined, {
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