// hooks/useDevice.ts
import { useEffect, useState } from 'react';

const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const ios = /iPhone|iPad|iPod/i.test(ua);

    setIsMobile(mobile);
    setIsIOS(ios);
  }, []);

  return { isMobile, isIOS };
};

export default useDevice;
