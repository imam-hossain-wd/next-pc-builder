/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useRouter } from 'next/router';
import image from '../../assets/image/desktop-carousel4-280922.webp'
import Link from 'next/link';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const CategoryPage = ({ products }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1 className='text-center font-bold text-3xl my-5 text-black capitalize'>{category} Category</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5 ml-20 w-[90%] mx-auto'>
        {
         products &&  products.map((product) => (
            <Link key={product._id} href={`/components/${product?._id}`}>
            <div className="shadow-md bg-gray-100 h-auto rounded-md p-4">
              <div className="h-[300px]">
                <img
                  className="rounded-lg object-cover w-full h-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyORrI-xzsbSOKCjp4svPhgBWfEjT1xeggR3By5OKz&s"
                  alt="pizza"
                />
              </div>
              <div>
                <div className="text-center">
                  <h2 className="text-lg font-bold py-2 ">{product.productName}</h2>
                  <span className="bg-gray-200 rounded-full text-sm px-4">
                    {category}
                  </span>
                </div>
      
                <div className="flex justify-between items-center mt-4">
                  <span className="font-semibold">Tk {product.price}</span>
                  <div className="flex gap-1 text-amber-500 text-sm">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <button
                    className={`border-2 ${
                      product.status ? "border-amber-500" : "border-red-500"
                    }  py-2 px-3 rounded-full`}
                  >
                    {product.status ? (
                      <span className="">In stock</span>
                    ) : (
                      <span>Out of stock</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </Link>

          ))

        } </div>

    </div>
  );
};

export default CategoryPage;

export async function getStaticProps({ params }) {
  const { category } = params;
  const url = `http://localhost:5000/products/${encodeURIComponent(category)}`;
  const res = await fetch(url);
  const products = await res.json();


  return {
    props: {
      products,
    },
  };
}

export async function getStaticPaths() {
  const categories = ['cpu', 'motherboard', 'ram', 'power supply', 'storage', 'monitor', 'others'];
  const paths = categories.map((category) => ({
    params: { category },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

