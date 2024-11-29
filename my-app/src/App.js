import React from 'react';
import Leftside from './component/leftside';
import Middleside from './component/middleside';
import Rightside from './component/rightside';
import Profile from './component/profilevisit';
import Home from './component/home';
import Create from './component/createpost';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePart from './component/profilevisit';
import LoginForm from './component/loginnew';
import SignupForm from './component/signupnew';



function App() {

  const router = createBrowserRouter([
    {
      path: "/login",
      // element: <LoginSignup />,
      element: < LoginForm />,
    },
    {
      path: "/",
      // element: <LoginSignup />,
      element: < LoginForm />,
    },
    {
      path: "/signup",
      element: <SignupForm />,
    },
    {
      path: "/profile",
      element: <ProfilePart />,
    },
    {
      path: "/home",
      element: (
        <div className='w-full h-[100%] pr-4 m-0 flex bg-[#080710] text-white'>
          <div className='px-4 border-solid fixed max-1115:flex max-720:flex'>
            <Leftside />
          </div>
          <div className='ml-[15%] absolute max-1115:justify-center max-1115:items-center max-1115:flex'>
            <Middleside />
          </div>
          <div className='ml-[65%]'>
            <Rightside />
          </div>
        </div>
      ),
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/profile",
      element: <ProfilePart />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
