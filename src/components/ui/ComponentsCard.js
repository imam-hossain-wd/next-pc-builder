import Image from 'next/image';
import image from '../../assets/image/desktop-carousel4-280922.webp'
import Link from 'next/link';

const ComponentsCard = ({ components }) => {
    console.log(components, 'from card');

const {productName,category,price,status,individualRating}= components
    if (!components) {
        return <div>Loading...</div>;
      }
    return (
      <div>
        <section className="my-8">
          <div className="card w-80 h-[450px] shadow-xl border-gray-600 border-2 text-black">
            <figure className="px-10 pt-10">
              <Image src={image} alt="Shoes" className="rounded-lg w-60 h-48" />
            </figure>
            <div className="card-body">
              <h2 className="text-lg font-bold">Name :{productName}</h2>
              <h2 className="text-sm">{category}</h2>
              <h2 className="text-sm">{price}</h2>
              <h2 className="text-sm">{status}</h2>
              <h2 className="text-sm">{individualRating}</h2>
            </div>
            <div className="flex justify-around mb-3">
              <button className="btn w-32 bg-gray-800 text-white hover:text-black border-0 rounded-full btn-sm">
                <Link href={`/components/${components._id}`}>See details</Link>
              </button>
              <button className="btn w-32 bg-gray-800 text-white hover:text-black border-0 rounded-full btn-sm">
                {/* <Link to={`/checkout/}`}>Checkout</Link> */}
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default ComponentsCard;

  
  
  
  
  