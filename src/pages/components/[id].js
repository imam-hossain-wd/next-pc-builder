/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import image from '../../assets/image/desktop-carousel4-280922.webp'

const ComponentsDetails = ({ component }) => {

  const { productName, keyFeatures, category, price, status, individualRating, description, averageRating, reviews } = component[0];
  return (
    <div>
      <h1 className='text-3xl font-bold text-center text-black my-5'>Product Details page</h1>
      <section className="my-8">
        <div className='flex justify-around items-center'>
          <div className="card w-[40%] h-[300px]  shadow-xl text-black">
            <figure className="">
              <Image src={image} alt="Shoes" className="rounded-lg w-[400px] h-60" />
            </figure>
          </div>
          <div className='text-black'>
            <div className="card-body">
              <h2 className="text-2xl font-bold">{productName}</h2>
              <h2 className="text-sm"><span className='font-bold'>Category</span> : {category}</h2>
              <h2 className="text-sm"><span className='font-bold'>Status</span> : <span className='border-2 border-orange-500 font-bold rounded-full p-1'>{status}</span></h2>
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
        </div>
        <div className='text-black '>
            <h1 className='text-2xl mt-2 text-center font-bold text-black'><span className='capitalize '>{category}</span> Reviews</h1>
            {
              reviews?.map((review, index) => (
                <div key={index} className='border-2 w-[40%] mx-auto border-gray-700 p-5 m-5 rounded-lg '>
                 <div className='flex justify-around'>
                 <div>
                  <p><span className='font-bold'>User Name :</span> {review.username}</p>
                  <p> <span className='font-bold'>Rating :</span> {review.rating}</p>
                  <p><span className='font-bold'>Comment :</span> {review.comment}</p>  
                  </div>

                  <div>
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" className='w-20 h-20 rounded-full' alt="user" />
                  </div>
                 </div>

                </div>
              ))
            }
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


