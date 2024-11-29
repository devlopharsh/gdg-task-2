import React from 'react'
import profile from '../../assets/profile.jpg'
import picone from '../../assets/picone.jpg'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShareIcon from '@mui/icons-material/Share';



const Posts = () => {
    return (
        <div id='singlepost ' className='border-solid-[#e8e8e8] border-[1px]  rounded p-1 bg-black mb-2 pb-1' >
            <div id='postinfo' className='flex flex-row justify-between pr-3 py-2'>
                <div className='flex flex-row items-center gap-3 '>
                    <img src={profile} className='w-10 rounded-full p-[2px] border-2 border-blue-600 cursor-pointer '></img>
                    <div className='text-[15px] weight font-medium cursor-pointer' >Ayush Jaiswal</div>
                    <div className='text-[13px] weight font-medium text-[#999999] cursor-pointer' > . 5 min</div>
                </div>
                <MoreHorizIcon sx={{ fontSize: '25px' }} className='cursor-pointer flex items-center' />
            </div>
            <div id='postimg' className=' '>
                <img src={pic3} className='max-w-[100%] h-[70%]'></img>
            </div>
            <div id='belowpost' className='flex flex-row gap-3 justify-between py-3'>
                <div className='flex flex-row gap-3 '>
                    <ThumbUpOffAltIcon sx={{ fontSize: '25px' }} className='cursor-pointer' />
                    <ThumbDownOffAltIcon sx={{ fontSize: '25px' }} className='cursor-pointer' />
                    <ChatBubbleOutlineIcon sx={{ fontSize: '25px' }} className='cursor-pointer' />

                </div>
                <ShareIcon sx={{ fontSize: '25px' }} className=' cursor-pointer' />
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
            <div className='text-[14px] text-[#999999] cursor-pointer '>
                View all 124 comments
            </div>
            <div className='text-[14px] text-[#999999] flex flex-row '>
                {/* Add a comment */}
                <input type='text' placeholder='Add a comment'className='border-none bg-transparent text-[#ffffff] focus:border-none focus:outline-none w-full'></input>
                <SendIcon sx={{ fontSize: '25px' }} className=' cursor-pointer hover:text-[#ffffff]' />
            </div>
        </div>
    )
}

export default Posts;