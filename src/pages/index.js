import { auth } from '@/firebase/firebase.config';
import { setLoading, setUser } from '@/redux/features/user/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import HomeBanner from '../components/ui/HomeBanner'

import { useDispatch ,useSelector} from 'react-redux';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

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
    <h1>hello next pc builder home page</h1>
    </div>
  )
}

