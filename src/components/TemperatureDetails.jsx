import React from 'react';
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons';
import { formatToLocalTime, iconUrlFromCode } from '../services/WeatherService';

function TemperatureDetails({ weather }) {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>{weather ? weather.details : 'Clear'}</p>
      </div>

      <div className='flex flex-row items-center justify-between text-white py-3'>
        <img
          src={weather ? iconUrlFromCode(weather.icon) : iconUrlFromCode('01d')}
          alt=''
          className='w-20'
        />
        <p className='text-5xl'>
          {weather ? `${weather.temp.toFixed()}°` : '25°'}
        </p>
        <div className='flex flex-col space-y-2'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className='mr-1' />
            Real feel:
            <span className='font-medium ml-1'>
              {weather ? `${weather.feels_like.toFixed()}°` : '20°'}
            </span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={18} className='mr-1' />
            Humidity:
            <span className='font-medium ml-1'>
              {weather ? `${weather.humidity.toFixed()}%` : '35%'}
            </span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={18} className='mr-1' />
            Wind:
            <span className='font-medium ml-1'>
              {weather ? `${weather.speed.toFixed()} km/h` : '1 km/h'}
            </span>
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
        <UilSun />
        <p className='font-light'>
          Rise:{' '}
          <span className='font-medium ml-1'>
            {weather
              ? formatToLocalTime(weather.sunrise, weather.timezone, 'hh:mm a')
              : '04:50 AM'}
          </span>
        </p>
        <p className='font-light'>|</p>

        <UilSunset />
        <p className='font-light'>
          Set:{' '}
          <span className='font-medium ml-1'>
            {weather
              ? formatToLocalTime(weather.sunset, weather.timezone, 'hh:mm a')
              : '07:25 PM'}
          </span>
        </p>
        <p className='font-light'>|</p>

        <UilSun />
        <p className='font-light'>
          High:{' '}
          <span className='font-medium ml-1'>
            {weather ? `${weather.temp_max.toFixed()}°` : '30°'}
          </span>
        </p>
        <p className='font-light'>|</p>

        <UilSun />
        <p className='font-light'>
          Low:{' '}
          <span className='font-medium ml-1'>
            {weather ? `${weather.temp_min.toFixed()}°` : '18°'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureDetails;
