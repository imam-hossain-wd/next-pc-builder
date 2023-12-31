/* eslint-disable @next/next/no-img-element */

import { removeOne } from "@/redux/features/pcBuilder/pcbuilderSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const BuilderItem = ({ category, product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex xsm:flex-col sm:flex-row xsm:gap-6 justify-between w-full items-center my-8 bg-white text-black">
        <div className="flex xsm:flex-col sm:flex-row gap-4 items-center">
          <div className="w-[100px] h-[100px]  ">
            <img
              className="object-cover w-full h-full rounded-md"
              src={product ? product?.image : category?.image}
              alt="img"
            />
            
          </div>
          <span className="text-xl font-semibold text-black">
            {product ? product?.productName : category?.title}
          </span>
        </div>

        <div>
          {product && (
            <span className="font-bold text-xl mr-8 text-black">Tk {product?.price}</span>
          )}
          {product && (
            <button
            className="px-6 py-2  transition ease-in-out delay-150 bg-red-500  hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 rounded text-white "
              onClick={() => dispatch(removeOne(product))}
            >
              Remove
            </button>
          )}
          
          <Link href={`/pc-builder/${category?.category}`}>
            {!product && (
              <button className="px-6 py-2  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded text-white ">
                Choose
              </button>
            )}
          </Link>
        </div>
      </div>

      <hr />
    </>
  );
};

export default BuilderItem;
