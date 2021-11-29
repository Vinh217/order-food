import React, {useState} from 'react';
import {ArrowCircleUpIcon} from  '@heroicons/react/outline';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
       <ArrowCircleUpIcon onClick={scrollToTop} className={visible ?'inline opacity-100 cursor-pointer w-14 h-14 fixed bottom-5 right-5 text-red-500 transition-all hover:text-red-700' :'opacity-0 transition-all translate-y-32'} />
  );
}
  
export default ScrollButton;