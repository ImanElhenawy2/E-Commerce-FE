import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const Map = () => {
    const location = {
        address: "1100 favoritenstrasse, Vienna, Austria.",
        position: {
            lat: 48.16004,
            lng: 16.38292,
        },
    };
    const defaultCenter = {
        lat: 48.16004,
        lng: 16.38292,
    };

    return (
        <>
            <div className="h-56 w-">
                <LoadScript googleMapsApiKey="">
                    <GoogleMap
                        mapContainerStyle={{ width: "100%", height: "100%" }}
                        zoom={17}
                        center={defaultCenter}
                    >
                        <MarkerF
                            key={location.address}
                            position={location.position}
                        />
                    </GoogleMap>
                </LoadScript>
            </div>
        </>
    );
};

export default Map;
