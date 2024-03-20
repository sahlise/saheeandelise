"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image';

import { IoSunny } from "react-icons/io5";

type WeatherData = {
    icon: any;
    temperature: string;
};

export default function WeatherWidget() {
    const [weather, setWeather] = useState<WeatherData>({ icon: "", temperature: "" });

    const fetchWeather = async () => {
        try {
            // const weatherReq = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d040d186edaf4e178eb50326240303&q=43.6456654,-89.7750759&days=1&aqi=no&alerts=no`);
            // const weatherData = await weatherReq.json();
            // console.log(weatherData);
            // setWeather({icon: <Image src={"https:" + weatherData.current.condition.icon} alt={`It is ${weatherData.current.temp_c} in your city`} width={100%} height={100%} />, temperature: weatherData.current.temp_f + "º F"});
            setWeather({ icon: <IoSunny className="h-full w-full" />, temperature: "50ºF" })
        }
        catch {
            console.log("xWthErr");
        }
    };
    useEffect(() => {
        fetchWeather();
    }, []);
    return (
        <div className="grid grid-rows-2 gap-2 w-full h-full">
            <div className="h-full">{weather.icon}</div>
            <div className="h-full text-lg">{weather.temperature}</div>
        </div>
    )
}