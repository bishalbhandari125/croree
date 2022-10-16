import Balkrishna from '../../Assets/balkrishna.jpg'

import { useNavigate } from "react-router-dom";
import Trends from './Trends';
const files = [
  {
    
    title: 'Sher Bahadur Deuba',
    role: 'Prime minister',
    source:'../../Assets/sherbahadur.jpg' 
   },
  {
    title: 'KP Oli',
    role: 'Former Prime minister',
    source:'../../Assets/KP_Oli.png' 
   },
  {
    title: 'Prachanda Dahal',
    role: 'Nepali Moist',
    source:'../../Assets/Prachanda.jpg' 
   },
  {
    title: 'Rabi Lamichhane',
    role: 'Nepal Independent Party',
    source:'../../Assets/rabi.jpg' 
   },
  {
    title: 'Sagar Dhakal',
    role: 'Independent',
    source:'../../Assets/sagardhakal.jpg'  
  },
  {
    title: 'Gagan Thapa',
    role: 'Nepali Congress',
    source:'../../Assets/gagan-thapa.jpg' 
   },
  {
    title: 'Bishnu Prasad Paudel',
    role: 'UML',
    source:'../../Assets/bishnuprasad.jpg'  
  },
  {
    title: 'Balkrishna Khand',
    role: 'Home minister',
    source:'../../Assets/balkrishna.jpg'
  },
  // More files...
]

export default function Politicianlistformain() {
  let navigate = useNavigate();
  function navigatetoDetail() {
    navigate("/detailedpage");
  }
  return (
    <div className="p-4">
      <h1 className='font-bold text-3xl text-center p-3'>Popular Politicians</h1>
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.source} className="relative" >
          <div className="group aspect-square block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100" onClick={navigatetoDetail}>
            <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="cursor-pointer mt-2 block truncate text-sm  text-gray-900text-xl font-bold">{file.title}</p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.role}</p>
        </li>
      ))}
    </ul>
    <div>
      <Trends />
    </div>
    </div>
  )
}


