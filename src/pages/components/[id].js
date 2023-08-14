import Image from 'next/image';
import image from '../../assets/image/desktop-carousel4-280922.webp'

const ComponentsDetails = ({ component }) => {

  const { productName, keyFeatures, category, price, status, individualRating, description, averageRating, reviews } = component[0];
  return (
    <div>
      <h1 className='text-4xl font-bold text-center text-black my-5'>Product Details page</h1>
      <section className="my-8">
        <div className='flex justify-around'>
          <div className="card w-[40%]  shadow-xl border-gray-600 border-2 text-black">
            <figure className="px-10 pt-10">
              <Image src={image} alt="Shoes" className="rounded-lg w-[400px] h-60" />
            </figure>
            <div className="card-body">
              <h2 className="text-lg font-bold">Name :{productName}</h2>
              <h2 className="text-sm"><span className='font-bold'>Category</span> : {category}</h2>
              <h2 className="text-sm"><span className='font-bold'>Status</span> : {status}</h2>
              <h2 className="text-sm"><span className='font-bold'>Price</span> : ${price}</h2>
              <h2 className="text-sm"><span className='font-bold'>Description</span> : {description}</h2>
              <h2 className="text-sm"><span className='font-bold'>Brand</span> : {keyFeatures?.Brand}</h2>
              <h2 className="text-sm"><span className='font-bold'>Model</span>: {keyFeatures?.Model}</h2>
              <h2 className="text-sm"><span className='font-bold'>Specification</span>: {keyFeatures?.Specification}</h2>
              <h2 className="text-sm"><span className='font-bold'>Socket</span> : {keyFeatures?.Socket}</h2>
              <h2 className="text-sm"><span className='font-bold'>TDP</span>: {keyFeatures?.TDP}</h2>
              <h2 className="text-sm"><span className='font-bold'>IndividualRating</span> : {individualRating}</h2>
              <h2 className="text-sm"><span className='font-bold'>AverageRating</span> : {averageRating}</h2>
            </div>
          </div>
          <div className='text-black'>
            <h1 className='text-4xl font-bold text-black'>User Reviews</h1>
            {
              reviews?.map((review, index) => (
                <div key={index} className='bg-gray-700 p-5 m-5 rounded-lg text-white'>
                  <p>{review.username}</p>
                  <p>{review.rating}</p>
                  <p>{review.comment}</p>

                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentsDetails;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/components");
  const components = await res.json();

  const paths = components.map((component) => ({
    params: { id: component._id },
  }));
  return { paths, fallback: false };
};


export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/components/${params.id}`);
  const data = await res.json();
  return {
    props: {
      component: data,
    },
  };
};


