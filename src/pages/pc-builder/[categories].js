import React from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import image from '../../assets/image/cpu.png'
import { useDispatch } from "react-redux";
import { addComponent } from "../../redux/features/pcBuilder/pcbuilderSlice";

const CategoryPage = ({ categoryData }) => {
    const router = useRouter();
    const { categories } = router.query;

    const dispatch = useDispatch();

    const addbuilderPc = (product) => {
        dispatch(addComponent({ product }));
    };

    return (
        <div>
            <h1 className='text-center font-bold text-2xl text-black my-5 '>There are {categoryData?.length} <span className='capitalize'>{categories}</span>  in this category </h1>
            {
                categoryData?.map(data => (
                    <div key={data._id} className="card w-[70%] mx-auto my-5 p-5 shadow-xl border-gray-600 border-2 text-black">
                        <div className='flex flex-col lg:flex-row justify-between items-center'>
                            <div className='flex flex-col lg:flex-row'>
                                <figure className="px-10 pt-10">
                                    <Image src={image} alt="Shoes" className="rounded-lg w-36 h-32" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text-lg font-bold">Name :{data.productName}</h2>
                                    <h2 className="text-sm">{data.category}</h2>
                                    <h2 className="text-sm">{data.price}</h2>
                                    <h2 className="text-sm">{data.status}</h2>
                                    <h2 className="text-sm">{data.individualRating}</h2>
                                </div>
                            </div>
                            <div>
                                <p className='ml-5 my-3 font-bold text-xl'>${data.price}</p>
                                <button onClick={() => addbuilderPc(data)} className='w-36 h-12 font-bold rounded-lg hover:bg-sky-500 h-10 bg-sky-400 border-0'>Add To Builder</button>
                            </div>
                        </div>
                    </div>

                ))
            }

        </div>
    );
};

export default CategoryPage;


export async function getServerSideProps({ params }) {
    const category = params.categories;
    const response = await fetch(`http://localhost:5000/products/${category}`);
    const categoryData = await response.json();
    return {
        props: {
            categoryData,
        },
    };
}