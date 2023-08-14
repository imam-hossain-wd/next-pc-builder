import Image from 'next/image';
import { useRouter } from 'next/router';
import image from '../../assets/image/desktop-carousel4-280922.webp'
import Link from 'next/link';

const CategoryPage = ({ products }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1 className='text-center font-bold text-3xl my-5 text-black capitalize'>{category} Category</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5 ml-20 w-[90%] mx-auto'>
        {
          products.map((product) => (

            <div key={product._id}>
              <Link href={`/components/${product._id}`}>
                <div className="card w-80 h-[400px] shadow-xl border-gray-600 border-2 text-black  ">
                  <figure className="px-10 pt-10">
                    <Image src={image} width={300} height={300} alt="Shoes" className="rounded-lg w-60 h-48" />
                  </figure>
                  <div className="card-body  ">
                    <h2 className="text-lg font-bold">{product.productName}</h2>
                    <h2 className="text-sm">{product.category}</h2>
                    <h2 className="text-sm">{product.price}</h2>
                  </div>
                </div>
              </Link>
            </div>

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

