/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ComponentsCard = ({ components }) => {

    if (!components) {
        return <div>Loading...</div>;
      }

      const {  productName, image, category, price, status } = components;
      return (
        <Link href={`/components/${components?._id}`}>
          <div className="shadow-md bg-gray-100 h-auto rounded-md p-4 text-black">
            <div className="h-[300px]">
              <img
                className="rounded-lg object-cover w-full h-full"
                src={components?.image}
                alt="pizza"
              />
            </div>
            <div>
              <div className="text-center">
                <h2 className="text-lg font-bold py-2 ">{productName}</h2>
                <span className="bg-gray-200 rounded-full text-sm px-4">
                  {category}
                </span>
              </div>
    
              <div className="flex justify-between items-center mt-4">
                <span className="font-semibold">Tk {price}</span>
                <div className="flex gap-1 text-amber-500 text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <button
                  className={`border-2 ${
                    status ? "border-amber-500" : "border-red-500"
                  }  py-2 px-3 rounded-full`}
                >
                  {status ? (
                    <span className="">In stock</span>
                  ) : (
                    <span>Out of stock</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </Link>
      );
  };
  
  export default ComponentsCard;


  import { useRouter } from "next/router";




  
  
  
  
  