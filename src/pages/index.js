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
    <div className=''>
   <HomeBanner/>
   
     <div className='w-[95%] mx-auto my-10'>
     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
     {
     components &&
      components?.map((component) => {
        return <ComponentsCard components={component} key={component._id} />;
      })
    }
     </div>
     </div>
     <FeatureCategories/>
    </div>
  )
}

export const getStaticProps = async ()=>{

  const res = await fetch(`${process.env.URL}/components`);
  const result = await res.json();
  const data = result.slice(0, 6)
  return {
    props:{
      components:data
    }
  }
}


