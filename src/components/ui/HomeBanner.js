/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
const HomeBanner = () => {
  return (
<div className='relative mt-5'>
  <div className='w-full h-[500px] relative'>
    <div className='absolute inset-0 bg-gradient-to-tr from-black to-state-900'></div>
    <img className='w-full h-full' src="https://i.ibb.co/Mp5bSwW/HD-wallpaper-motherboard-internal-motherboard-computer.jpg" alt="banner" />
  </div>
  <div className="flex flex-col gap-6 justify-center items-center absolute inset-0 container mx-auto">
    <h2 className="text-white text-3xl font-bold cursor-pointer">
    Unleash Your Creativity Build Your Dream PC Today
    </h2>
    <p className="text-white md:w-[50%]">
    Turn your PC vision into reality with our intuitive PC Builder. Create, customize, and craft your dream computer effortlessly.
    </p>
    <div className="">
      <Link href="/pc-builder">
        <button
          className="border border-white py-2 px-16 rounded-sm text-white hover:bg-rose-500 fond-semi-bold hover:text-white hover:border-0 hover:m-[1px] transition delay-150 transform"
          style={{ width: "fit-content" }}
        >
          Build PC
        </button>
      </Link>
    </div>
  </div>
</div>


  );
};

export default HomeBanner;

