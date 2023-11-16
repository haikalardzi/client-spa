import React, { useEffect } from 'react';

const Popup = ({ isOpen, onClose, children } : any) => {
  useEffect(() => {
    const handleOutsideClick = (event : any) => {
      if (isOpen && event.target === event.currentTarget) {
        onClose();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed w-full h-full bg-[#2E3137]/70 flex justify-center items-center">
          <div className="rounded ring-4 ring-quaternary bg-white">
              {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
