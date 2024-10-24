// import React from 'react';
// import './header.css';

// const Header = () => (
//   <div className="gpt3__header" id="home">
//     <div className="gpt3__header-image">
//       <img src="https://i.postimg.cc/nL8SN8fH/hero.png" />
//       <div className="text-overlay">
//         <h1>ULEVUS</h1>
//         <h1>BUSINESS</h1>
//         <h1>EVENINGS</h1>
//       </div>
//     </div>
//   </div>
// );

// export default Header;




// import React from 'react'

// function Header() {
//   return (
//     <div class="2xl:mx-auto dark:bg-gray-900 2xl:container md:px-20 px-4 md:py-12 py-9">
//       <div class="relative rounded-md">
//           <img src="https://i.ibb.co/SBpL1cK/pexels-aleksandar-pasaric-325185-1.png" alt="city view" class="w-full h-full rounded-md  object-center object-fill absolute sm:block hidden" />
//           <img src="https://i.ibb.co/LQpxBsc/mobile.png" alt="city view" class="w-full h-full rounded-md absolute object-center object-fill sm:hidden" />
//           <div class="text-xl relative z-20 bg-gradient-to-r from-blue-700 to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
//               <div>
//                   <h1 class="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">Act Before It’s Too Late!</h1>
//                   <p class="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs are from an early age.</p>
//               </div>
//               <div class="md:mt-12 mt-20">
//                   <button class="text-base font-medium leading-4 text-indigo-700 bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white">Explore More</button>
//               </div>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default Header


import React from 'react';
import ulevus from '../../assets/u.PNG';
import ai from '../../assets/ai5.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header" id="home">

    <div className="gpt3__header-content">
      <h1>UPCOMING EVENTS</h1>
      <img src={ulevus} />
      {/* <div className="gpt3__header-content__input">
        <button type="button">Sign Up</button>
      </div> */}

      <div className="gpt3__header-content__people">
        {/* <img src={people} /> */}
        <p></p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
      {/* <div className="gpt3__footer-links_div gpt3__footer-links_div--contact">
        <h4>CREATIVES <br/><br/> CONNECTS</h4>
        <p>Douala, Cameroon</p>
        <p>+237 679623977</p>
        <p>info@ulevus.com</p>
      </div> */}
    </div>
    <div>
      
    </div>
  </div>
);

export default Header;











