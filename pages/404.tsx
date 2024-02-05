import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

type Props = {};

const Custom404Page = (props: Props) => {
  const router = useRouter();
  useEffect(() => {
    router.replace('/');
  }, [router.pathname]);

  return <div></div>;
};

export default Custom404Page;
