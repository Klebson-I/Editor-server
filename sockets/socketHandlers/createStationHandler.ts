import { Station } from "../../classes/Station";

export const createStationHandler = (msg: any) => {
    const { city } = msg;
    const station = new Station(city);
};