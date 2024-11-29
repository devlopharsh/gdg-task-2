import React from 'react'
import profile from '../assets/profile.jpg'

const Rightside = () => {
    return (

        <div id='rightaccounts' className=' flex flex-col justify-between my-20 w-[100%] py-2 items-center max-1115:hidden bg-[#080710] text-white'>

            <div className=' flex flex-row gap-20 justify-between items-center'>
                <div className='flex flex-row gap-3 items-center'>
                    <img src={profile} className='w-12 rounded-full p-[2px] border-2 border-blue-600 cursor-pointer '></img>
                    <div className='flex flex-col my-0 py-0'>
                        <div className='text-[15px] weight font-medium cursor-pointer' >Cybernerd</div>
                        <div className='text-[13px] weight font-medium text-[#999999] cursor-pointer' > Ayush Jaiswal</div>
                    </div>
                </div>


                <div className='text-[#0095F6]-600 cursor-pointer'>switch</div>
            </div>

            <div className='flex flex-row text-[14px] w-[100%]  justify-between gap-20 mt-7 items-center'>
                <div className='text-[#999999]'>Suggested for you</div>
                <div className='font-semibold  cursor-pointer'>See All</div>
            </div>

            <div className='flex flex-col my-3'>
                <div className=' flex flex-row gap-20 justify-between items-center mb-1'>
                    <div className='flex flex-row gap-3 items-center'>
                        <img src={profile} className='w-12 rounded-full p-[2px] border-2 border-blue-600 cursor-pointer '></img>
                        <div className='flex flex-col my-0 py-0'>
                            <div className='text-[15px] weight font-medium cursor-pointer' >Cybernerd</div>
                            <div className='text-[13px] weight font-medium text-[#999999] cursor-pointer' > Ayush Jaiswal</div>
                        </div>
                    </div>
                    <div className='text-[#0095F6]-600  cursor-pointer'>
                        Follow
                    </div>
                </div>

                <div className=' flex flex-row gap-20 justify-between items-center mb-1'>
                    <div className='flex flex-row gap-3 items-center'>
                        <img src={profile} className='w-12 rounded-full p-[2px] border-2 border-blue-600 cursor-pointer '></img>
                        <div className='flex flex-col my-0 py-0'>
                            <div className='text-[15px] weight font-medium cursor-pointer' >Cybernerd</div>
                            <div className='text-[13px] weight font-medium text-[#999999] cursor-pointer' > Ayush Jaiswal</div>
                        </div>
                    </div>
                    <div className='text-[#0095F6]-600 cursor-pointer'>
                        Follow
                    </div>
                </div>

                <div className=' flex flex-row gap-20 justify-between items-center mb-1'>
                    <div className='flex flex-row gap-3 items-center'>
                        <img src={profile} className='w-12 rounded-full p-[2px] border-2 border-blue-600 cursor-pointer '></img>
                        <div className='flex flex-col my-0 py-0'>
                            <div className='text-[15px] weight font-medium cursor-pointer' >Cybernerd</div>
                            <div className='text-[13px] weight font-medium text-[#999999] cursor-pointer' > Ayush Jaiswal</div>
                        </div>
                    </div>
                    <div className='text-[#0095F6]-600  cursor-pointer'>
                        Follow
                    </div>
                </div>

                <div className=' flex flex-row gap-20 justify-between items-center mb-1'>
                    <div className='flex flex-row gap-3 items-center'>
                        <img src={profile} className='w-12 rounded-full p-[2px] border-2 border-blue-600 cursor-pointer '></img>
                        <div className='flex flex-col my-0 py-0'>
                            <div className='text-[15px] weight font-medium cursor-pointer' >Cybernerd</div>
                            <div className='text-[13px] weight font-medium text-[#999999] cursor-pointer' > Ayush Jaiswal</div>
                        </div>
                    </div>
                    <div className='text-[#0095F6]-600  cursor-pointer'>
                        Follow
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Rightside;