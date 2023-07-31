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
   
     <div className='sm:ml-10 md:ml-14 lg:ml-28 mx-auto'>
     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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

export const getStaticProps = async ()=>{
  const res = await fetch("http://localhost:5000/components")
  const result = await res.json();
  const data = result.slice(0, 6)
  return {
    props:{
      components:data
    }
  }
}

