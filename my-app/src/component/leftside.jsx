import { React, useEffect, useState } from "react";
// import instalogo from '../assets/instalogo.png';
import profile from '../assets/profile.jpg';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const Leftside = () => {
    // useEffect(()=>{
    //     try{
    //         fetch('http://localhost:5000/getusername')
    //         .then(response => response.json())
    //         .then(data => setpersonusername(data))
    //     }catch(err){
    //         console.error(err);
    //     }
    // },[])

    
    
    // const [personusername, setpersonusername] = useState()
    // useEffect(() => {
    //     // Fetch data from the Express API
    //     fetch('http://localhost:5000/getuser')
    //         .then(response => response.json())
    //         .then(data => {
    //             setpersonusername(data.message);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);
    // const [userdata, setuserdata] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/getuser')
    //         .then(response => response.json())
    //         .then(userdata => setuserdata(userdata))
    //         .catch(err => console.log(err))
    // }, [])

    return (
        <div className=' fixed h-screen bg-[#080710] text-white ml-0'>
            <div className='w-[110px] h-[37px] ml-1 mr-4 py-12 justify-center items-center max-1115:hidden '>
                {/* <img src={instalogo} alt='instagram logo'></img> */}
            </div>

            <div className='flex flex-col my-10 p-4'>
                <NavLink to='/home'>
                    <div className='flex flex-row rounded mr-2 hover:bg-[#004d4d] cursor-pointer h-9 items-center py-2 mb-2 px-1'>
                        <HomeIcon sx={{ fontSize: "30px", margin: "0 30px 0 0" }} />
                        <div className='font-semibold max-1115:hidden'>Home</div>
                    </div>
                </NavLink>
                <div className='flex flex-row rounded mr-2 hover:bg-[#1a0d33] cursor-pointer h-9 items-center py-2 mb-2 px-1'>
                    <SearchIcon sx={{ fontSize: "30px", margin: "0 30px 0 0" }} />
                    <div className='font-semibold max-1115:hidden'>Search</div>
                </div>
                {/* <div className='flex flex-row rounded mr-2 hover:bg-[#004d4d] cursor-pointer h-9 items-center py-2 mb-2 px-1'>
                    <ExploreIcon sx={{ fontSize: "30px", margin: "0 30px 0 0" }} />
                    <div className='font-semibold max-1115:hidden'>Explore</div>
                </div> */}
                {/* <div className='flex flex-row rounded mr-2 hover:bg-[#004d4d] cursor-pointer h-9 items-center py-2 mb-2 px-1'>
                    <MovieCreationSharpIcon sx={{ fontSize: "30px", margin: "0 30px 0 0" }} />
                    <div className='font-semibold max-1115:hidden'>Reels</div>
                </div> */}
                <div className='flex flex-row rounded mr-2 hover:bg-[#004d4d] cursor-pointer h-9 items-center py-2 mb-2 px-1'>
                    <MailOutlineIcon sx={{ fontSize: "30px", margin: "0 30px 0 0" }} />
                    <div className='font-semibold max-1115:hidden'>Messages</div>
                </div>
                <div className='flex flex-row rounded mr-2 hover:bg-[#004d4d] cursor-pointer h-9 items-center py-2 mb-2 px-1'>
                    <NotificationsIcon sx={{ fontSize: "30px", margin: "0 30px 0 0" }} />
                    <div className='font-semibold max-1115:hidden'>Notifications</div>
                </div>
                <NavLink to='/create'>
                    <div className='flex flex-row rounded mr-2 hover:bg-[#004d4d] cursor-pointer h-9 items-center py-2 mb-2 px-1'>
                        <AddBoxIcon sx={{ fontSize: "30px", margin: "0 30px 0 0" }} />
                        <div className='font-semibold max-1115:hidden'>Create</div>
                    </div>
                </NavLink>
                <NavLink to='/profile'>
                    <div className='flex flex-row rounded mr-2 hover:bg-[#004d4d] cursor-pointer h-9 items-center py-2 mb-2 px-1'>
                        <img src={profile} alt='profile pic' className='h-8 w-8 rounded-full mr-6'></img>
                        <div className='font-semibold max-1115:hidden'>harsh_massive</div>
                    </div>
                </NavLink>
            </div>
            <div className='mt-16 p-4 mr-2'>
                <div className='flex flex-row rounded mr-4 hover:bg-[#004d4d] cursor-pointer h-9 items-center py-2 mb-3 px-1'>
                    <SettingsIcon sx={{ fontSize: "30px", margin: "0 30px 0 0" }} />
                    <div className='font-semibold max-1115:hidden'>Settings</div>
                </div>
                <div className='flex flex-row rounded mr-4 hover:bg-[#004d4d] cursor-pointer h-9 items-center py-2 mb-3 px-1'>
                    <LogoutIcon sx={{ fontSize: "30px", margin: "0 30px 0 0" }} />
                    <div className='font-semibold max-1115:hidden'>Logout</div>
                </div>
            </div>
        </div>


    );
}

export default Leftside;
