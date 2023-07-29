import Image from 'next/image';
import Link from 'next/link';
import image from '../../assets/image/desktop-carousel4-280922.webp'

const ComponentsDetails = ({component}) => {
    console.log(component, 'details');
    const {productName,category,price,status,individualRating}= component[0];
    console.log(productName,'pppp');
    return (
        <div>
            <h1>this is components details page {component.length}</h1>
            <section className="my-8">
          <Link href={`/components/${component._id}`}>
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
  