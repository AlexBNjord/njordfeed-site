import { useEffect } from 'react';

export const useDisableBodyScroll = (open:boolean) => {

    useEffect(() => {
        if (open) {
        document.documentElement.style.overflow = 'hidden';
        } else {
        document.documentElement.style.overflow = 'unset';
        }
    }, [open]);
};