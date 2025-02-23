import React from "react";
import arrowButton from '../assets/arrowButton.svg'

const FooterSection = () => {
    return(
      <>
        <div className="w-full h-100vh bg-black flex flex-col items-center justify-center pb-20 ">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@donquix.com.com&su=Contact%20Inquiry&body=Hello,%20I%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className="font-chokokutai text-xl text-[#EFC7B0] border border-[#EFC7B0] px-10 py-3 flex items-center gap-5">
              Contact us
              <img src={arrowButton} alt="arrowButton" className="w-6 h-6" /> 
            </button>
         </a>

        </div>  
      </>
        
    );
};

export default FooterSection;

//  CTA Button */
        //  w-full h-screen bg-black flex flex-col items-center justify-center text-center px-8
        //  flex-colum justify-center mt-8 px-6 py-3 bg-black text-[#EFC7B0] text-lg font-chokokutai