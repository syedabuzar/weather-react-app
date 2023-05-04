import React from 'react'

function TopButtons() {
    const citites = [{
        id: 1,
        title: 'London'
    },
    {
        id: 2,
        title: 'Sydney'
    },
    {
        id: 3,
        title: 'Tokyo'
    },
    {
        id: 4,
        title: 'Toronto'
    },
    {
        id: 5,
        title: 'Paris'
    }
]
return (
    <div className='flex items-center justify-around my-5 '>
        {citites.map((city) => (
            <button key={city.id} className=' font-medium text-lg text-white '>{city.title}</button>
        

        ))}
    </div>
  )
}

export default TopButtons