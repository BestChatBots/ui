import React, { useCallback, useState } from 'react';
import { Button } from '@/components/button';
import { NavigationProgress } from '@/components/navigation-progress';

export const NavigationProgressBasic: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Button
        disabled={loading}
        onClick={handleClick}
      >
        Click Me
      </Button>
      {loading && <NavigationProgress />}
    </>
  );
};
