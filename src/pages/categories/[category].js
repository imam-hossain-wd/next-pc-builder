/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Link from "next/link";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Header from "@/components/Header";

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
  const { _id, title, image, category, price, status } = product;
  return (
    <Link href={`/components/${product?._id}`}>
      <div className="shadow-md bg-gray-100 h-auto rounded-md p-4">
        <div className="h-[300px]">
          <img
            className="rounded-lg object-cover w-full h-full"
            src={image}
            alt="pizza"
          />
        </div>
        <div>
          <div className="text-center">
            <h2 className="text-lg font-bold py-2 ">{title}</h2>
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


export const getStaticPaths = async () => {
  const res = await fetch(
    "http://localhost:5000/components"
  );
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { category: product.category.toLowerCase() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { category } = params;

  const res = await fetch(
    `http://localhost:5000/products/${params.category}`
    );
  const data = await res.json();

  return {
    props: {
      products: data,
      category: category,
    },
  };
};





