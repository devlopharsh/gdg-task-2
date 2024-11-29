import React from 'react'
import profile from '../assets/profile.jpg'
import Posts from './pages/post.jsx'

// import picone from '../assets/picone.jpg'
// import pic2 from '../assets/pic2.png'
// import pic3 from '../assets/pic3.jpg'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import SendIcon from '@mui/icons-material/Send';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Middleside = () => {
    return (
        <div className='my-0 mx-0 h-[100%]  w-[85%] py-4 px-3 box-border flex flex-col justify-center items-center bg-[#080710] text-white'>
            {/* <div id="storyblock" className='w-[83%] box-border flex flex-row justify-start overflow-x-auto gap-[10px] scrollbar-hide ' >
                <div className=' flex flex-col justify-center items-center my-1 '>
                    <div><img src={profile} className=' min-w-[66px] min-h-[66px] w-[66px] h-[66px] rounded-full border border-solid p-[2px] cursor-pointer'></img></div>
                    <div><h3 className=' cursor-pointer'>ayush</h3> </div>
                </div>

                <div className=' flex flex-col justify-center items-center my-1  cursor-pointer'>
                    <div><img src={profile} className=' min-w-[66px] min-h-[66px] w-[66px] h-[66px] rounded-full border border-solid p-[2px]'></img></div>
                    <div><h3>ayush</h3> </div>
                </div>
                <div className=' flex flex-col justify-center items-center my-1  cursor-pointer'>
                    <div><img src={profile} className=' min-w-[66px] min-h-[66px] w-[66px] h-[66px] rounded-full border border-solid p-[2px]'></img></div>
                    <div><h3>ayush</h3> </div>
                </div>
                <div className=' flex flex-col justify-center items-center my-1 cursor-pointer'>
                    <div><img src={profile} className=' min-w-[66px] min-h-[66px] w-[66px] h-[66px] rounded-full border border-solid p-[2px]'></img></div>
                    <div><h3>ayush</h3> </div>
                </div>
                <div className=' flex flex-col justify-center items-center my-1 cursor-pointer'>
                    <div><img src={profile} className=' min-w-[66px] min-h-[66px] w-[66px] h-[66px] rounded-full border border-solid p-[2px]'></img></div>
                    <div><h3>ayush</h3> </div>
                </div>
                <div className=' flex flex-col justify-center items-center my-1 cursor-pointer'>
                    <div><img src={profile} className=' min-w-[66px] min-h-[66px] w-[66px] h-[66px] rounded-full border border-solid p-[2px]'></img></div>
                    <div><h3>ayush</h3> </div>
                </div>
                <div className=' flex flex-col justify-center items-center my-1  cursor-pointer'>
                    <div><img src={profile} className=' min-w-[66px] min-h-[66px] w-[66px] h-[66px] rounded-full border border-solid p-[2px]'></img></div>
                    <div><h3>ayush</h3> </div>
                </div>
                <div className=' flex flex-col justify-center items-center my-1  cursor-pointer'>
                    <div><img src={profile} className=' min-w-[66px] min-h-[66px] w-[66px] h-[66px] rounded-full border border-solid p-[2px]'></img></div>
                    <div><h3>ayush</h3> </div>
                </div>
                <div className=' flex flex-col justify-center items-center my-1 cursor-pointer'>
                    <div><img src={profile} className=' min-w-[66px] min-h-[66px] w-[66px] h-[66px] rounded-full border border-solid p-[2px]'></img></div>
                    <div><h3>ayush</h3> </div>
                </div>
                <div className=' flex flex-col justify-center items-center my-1 cursor-pointer'>
                    <div><img src={profile} className=' min-w-[66px] min-h-[66px] w-[66px] h-[66px] rounded-full border border-solid p-[2px]'></img></div>
                    <div><h3>ayush</h3> </div>
                </div>


            </div> */}

            <div id='post section' className='w-[65%] mt-3  box-border flex justify-start overflow-y-auto gap-[8px] scrollbar-hide flex-col items-center' >
                {/* <div id='singlepost ' className='border-b-[2px] border-solid mb-2 pb-1' >
                    <div id='postinfo' className='flex flex-row justify-between pr-3 py-2'>
                        <div className='flex flex-row items-center gap-3 '>
                            <img src={profile} className='w-10 rounded-full p-[2px] border-2 border-blue-600 cursor-pointer '></img>
                            <div className='text-[15px] weight font-medium cursor-pointer' >Ayush Jaiswal</div>
                            <div className='text-[13px] weight font-medium text-[#999999] cursor-pointer' > . 5 min</div>
                        </div>
                        <MoreHorizIcon sx={{ fontSize: '25px' }} className='cursor-pointer flex items-center' />
                    </div>
                    <div id='postimg' className=''>
                        <img src={pic3} className='max-w-[100%]'></img>
                    </div>
                    <div id='belowpost' className='flex flex-row gap-3 justify-between py-3'>
                        <div className='flex flex-row gap-3 '>
                            <FavoriteBorderIcon sx={{ fontSize: '25px' }} className='cursor-pointer' />
                            <ChatBubbleOutlineIcon sx={{ fontSize: '25px' }} className='cursor-pointer' />
                            <SendIcon sx={{ fontSize: '25px' }} className=' cursor-pointer' />
                        </div>
                        <BookmarkBorderIcon sx={{ fontSize: '25px' }} className=' cursor-pointer' />
                    </div>
                    <div id='likesection' className='flex flex-row items-center mb-1'>
                        <img src={pic2} className='w-[17px] h-[17px] rounded-full absolute'></img>
                        <img src={picone} className='w-[17px] h-[17px] relative rounded-full left-2'></img>
                        <div className='relative left-4 text-[12px] font-semibold'>1,123 likes</div>
                    </div>
                    <div className='flex flex-row justify-between text-[14px] '>
                        <div id='commentor' className='flex flex-row gap-[8px] items-center'>
                            <div className='text-[14px] font-medium cursor-pointer'>@instauser</div>
                            <div className='text-[14px] font-normal'>i am commenting here</div>
                        </div>
                        <div className='text-[#999999]'>...more</div>
                    </div>
                    <div className='text-[14px] text-[#999999] '>
                        View all 124 comments
                    </div><div className='text-[14px] text-[#999999] '>
                        Add a comment
                    </div>
                </div> */}
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
            </div>


        </div>
    )
}

export default Middleside;