import fetch from "node-fetch";
import { DeviceInterface } from "./Device";

interface WeatcherApiResponse {
    main: {
        temp: number,
        humidity: number,
    },
};

interface StationInterface {
    temperature: number;
    humidity: number;
};

export class Station implements StationInterface{
    private city: string;
    private devices: DeviceInterface [] = [];
    private _temperature: number;
    private _humidity: number;
    private licenseKey = '7c45749d4db3ffe53bef9db0498c2d31';

    constructor (city: string) {
        this.city = city;
    };

    get temperature () {
        return this._temperature;
    }

    get humidity () {
        return this._humidity;
    }

    add (device: DeviceInterface) {
        this.devices.push(device);
    }

    remove (device: DeviceInterface) {
        this.devices = this.devices.filter((localDevice) => localDevice.id !== device.id);
    }

    notify () {
        this.devices.forEach((device) => device.update());
    }

    async getWeatcherDataForCity () : Promise<WeatcherApiResponse>{
        let apiSyntax=`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.licenseKey}`;
        const rawData = await fetch(apiSyntax); 
        const data = await rawData.json() as WeatcherApiResponse;
        return data;
    }

    setWeatcherData (data: WeatcherApiResponse) : void {
        const { main: { temp: temperature, humidity }} = data;
        this._temperature = temperature;
        this._humidity = humidity;
    }
};
