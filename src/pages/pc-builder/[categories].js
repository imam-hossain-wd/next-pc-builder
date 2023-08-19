/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Header from "@/components/Header";
import { addToCart } from "@/redux/features/pcBuilder/pcbuilderSlice";

const CategoryProducts = ({ products, category }) => {
  return (
    <div className="my-20">
      <Header
        title={`${category}'s`}
        subtitle="Discover our top-rated products crafted with care"
      />
      <div className="mb-32 grid lg:grid-cols-3 md:grid-cols-2 gap-12 container mx-auto">
        {products ? (
          products.map((product, idx) => (
            <CategoryProduct key={product._id} product={product} />
          ))
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;

export const CategoryProduct = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddProduct = (product) => {
    dispatch(addToCart(product));
    toast.success("Item Added");
    router.push("/pc-builder");
  };
  
  const {  productName, image, category, price, status } = product;
  return (
    <div className="shadow-md bg-gray-100 h-auto rounded-md p-4">
      <Link href={`/components/${product?._id}`}>
        <div className="h-[300px]">
          <img
            className="rounded-lg object-cover w-full h-full"
            src={image ? image : peperoni}
            alt="pizza"
          />
        </div>
      </Link>
      <Link href={`/components/${product?._id}`}>
        <div>
          <div className="text-center">
            <h2 className="text-lg font-bold py-2 ">{productName}</h2>
            <span className="bg-gray-200 rounded-full text-sm px-4">
              {category}
            </span>
          </div>

          <div className="flex justify-between items-center mt-4 mb-4">
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
      </Link>
      <button
        className="bg-amber-500 text-white py-2 px-5 rounded-sm rounded-bl-[15%] font-semibold"
        onClick={() => handleAddProduct(product)}
      >
       Add to builder
      </button>
    </div>
  );
};

export async function getServerSideProps({ params }) {
    const category = params.categories;
    const response = await fetch(`http://localhost:5000/products/${category}`);
    const categoryData = await response.json();
    return {
        props: {
            products:categoryData,
            category
        },
    };
}
