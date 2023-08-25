import { RefObject, useEffect } from "react";

const scrollAnimation = (ref: RefObject<HTMLDivElement>) => {
    const animation = () => {
        let winH: number;
   
    const initModule = () => {
      winH = window.innerHeight;
      addEventHandlers();
    };
   
    const addEventHandlers = () => {
      window.addEventListener("scroll", checkPosition);
      window.addEventListener("load", checkPosition);
      window.addEventListener("resize", initModule);
    };
   
    const checkPosition = () => {
        if (ref.current) {
          var posFromTop = ref.current.getBoundingClientRect().top;
          if (winH > posFromTop + 100) {
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0px)'
            ref.current.style.transition = '1.4s';
          }
        }
    };
   
    return {
      init: initModule
    };
  };
  useEffect(() => {
    animation().init();
  },[]);
}

export default scrollAnimation;