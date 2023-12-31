import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
	width: '90%',
	height: '400px',
	marginLeft: '15px'
};

function Map({zoom, cLat, cLng, mLat1, mLng1, mTitle1, mLat2, mLng2, mTitle2, mLat3, mLng3, mTitle3 }) {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: "AIzaSyB9z1kjnqM81t1kYvvxeoQ5P3GR_C3PBJM"
	})
	const [map, setMap] = React.useState(null)

	const onLoad = React.useCallback(function callback(map) {
		map.setZoom(zoom)
		setMap(map)
	}, [])

	const center = {
		lat: cLat,
		lng: cLng
	};
	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={zoom}
			onLoad={onLoad}
		>
			<Marker
				label={mTitle1}
				position={{ lat: mLat1, lng: mLng1}}

			/>
			<Marker
				label={mTitle2}
				position={{lat: mLat2,lng: mLng2}}
			/>
			<Marker
				label={mTitle3}
				position={{lat: mLat3,lng: mLng3}}
			/>
		</GoogleMap>
	) : <></>
}

export default React.memo(Map)