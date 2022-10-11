import React from 'react'
const people = [
    {
      name: 'Whitney Francis',
      role: 'Copywriter',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Whitney Francis',
        role: 'Copywriter',
        imageUrl:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
      {
        name: 'Whitney Francis',
        role: 'Copywriter',
        imageUrl:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
      {
        name: 'Whitney Francis',
        role: 'Copywriter',
        imageUrl:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      },
    // More people...
  ]

const Politicianlistformain = () => {
  return (
    <div className="bg-white">
    <div className="max-w-7xl mx-auto py-6 px-4 text-center sm:px-4 lg:px-8 lg:py-6">
      <div className="space-y-7">
        <ul
          role="list"
          className="mx-auto space-y-8 grid grid-cols-2 md:grid-cols-3 sm:gap-5 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="space-y-5">
                <img className="mx-auto h-40 w-40 rounded-md xl:w-40 xl:h-40 sm:w-24 sm:h-24" src={person.imageUrl} alt="" />
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
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

export default Politicianlistformain