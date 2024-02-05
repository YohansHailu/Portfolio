import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

type Props = {};

const ErrorPage = (props: Props) => {
  const router = useRouter();
  useEffect(() => {
    router.replace('/');
  }, [router.pathname]);

  return <div></div>;
};

export default ErrorPage;
