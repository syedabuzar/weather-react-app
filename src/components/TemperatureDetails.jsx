import React from 'react';
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons';

function TemperatureDetails() {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>Cloudy or Whatever</p>
      </div>
      <div className='flex flex-row items-center justify-between py-3 text-white '>
        <img src='http://openweathermap.org/img/wn/01d@2x.png' alt='' />
        <p className='text-5xl'>34°</p>
        <div className='flex flex-col space-y-2'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className='mr-1' />
            Real feel:
            <span className='font-medium ml-1'>32°</span>
          </div>

          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={18} className='mr-1' />
            Humidity:
            <span className='font-medium ml-1'>65%</span>
          </div>

          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={18} className='mr-1' />
            Wind:
            <span className='font-medium ml-1'>11 km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureDetails;
