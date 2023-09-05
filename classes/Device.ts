import { Station } from "./Station";
import { v4 } from 'uuid';

export interface DeviceInterface {
    readonly id: string,
    update: () => void;
};

export class Device implements DeviceInterface{
    readonly id: string;
    private temperature: number;
    private humidity: number;
    private station: Station;

    constructor (station: Station) {
        this.station = station;
        this.id = v4();
    }

    update () {
        this.temperature = this.station.temperature;
        this.humidity = this.station.humidity;
    }

    getDeviceInfoObject () {
        const informationObject = {
            deviceId: this.id,
            temperature: this.temperature - 273,
            humidity: this.humidity,
        };
        return informationObject;
    }
};
