import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useAppSelector } from "../../../../App/hooks";
import { RootState } from "../../../../App/store";
import { MainLayout } from "../../../../Core/Layouts";

export default function RoadSectionViewMap() {
    const road = useAppSelector((state: RootState) => state.roadSections.road);
    return (
        <MainLayout
            section="Road Network"
            component={(road ? road.roadName : '')}
        >
            <MapContainer
                center={[-15.4245, 28.3197]}
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: '77vh', width: '100%', zIndex: 0 }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <GeoJSON
                        data={geoData}
                    /> */}
                <Marker position={[-15.4245, 28.3197]}>
                    <Popup>
                        Zambia.
                    </Popup>
                </Marker>
            </MapContainer>

        </MainLayout>
    )
}
