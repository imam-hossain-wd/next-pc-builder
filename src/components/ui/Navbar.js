import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSession,signOut } from "next-auth/react";
import { useSignOut } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from "react-redux";
import { auth } from '@/firebase/firebase.config';
import { clearUser } from '@/redux/features/user/userSlice';

const Navbar = () => {

  const { data: session } = useSession();
  const nextAuthUserEmail = session?.user;
  const firebaseUserEmail = useSelector((state) => state.user.user.email);
  firebaseUserEmail && console.log("firebase email", firebaseUserEmail);
  nextAuthUserEmail && console.log("nextauth github email", nextAuthUserEmail);

  const [signOutFirebase] = useSignOut(auth);
  const dispatch = useDispatch();

  const nextAuthLoggedOut = async () => {
    await signOut();
    dispatch(clearUser())
  };

  // Firebase Logout Function
  const firebaseLoggedOut = async () => {
    await signOutFirebase();
    dispatch(clearUser());
  };


  const renderAuthButtons = () => {
    if (nextAuthUserEmail) {
      return <li onClick={nextAuthLoggedOut}><a>Sing out</a></li>

    }
    else if (firebaseUserEmail) {
      return <li onClick={firebaseLoggedOut}><a>Sing out</a></li>

    }else {
      return (
        <div className='flex'>
          <li><Link href='singin'>Sing In</Link></li>
          <li><Link href='singup'>Sing up</Link></li>
        </div>
      );
    }
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className="p-2">
                  <li><Link href="/">CPU / Processor</Link></li>
                  <li><Link href="/">Motherboard</Link></li>
                  <li><Link href="/">RAM</Link></li>
                  <li><Link href="/">Power Supply Unit</Link></li>
                  <li><Link href="/">Storage Device</Link></li>
                  <li><Link href="/">Monitor</Link></li>
                  <li><Link href="/">Others</Link></li>
                </ul>
              </details>
            </li>
            {renderAuthButtons()}
            <div className="">
              <a className="btn btn-sm mt-2">PC Builder</a>
            </div>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Pc Builder</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li tabIndex={0}>
            <details>
              <summary>Categories</summary>
              <ul className="p-2">
                <li><Link href="/">CPU / Processor</Link></li>
                <li><Link href="/">Motherboard</Link></li>
                <li><Link href="/">RAM</Link></li>
                <li><Link href="/">Power Supply Unit</Link></li>
                <li><Link href="/">Storage Device</Link></li>
                <li><Link href="/">Monitor</Link></li>
                <li><Link href="/">Others</Link></li>
              </ul>
            </details>
          </li>
          {renderAuthButtons()}
          <div className="">
            <a className="btn btn-sm ml-5">PC Builder</a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
