import { useState, useEffect, useRef } from 'react'
import axios from '../api/Api';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const REGISTER_URL = '/register';

const Registration = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);



  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(REGISTER_URL,
        JSON.stringify({ user,email, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response))
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser('');
      setEmail('')
      setPwd('');
      setMatchPwd('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed')
      }
      errRef.current.focus();
    }
  }


  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section className='h-screen w-full bg-slate-500'>
          <div className="mt-5 w-5xl sm:mx-auto sm:w-full sm:max-w-md ">
            <div className="bg-white max-w-5xl  px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <p ref={errRef} className={errMsg ? "errmsg" : "none"} aria-live="assertive">{errMsg}</p>
                <h1 className='text-4xl font-bold text-center pt-3 text-indigo-600'>Create Account</h1>
               {/* USername */}
                <div>
                  <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  
                    <input
                      type='text'
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                      aria-invalid={validName ? "false" : "true"}
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                      aria-describedby="uidnote"
                      placeholder="Enter your Username"
                      required
                      className={`${validName ? "border-green-600" : "border-rose-600"} appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm`}
                    />
               
                  <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "hidden"}>
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                  </p>
                </div>
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className={`mt-1`}>
                    <input
                      id="email"
                      name="email"
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={validEmail ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      placeholder="Enter your E-mail"
                      autoComplete="email"
                      required
                      className={`${validEmail ? "border-green-600" : "border-rose-600"} appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm`}
                    />
                  </div>
                </div>
              {/* PAssword */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={pwd}
                      onChange={(e) => setPwd(e.target.value)}
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      placeholder="Enter your Password"
                      required
                      className={`${validPwd ? "border-green-600" : "border-rose-600"} appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm`}
                    />
                  </div>
                  <p id="pwdnote" className={`bg-gray-700 text-white ${pwdFocus && !validPwd ? "instructions" : "hidden"}`}>

                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                  </p>
                </div>

                {/* Confirm password */}
                <div>
                  <label htmlFor="password2" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirm_password"
                      type="password"
                      value={matchPwd}
                      onChange={(e) => setMatchPwd(e.target.value)}
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                      placeholder='Confirm Password'
                      required
                      className={`${validMatch ? "border-green-600" : "border-rose-600"} appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm`}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create an account
                  </button>
                </div>
              </form>

              <div className="mt-2">
                <div className='py-3   text-right'>
                  <span className='text-gray-900 font-boldmr-2'>Have an account ?</span><span className='cursor-pointer border-1 p-1 text-indigo-800 rounded-sm font-bold'>Log in</span>

                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Registration