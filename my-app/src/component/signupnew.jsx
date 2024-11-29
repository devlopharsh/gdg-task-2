import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
    const [username, setusername] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/signup', { username, email, password })
            .then(result => {
                console.log(result)
                if (result.status === 201 ) {
                    alert("signed up successfully")
                    navigate('/login')
                }
            })
            .catch(err => console.log(err))
    }
    const redirect = () => {
        navigate('/login');
    };


    return (
        <div className="flex items-center justify-center min-h-screen h-screen overflow-y-hidden bg-[#080710]">
            <div className="relative w-[430px] h-[650px]">
                {/* Background shapes */}
                <div className="absolute w-[200px] h-[200px] bg-gradient-to-b from-[#1845ad] to-[#23a2f6] rounded-full top-[-80px] left-[-80px]" />
                <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-[#ff512f] to-[#f09819] rounded-full bottom-[-80px] right-[-30px]" />

                {/* Form */}
                <form onSubmit={handlesubmit} className="relative z-10 w-[400px] h-[650px] bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_0_40px_rgba(8,7,16,0.6)] rounded-lg px-10 py-2 mx-auto">
                    <h3 className="text-2xl font-semibold text-center text-white">Sign Up Here</h3>

                    <label htmlFor="username" className="block mt-6 text-sm font-medium text-white">
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        className="w-full h-[40px] mt-1 bg-white/20 rounded-sm px-3 text-sm text-white placeholder-gray-200 focus:outline-none"
                        onChange={(e) => setusername(e.target.value)}
                    />

                    <label htmlFor="email" className="block mt-6 text-sm font-medium text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        className="w-full h-[40px] mt-1 bg-white/20 rounded-sm px-3 text-sm text-white placeholder-gray-200 focus:outline-none"
                        onChange={(e) => setemail(e.target.value)}
                    />

                    <label htmlFor="password" className="block mt-6 text-sm font-medium text-white">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        className="w-full h-[40px] mt-1 bg-white/20 rounded-sm px-3 text-sm text-white placeholder-gray-200 focus:outline-none"
                        onChange={(e) => setpassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full mt-5 py-2 text-lg font-semibold text-[#080710] bg-white rounded-md hover:bg-gray-100 transition-colors"
                    >
                        Sign Up
                    </button>

                    {/* Social buttons */}
                    <div className="flex justify-between mt-4">
                        <div className="flex items-center justify-center w-[150px] py-2 bg-white/30 text-white rounded-md hover:bg-white/50 transition-colors cursor-pointer">
                            <i className="fab fa-google mr-2" /> Google
                        </div>
                        <div className="flex items-center justify-center w-[150px] py-2 bg-white/30 text-white rounded-md hover:bg-white/50 transition-colors cursor-pointer">
                            <i className="fab fa-facebook mr-2" /> Facebook
                        </div>
                    </div>
                    <button
                        onClick={redirect}
                        className="text-blue-500 mt-2 underline justify-end "   >
                        Already have an account? Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
