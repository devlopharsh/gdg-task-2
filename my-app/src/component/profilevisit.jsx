import React from 'react';
import profile from '../assets/profile.jpg'
import Posts from './pages/post';
function ProfileSection2({ user }) {
  return (
    <div className="max-w-xl mx-auto p-6 bg-black rounded-lg shadow-md">
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <img
          src={profile}
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-gray-300"
        />
        <div>
          <h2 className="text-2xl font-bold text-white">Ayush</h2>
          <p className="text-gray-400">@Cybernerd</p>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="mt-4 flex justify-around text-center border-t border-gray-500 pt-4">
        <div>
          <h3 className="text-xl font-semibold text-white">120</h3>
          <p className="text-gray-400">Posts</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">100</h3>
          <p className="text-gray-400">Followers</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">10</h3>
          <p className="text-gray-400">Following</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mt-4 text-gray-400">
        <p>No bio</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="flex-grow py-2 text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md">
          Follow
        </button>
        <button className="flex-grow py-2 text-white bg-gray-700 hover:bg-gray-800 font-semibold rounded-md">
          Message
        </button>
      </div>
    </div>
  );
}

export default ProfileSection2;
