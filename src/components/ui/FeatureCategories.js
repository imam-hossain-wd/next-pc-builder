import monitor from '../../assets/image/monitor.jpg'
import cpu from '../../assets/image/cpu.png';
import motherboard from '../../assets/image/motherboard.png'
import powersupply from '../../assets/image/powe-supply.png'
import ram from '../../assets/image/ram.png'
import storage from '../../assets/image/storage.png'
import Image from 'next/image';
import Link from 'next/link';

const imagesData = [
    { src: monitor, name: 'Monitor' },
    { src: cpu, name: 'CPU' },
    { src: motherboard, name: 'Motherboard' },
    { src: powersupply, name: 'Power Supply' },
    { src: storage, name: 'Storage' },
    { src: ram, name: 'RAM' },
];

const FeatureCategories = () => {
    return (
        <div>

            <div>
                <h1 className='text-center font-bold text-3xl text-black'>Features Category</h1>
                <div className=' my-4 lg:ml-20'>
                <div className='grid w-[90%] mx-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
                    {imagesData.map((data, index) => (
                        <div key={index} className='bg-white p-4 rounded-lg shadow-md text-center w-[90%] mx-auto m-2 '>
                             <Link className='flex flex-col items-center' href={`/categories/${data.name.toLowerCase()}`}>
                            <Image
                                src={data.src}
                                width={60}
                                height={60}
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