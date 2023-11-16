import React, { useEffect } from 'react';
import '../../assets/styles/Button/Button.css'

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
          <div 
          id = "popUpContainer"
          className="rounded ring-quaternary ring-1 shadow-2xl bg-white w-fit pb-4">
              {children}
              <div className='flex flex-row-reverse'>
                <button id='OKbtn'
                className='btn-primary'>OK</button>
              </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
