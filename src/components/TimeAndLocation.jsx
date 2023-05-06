import React from 'react';
import { formatToLocalTime } from '../services/WeatherService';

function TimeAndLocation({ weather }) {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
          {weather
            ? formatToLocalTime(weather.dt, weather.timezone)
            : 'Tuesday, 31 Mar 2022 | Local time: 12:46 PM'}
        </p>
      </div>

      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>
          {weather ? `${weather.name}, ${weather.country}` : 'Lahore, LHE'}
        </p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
