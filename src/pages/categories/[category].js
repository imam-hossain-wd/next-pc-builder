import { useRouter } from 'next/router';

const CategoryPage = ({ products }) => {
  const router = useRouter();
  const { category } = router.query;


  return (
    <div>
      <h1>Products in {category} category:</h1>
      <div className="grid grid-cols-3 ">
        {products.map((product) => (
          <div key={product._id} className='bg-red-400 p-5 m-5 text-black rounded-lg'>
            <h2>{product.productName}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
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
  const categories = ['CPU / Processor', 'Motherboard', 'RAM', 'Power Supply Unit', 'Storage Device', 'Monitor', 'Others'];

  const paths = categories.map((category) => ({
    params: { category },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

