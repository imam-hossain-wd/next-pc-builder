import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '@/firebase/firebase.config';
import { clearUser } from '@/redux/features/user/userSlice';
import DropdownContent from './DropdownContent';
import pcHouse from '../../assets/logo/pc-house-logo.jpg'
import Image from 'next/image';


const Navbar = () => {

  const { data: session } = useSession();
  const nextAuthUserEmail = session?.user;
  const firebaseUserEmail = useSelector((state) => state.user.user.email);

  const [signOutFirebase] = useSignOut(auth);
  const dispatch = useDispatch();

  const nextAuthLoggedOut = async () => {
    await signOut();
    dispatch(clearUser());
  };

 
  const firebaseLoggedOut = async () => {
    await signOutFirebase();
    dispatch(clearUser());
  };

  const categories = [
    { name: 'Processor', href: '/categories/processor' },
    { name: 'GPU', href: '/categories/gpu' },
    { name: 'Motherboard', href: '/categories/motherboard' },
    { name: 'RAM', href: '/categories/ram' },
    { name: 'Power Supply', href: '/categories/power supply unit' },
    { name: 'Storage', href: '/categories/storage device' },
    { name: 'monitor', href: '/categories/monitor' },
    { name: 'Others', href: '/categories/others' },
  ];

  const renderAuthButtons = () => {
    if (nextAuthUserEmail || firebaseUserEmail) {
      return <li onClick={nextAuthLoggedOut}><a>Sign out</a></li>;
    } else {
      return (
        <div className="flex flex-col lg:flex-row">
          <li><Link href="/singin">Sign In</Link></li>
          <li><Link href="/singup">Sign Up</Link></li>
         
        </div>
      );
    }
  };

  return (
    <div className="navbar text-black z-50 bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow rounded-box w-52 bg-white">
            <li><Link href="/">Home</Link></li>
           
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <DropdownContent categories={categories} />
               
              </details>
            </li>
           
            {renderAuthButtons()}
            <li><Link className='' href="/pc-builder">Pc builder</Link></li>
            
                      
          </ul>
        </div>
        <Image width={60} height={50} className='rounded ml-5' src={pcHouse} alt="pchouselogo" />
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 bg-white text-black">
          <li><Link href="/">Home</Link></li>
          <li tabIndex={0}>
            <details className=''>
              <summary className="">Categories</summary>
              <DropdownContent  categories={categories} />
             
            </details>
          </li>
          {renderAuthButtons()}
          <li><Link className='' href="/pc-builder">Pc builder</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
