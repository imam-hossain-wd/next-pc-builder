import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import BuilderItem from "@/components/BuilderItems";
import Header from "@/components/Header";


const PcBuilder = ({ categories }) => {
  const {  total, productsTotal } = useSelector((state) => state.cart);
  const products = useSelector((state) => state.cart.products);
  const handleClick = () => {
    toast.success("PC build done !");
  };


  return (
    <div className="container mx-auto flex justify-center text-black">
      <div className=" md:w-[85%] mb-32 mt-20 p-8 shadow-sm ">
        <Header
          title="Build Your PC"
          subtitle="Explore our curated selection of top categories"
        />

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <h1 className="font-semibold text-xl">Selected: {productsTotal}</h1>
          <h1 className="text-xl font-semibold ">Total Price: Tk {total}</h1>
          <button
            className={`px-12 py-2 border-2 border-rose-500 rounded-sm font-semibold  ${
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



