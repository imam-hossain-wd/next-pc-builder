import Image from 'next/image';
import image from '../../assets/image/desktop-carousel4-280922.webp'
import Link from 'next/link';

const ComponentsCard = ({ components }) => {


const {productName,category,price,status,individualRating}= components
    if (!components) {
        return <div>Loading...</div>;
      }
    return (
      <div>
        <section className="my-8">
          <Link href={`/components/${components._id}`}>
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
          </div>
          </Link>
        </section>
      </div>
    );
  };
  
  export default ComponentsCard;

  
  
  
  
  