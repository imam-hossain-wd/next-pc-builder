import { singinUser } from '@/redux/features/user/userSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const SingInPage = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const dispatch = useDispatch();

    const logInHandler = async (data) => {
        const { email, password } = data;
        dispatch(singinUser({ email, password }));
        reset();
        router.push('/')
    }
    return (
        <section>
            <div className="w-[400px] mx-auto p-5 rounded-lg border-2 border-gray-900 my-8 text-black">
                <form onSubmit={handleSubmit(logInHandler)}>
                    <div>
                        <h1 className="text-center text-3xl font-bold ">WELCOME TO</h1>
                        <h3 className="text-center text-xl mt-2" >Sing In into your account</h3>
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
                        value="Sing in"
                    />

                </form>

                <div className="flex  items-center m-4">

                    <hr className="w-24 m-2 text-black" />
                    <p className="ml-3 mr-3 text-sm"> Sing in with</p>
                    <hr className="w-24 m-2" />

                </div>
                <div className=" flex justify-center ">
                    <div className='flex justify-around w-96'>
                        <div className=" flex justify-center ">
                            <div className='flex justify-around w-28'>
                                <button className='text-4xl font-bold text-black hover:text-rose-600'><FaGoogle onClick={() => signIn("github", {
                                    callbackUrl: "http://localhost:3000/"
                                })} /></button>
                                <button className='text-4xl font-bold text-black hover:text-rose-600'><FaGithub onClick={() => signIn("github", {
                                    callbackUrl: "http://localhost:3000/"
                                })} /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="font-bold mt-3 text-center">
                    Have no Account ?
                    <Link href="/singup" className="btn btn-link capitalize -ml-3 font-bold">
                        Sing up
                    </Link>{" "}
                </p>
            </div>

        </section>
    );
};

export default SingInPage;