"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '@/app/firebaseConfig';

const authCheck = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const auth = getAuth(firebaseApp);
    const router = useRouter();

    useEffect(() => {
        const unMount = onAuthStateChanged(auth, (user) => {
            if (!user) {
            router.push('/signin');
            }
        });

      return () => unMount();
    }, [auth, router]);

    return <WrappedComponent {...props} />;
  };
};

export default authCheck;
