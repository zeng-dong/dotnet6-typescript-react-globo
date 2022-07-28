import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import config from "../config";
import { House } from "../types/house";

const useFetchHouses = (): House[] => {
	const [houses, setHouses] = useState<House[]>([]);

	useEffect(() => {
		const fetchHouses = async () => {
			const response = await fetch(`${config.baseApiUrl}/houses`);
			const houses = await response.json();
			setHouses(houses);
		};

		fetchHouses();
	}, []);

	return houses;
};

const useFetchHousesByUseQuery = () => {
	return useQuery<House[], AxiosError>("houses", () =>
		axios.get(`${config.baseApiUrl}/houses`).then((resp) => resp.data)
	);
};

export { useFetchHouses, useFetchHousesByUseQuery };
