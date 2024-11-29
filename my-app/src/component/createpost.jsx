import React, { useState } from "react";
import profile from '../assets/profile.jpg';

const Create = () => {
    const [file, setFile] = useState(null);

    const loadfile = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    return (
        <div className="bg-[#000000] w-screen h-screen overflow-x-hidden overflow-y-scroll flex items-center">
            <div className="createPost max-w-[500px] max-h-[800px] m-auto border border-solid-[rgb(173,173,173)] rounded  bg-[#080710] text-white">
                <div className="post-header flex flex-row justify-center mt-2">
                    <h4 className="m-auto ">Create new post</h4>
                    {/* <button id="post-btn" className="text-[#339ce3] font-medium cursor-pointer mx-2">
                        Share
                    </button> */}
                </div>

                <div className="main-div border-t border-solid-[rgb(173,173,173)] m-[10px] flex flex-col items-center">
                    {file ? (
                        file.type.startsWith("image/") ? (
                            <img
                                id="output"
                                src={URL.createObjectURL(file)}
                                alt="preview"
                                className="max-w-full h-auto mb-4"
                            />
                        ) : (
                            <video
                                id="output"
                                controls
                                src={URL.createObjectURL(file)}
                                className="max-w-full h-auto mb-4"
                            />
                        )
                    ) : (
                        <img
                            id="placeholder"
                            src="https://cdn-icons-png.flaticon.com/128/44/44289.png"
                            alt="placeholder"
                            className="justify-center items-center"
                        />
                    )}

                    <input
                        type="file"
                        accept="image/*, video/*"
                        onChange={loadfile}
                        className="mt-4 text-white"
                    />
                </div>

                <div className="details border-t border-solid-[rgb(173,173,173)] flex flex-col items-center ">
                    <div className="card-header flex flex-row gap-[5px] justify-start items-center m-3">
                        <div className="card-pic">
                            <img src={profile} alt="profile" className="w-10 rounded-full p-[2px] border-2 border-blue-600 cursor-pointer" />
                        </div>
                        <h5>Cybernerd</h5>
                    </div>
                    <textarea
                        placeholder="Type a caption"
                        className="w-[90%] bg-[#1b1f2a] text-white border-none focus:outline-none resize-none p-2 rounded-md"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full m-5 py-3 text-lg font-semibold max-w-[200px] text-white bg-black rounded-md hover:bg-[#1b1f2a] transition-colors"
                    >
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Create;
