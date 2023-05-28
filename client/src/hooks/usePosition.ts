import {useState, useEffect} from 'react';

interface IPosition {
	longitude: number | undefined,
	latitude: number | undefined,
}

export const usePosition = () => {

	const [position, setPosition] = useState<IPosition>();

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			setPosition({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude
			})
		})

	}, [])

	return {position};
};