import {useState,useEffect} from 'react'

const Registration = () => {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const { name, email, password, password2 } = formData;

    const onChange = (e) => {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
      e.preventDefault()  
    }

  return (
    <div className='h-screen w-full '>
           <div className="mt-8 w-5xl sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white max-w-5xl py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={onSubmit}>
                <h1 className='text-4xl font-bold text-center text-indigo-600'>Create Account</h1>
                <div>
                  <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                   Username
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      value= {name}
                      onChange={onChange}
                      placeholder="Enter your Username"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      placeholder="Enter your E-mail"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      placeholder="Enter your Password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password2"
                      name="password2"
                      value={password2}
                      onChange={onChange}
                      placeholder='Confirm Password'
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
                </div> */}
  
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create an account
                  </button>
                </div>
              </form>
  
              <div className="mt-6">
                <div className='py-3   text-right'>
                  <span className='text-gray-900 font-boldmr-2'>Have an account ?</span><span className='cursor-pointer border-1 p-1 text-indigo-800 rounded-sm font-bold'>Log in</span>
                  
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Registration