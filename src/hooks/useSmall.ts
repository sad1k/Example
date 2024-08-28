import { useLayoutEffect, useState } from 'react';

export const useSmall = (ref: React.RefObject<HTMLElement>, px: number) => {
  const [isSmall, setIsSmall] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (ref.current && ref.current?.clientWidth < px) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [px, ref]);
  return [isSmall];
};
