import React from 'react';
import { iconUrlFromCode } from '../services/WeatherService';

function Forecast({ title, items }) {
  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2' />
      {items ? (
        <div className='flex flex-row items-center justify-between text-white'>
          {items.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center'
            >
              <p className='font-light text-sm'>{item.title}</p>
              <img
                src={iconUrlFromCode(item.icon)}
                className='w-12 my-1'
                alt=''
              />
              <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className=' flex flex-row items-center justify-between text-white'>
          <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>01:30 PM</p>
            <img
              src='http://openweathermap.org/img/wn/01d@2x.png'
              alt=''
              className='w-12 my-1'
            />
            <p className='font-medium'>22°</p>
          </div>

          <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>02:30 PM</p>
            <img
              src='http://openweathermap.org/img/wn/01d@2x.png'
              alt=''
              className='w-12 my-1'
            />
            <p className='font-medium'>20°</p>
          </div>
          <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>03:30 PM</p>
            <img
              src='http://openweathermap.org/img/wn/01d@2x.png'
              alt=''
              className='w-12 my-1'
            />
            <p className='font-medium'>25°</p>
          </div>
          <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>04:30 PM</p>
            <img
              src='http://openweathermap.org/img/wn/01d@2x.png'
              alt=''
              className='w-12 my-1'
            />
            <p className='font-medium'>19°</p>
          </div>
          <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>05:30 PM</p>
            <img
              src='http://openweathermap.org/img/wn/01d@2x.png'
              alt=''
              className='w-12 my-1'
            />
            <p className='font-medium'>21°</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Forecast;
