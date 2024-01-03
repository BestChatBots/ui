import NProgress from 'nprogress';
import React, { useEffect } from 'react';

export const NavigationProgress: React.FC = () => {
  useEffect(() => {
    NProgress.configure({
      showSpinner: false
    });
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);
  
  return null;
};
