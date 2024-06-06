import { useState } from "react"


function Login({setCredentials}) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    function login() {
        localStorage.setItem('credentials', {email, password});
        setCredentials({email, password})
        window.location.href = '/add_products'
    }

    return(
        <div className="w-full h-screen flex flex-col gap-2 justify-center items-center login-bg">
      <div className="w-11/12 sm:w-1/2 lg:w-1/3 h-1/3 rounded-lg opacity-0.2 flex items-center justify-center bg-white">
        <div className="flex flex-col gap-2 w-4/5 lg:w-3/5">
            <div className="text-3xl font-bold ">Welcome Back!</div>
            <div className="flex justify-center w-full items-center font-semibold text-base text-[#263D42]">
                <h1>Sign in</h1>
            </div>
            <div className="py-2 flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <label>Email<span className="text-red-500">*</span></label>
                    <input
                    className="py-4 px-3 h-6 w-full outline-none text-xs lg:text-base border"
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Password<span className="text-red-500">*</span></label>
                    <input
                    className="py-4 px-3 h-6 w-full outline-none text-sm lg:text-base border"
                    placeholder="Password"
                    type="password"
                    name="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <button
                className=" navbar text-white bg-black py-2 flex justify-center items-center hover:scale-95 text-xs lg:text-sm font-semibold mt-2"
                onClick={() => login()}
            >
                Login
            </button>
        </div>
      </div>
    </div>
    )
}

export default Login