/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const imagesData = [
    { src: "https://i.ibb.co/VQMF2Xv/monitor.jpg", name: 'Monitor' },
    { src: "https://i.ibb.co/SXLcF43/cpu.png", name: 'CPU' },
    { src: "https://i.ibb.co/pz8T6Nz/motherboard.png", name: 'Motherboard' },
    { src: "https://i.ibb.co/KhnrjwZ/powe-supply.png", name: 'Power Supply Unit' },
    { src: "https://i.ibb.co/drM2SCL/storage.png", name: 'Storage Device' },
    { src: "https://i.ibb.co/kmR0sy9/ram.png", name: 'RAM' },
];

const FeatureCategories = () => {

    return (
        <div>

            <div>
                <h1 className='text-center font-bold text-3xl text-black'>Features Category</h1>
                <div className=' my-4'>
                <div className='grid w-[90%] mx-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
                    {imagesData?.map((data, index) => (
                        <div key={index} className='bg-white p-4 rounded-lg shadow-md text-center w-[90%] mx-auto m-2 text-black '>
                             <Link className='flex flex-col items-center' href={`/categories/${data.name.toLowerCase()}`}>
                            <img
                                src={data.src}
                                alt={`Picture of ${data.name}`}
                            />
                            <p className='text-center font-semibold text-black mt-2'>{data.name}</p></Link>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureCategories;

