/* eslint-disable react/no-unescaped-entities */
import RootLayout from '@/components/layout/RootLayout';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const SingUpPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const registerHandler = (data) => {
        console.log(data)
      }
    return (
        <section>
<div className="w-[400px] mx-auto p-5 rounded-lg border-2 border-gray-900 mt-8 text-black">
      <form onSubmit={handleSubmit(registerHandler)}>
        <div>
        <h1 className="text-center text-3xl font-bold ">WELCOME TO</h1>
        <h3 className="text-center text-xl mt-2" >Sing up into your account</h3>
        </div>
        <br />
    
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="input bg-white input-bordered w-full mb-4 "
        />{" "}
        <br />
        <input
          {...register("password")}
          type="password"
          placeholder="password"
          className="input input-bordered w-full mb-4 bg-white"
        />{" "}
          <input
            type="submit"
            className="w-full btn border-0 mx-auto text-white mb-4 rounded-full font-bold  p-3 rounded-lg hover:bg-rose-600"
            value="Sing up"
          />
        
      </form>

      <div className="flex  items-center m-4">

      <hr className="w-28 m-2 text-black"/> 
      <p className="ml-3 mr-3">or Sing up with</p> 
      <hr className="w-28 m-2"/>

      </div>
      <div className=" flex justify-center ">
       <div className='flex justify-around w-96'>
       <button
          className="btn  w-36 rounded-full hover:bg-rose-700 border-0"
        >
          {" "}
          <p className="text-3xl font-bold text-white">
            <FaGoogle />
          </p>{" "}
        </button>
        <button
          className="btn  w-36 rounded-full hover:bg-rose-700 border-0"
        >
          {" "}
          <p className="font-bold text-3xl text-white">
            <FaGithub /> 
          </p>{" "}
        </button>
       </div>
      </div>
      <p className="font-bold mt-3 text-center">
        Already Have an Account ?
        <Link href="/singin" className="btn btn-link capitalize -ml-3 font-bold">
          Sing in
        </Link>{" "}
      </p>
    </div>
            
        </section>
    );
};

export default SingUpPage;
SingUpPage.getLayout = function getLayout(page) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }
  