import ComponentsCard from '@/components/ui/ComponentsCard';
import FeatureCategories from '@/components/ui/FeatureCategories';
import HomeBanner from '@/components/ui/HomeBanner';
import { auth } from '@/firebase/firebase.config';
import { setLoading, setUser } from '@/redux/features/user/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { Inter } from 'next/font/google'
import { useEffect } from 'react';


import { useDispatch ,useSelector} from 'react-redux';

const inter = Inter({ subsets: ['latin'] })

export default function Home({components}) {
  console.log(components );

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setUser(null));
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='w-[90%] h-min-h-screen'>
   <HomeBanner/>
   
     <div className='w-[90%] mx-auto'>
     <div className='grid grid-cols-3'>
     {
     components &&
      components?.map((component) => {
        return <ComponentsCard components={component} key={component._id} />;
      })
    }
     </div>
     </div>
     <FeatureCategories/>
   
    <h1>hello next pc builder home page</h1>
    </div>
  )
}


export const getStaticProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/pc-components');
    const result = await res.json();
    const components = result.slice(0, 6);
    return { props: { components} };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { components} }; 
  }
};

