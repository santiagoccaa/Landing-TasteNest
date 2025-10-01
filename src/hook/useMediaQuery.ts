import { useLayoutEffect, useState } from 'react';

interface DeviceType {
    isBase: boolean;
    isSm: boolean;
    isMd: boolean;
    isLg: boolean;
    isXl: boolean;
    is2xl: boolean;
}

export const useMediaQuery = (): DeviceType => {
    const [device, setDevice] = useState<DeviceType>({
        isBase: false,
        isSm: false,
        isMd: false,
        isLg: false,
        isXl: false,
        is2xl: false,
    });

    useLayoutEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setDevice({
                isBase: width >= 0,
                isSm: width >= 640,
                isMd: width >= 768,
                isLg: width >= 1024,
                isXl: width >= 1280,
                is2xl: width >= 1536,
            });
        };

        // Set the initial state
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return device;
};
