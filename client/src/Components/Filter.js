import React, { useState } from 'react'

const Filter = () => {  
  const [showbox, setShowbox] = useState(false);
  const [Address, setAddress] = useState(false);
  const [Zipcode, setZipcode] = useState(false);
  return (
    <div className='flex flex-col items-center content-center mt-2'>

            <button className='text-xl font-semibold bg-gray-600 text-white p-2 rounded-md'
                    onClick={() => {setShowbox(true);}}>
                Filter by Address
            </button>
            {showbox ? (
            <select
              className='h-8 w-36 rounded-md'
              // value={selectMonthFilter}
              // onChange={(e) => setSelectMonthFilter(e.currentTarget.value)}
            >
                <option value="">---</option>
                <option value="01">Kathmandu</option>
                <option value="02">Kaski</option>
                <option value="03">Rupandehi</option>
                <option value="04">Bhairahawa</option>
                <option value="05">Dharan</option>
                <option value="06">Chitwan</option>
            </select>
            ) :null }

            {/* //second filter by Addresss */}
            <button className='text-xl font-semibold bg-gray-600 text-white p-2 rounded-md mt-2'
                    onClick={() => {setAddress(true);}}>
                Filter by Location
            </button>
            {Address ? (
            <select
              className='h-8 w-36 rounded-md'
              // value={selectMonthFilter}
              // onChange={(e) => setSelectMonthFilter(e.currentTarget.value)}
            >
                <option value="">---</option>
                <option value="01">Bagmati Pardesh</option>
                <option value="02">Lumbini Pardesh</option>
                <option value="03">Gandaki Pardesh</option>
                <option value="04">Karnali Pardesh</option>
                <option value="05">Sudurpashchim Pardesh</option>
                <option value="06">Madesh Pardesh</option>
                <option value="06"> Provience No 1</option>
            </select>
            ) :null }

            <button className='text-xl font-semibold bg-gray-600 text-white p-2 rounded-md mt-2'
                onClick={() => {setZipcode(true);}}>
                Filter by Zipcode
            </button>
            {Zipcode ? (
                <input 
                name='number'
                placeholder='Enter Zipcode'
                className='h-8 w-36 rounded-md'/>
            ):null }
    </div>
  )
}

export default Filter