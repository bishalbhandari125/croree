import React from 'react'
const people = [
    {
      name: '#SherBahadur',
  
      imageUrl:'../../Assets/sherbahadur.jpg'    },
    {
        name: '#gaganthapa',
      
        imageUrl:'../../Assets/gagan-thapa.jpg'       },
      {
        name: '#rabi',
       
        imageUrl:
        '../../Assets/rabi.jpg'       },
      {
        name: '#sagardhakal',
       
        imageUrl:'../../Assets/sagardhakal.jpg'      },
    // More people...
  ]

const Trends = () => {
  return (
    <div className="bg-white">
      <h1 className='text-3xl font-bold text-center mt-8'>Trends</h1>
        <hr></hr>
    <div className="max-w-7xl mx-auto py-6 px-4 text-center sm:px-4 lg:px-8 lg:py-6">
      <div className="space-y-7">
        <ul
          role="list"
          className="mx-auto space-y-8 grid grid-cols-2 md:grid-cols-3 sm:gap-2 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="">
                <img className="mx-auto h-24 w-24 rounded-md xl:w-24 xl:h-24 sm:w-24 sm:h-24" src={person.imageUrl} alt="" />
                <div className="space-y-2">
                  <div className="text-lg font-medium space-y-1">
                    <h3>{person.name}</h3>
                    <p className="text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  </div>
  )
}

export default Trends