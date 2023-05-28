import {useState, useEffect} from 'react';

interface IPosition {
	longitude: number | undefined,
	latitude: number | undefined,
}

export const usePosition = () => {

	const [position, setPosition] = useState<IPosition>();

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				setPosition({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				})
			})
		} else {
			console.log("Not Available");
		}

	}, [])

	return {position};
};