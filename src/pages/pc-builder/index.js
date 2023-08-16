// import Image from 'next/image';
// import { useSelector } from 'react-redux';
// import Link from 'next/link';
// import cpu from '../../assets/image/cpu.png'
// import monitor from '../../assets/image/monitor.jpg'
// import motherboard from '../../assets/image/motherboard.png'
// import powesupply from '../../assets/image/powe-supply.png'
// import ram from '../../assets/image/ram.png'
// import storage from '../../assets/image/storage.png';
// import { useState, useEffect } from 'react';



// const PcBuilderPage = () => {
 

//   const pcBuilderProduct = useSelector(state => state.pcBuilder.product);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   console.log(selectedCategory,'selectedCategory');

//   useEffect(() => {
//     const storedCategory = localStorage.getItem('selectedCategory');
//     if (storedCategory) {
//       setSelectedCategory(storedCategory);
//     }
//   }, []);

  // const categories = [
  //   { image: cpu, name: 'CPU / Processor', href: '/pc-builder/cpu' },
  //   { image: monitor, name: 'Motherboard', href: '/pc-builder/motherboard' },
  //   { image: motherboard, name: 'RAM', href: '/pc-builder/ram' },
  //   { image: powesupply, name: 'Power Supply Unit', href: '/pc-builder/power supply' },
  //   { image: ram, name: 'Storage Device', href: '/pc-builder/storage' },
  //   { image: storage, name: 'Monitor', href: '/pc-builder/monitor' },
  // ];

//   return (
//     <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
//       <div className="overflow-x-auto">
//         <table className="w-[70%] mx-auto rounded-lg border-2">
//           <thead className="dark:bg-gray-700">
//             <tr className="text-left">
//               <th className="p-3"><span className='text-xl'>Core Components</span></th>
//               <th className="p-3 "> Build Your Magic PC</th>
//               <th className="p-3 text-3xl font-bold"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((category, i) => (
//               <tr key={i} className="border-b border-opacity-20 text-black text-md font-bold">
//                 <td className="p-3">
//                   <div data-next-image>
//                     <Image src={category.image} width={50} height={50} className="bg-white rounded-lg" alt='product' />
//                   </div>
//                 </td>
//                 <td className="p-3">
//                   <span>{category.name}</span>
//                 </td>
//                 <td className="p-3 text-right">
//                   <button className="w-24 p-2 h-10 bg-sky-400 hover:bg-sky-500 font-bold rounded" >
//                     <Link href={category.href}>Choose</Link>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="w-72 my-2 mx-auto">
//         <button className="w-40 p-2 h-10 bg-sky-400 hover:bg-sky-500 font-bold rounded">
//           Build
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PcBuilderPage;

// import { addToCart } from "@/redux/features/cart/cartSlice";


import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import BuilderItem from "@/components/BuilderItems";
import Header from "@/components/Header";


const PcBuilder = ({ categories }) => {
  const { products, total, productsTotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    toast.success("PC build done...");
  };


  return (
    <div className="container mx-auto flex justify-center">
      <div className=" md:w-[85%] mb-32 mt-20 p-8 shadow-sm ">
        <Header
          title="Build Your PC"
          subtitle="Explore our curated selection of top categories"
        />

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <h1 className="font-semibold text-xl">Selected: {productsTotal}</h1>
          <h1 className="text-xl font-semibold ">Total Price: Tk {total}</h1>
          <button
            className={`px-12 py-2 border-2 border-amber-500 rounded-bl-[15%] rounded-sm font-semibold  ${
              productsTotal < 5 && "disabled:opacity-50"
            }`}
            disabled={productsTotal < 5}
            onClick={handleClick}
          >
            Complete Build
          </button>
        </div>
        <hr />

        {categories?.map((category) => (
          <BuilderItem
            key={category._id}
            category={category}
            product={products.find(
              (product) => product.category === category.title
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default PcBuilder;

export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:5000/categories"
  );
  const data = await res.json();

  return {
    props: {
      categories: data,
    },
    revalidate: 10,
  };
};



