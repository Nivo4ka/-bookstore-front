import type React from 'react';
import { useEffect } from 'react';

const useComponentVisible = (ref: React.RefObject<HTMLDivElement>, onClose: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(<Node>(event.target))) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, ref]);
};

export default useComponentVisible;
