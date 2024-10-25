// import React from 'react';
// import backgroundImage from '../../assets/AYUK.png';

// function Connect() {
//   return (
//     <div className="flex flex-col md:flex-row mt-4 mr-12 mb-4 ml-12 bg-no-repeat bg-right rounded-md py-0 items-center connect" style={{ background: 'rgba(30, 30, 30, 1)', fontFamily: 'Syne', '@media (max-width: 768px)': { paddingLeft: '1rem', paddingRight: '1rem' } }}>
//       <div className="md:w-7/12 order-2 md:order-1 pl-8 md:pl-20 px-10" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
//         <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{textAlign: "left", '@media(max-width: 768px)': { textAlign: "center" }}} >We are always <br/> looking to connect <br/> with great people</h2>
//         <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//         <button onClick={() => window.open("https://www.instagram.com", "_blank")} className="focus:outline-none  hover:bg-red-700 text-white font-bold py-2 px-3 rounded" style={{background: "#DD330B"}}>Instagram</button>
//           <button onClick={() => window.open("https://www.linkedin.com", "_blank")} className="focus:outline-none  hover:bg-red-700 text-white font-bold py-2 px-3 rounded" style={{background: "#DD330B"}}>LinkedIn</button>
//           <button onClick={() => window.open("https://www.twitter.com", "_blank")} className="focus:outline-none  hover:bg-red-700 text-white font-bold py-2 px-3 rounded" style={{background: "#DD330B"}}>Twitter</button>
//         </div>
//       </div>
//       <div className="md:w-5/12 order-1 md:order-2 mt-0 md:mt-0" style={{ margin: "0", padding: "0" }}>
//         <img src={backgroundImage} alt="Background" className="object-cover w-full h-full rounded-r-md" />
//       </div>

//     </div>
//   );
// }

// export default Connect;



import React from 'react';
import backgroundImage from '../../assets/AYUK.jpg';
import './connect.css'; 

function Connect() {
  return (
    <div className="flex flex-col md:flex-row mt-4 mr-20 mb-4 ml-20 md:mr-40 md:ml-40 bg-no-repeat bg-right rounded-md py-0 connect" style={{ background: 'rgba(30, 30, 30, 1)', fontFamily: 'Syne', '@media (max-width: 768px)': { paddingLeft: '1rem', paddingRight: '1rem' } }}>
      <div className="md:w-7/12 order-2 md:order-1 pl-8 pr-8 md:pl-20 md:pr-20 px-0 my-auto items-center" style={{ paddingTop: "25px", paddingBottom: "25px" }}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 reach text-center md:text-left"> Where your <br/> dream becomes a reality</h2>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 connect-buttons">
          <button onClick={() => window.open("#", "_blank")} className="instagram-button">Instagram</button>
          <button onClick={() => window.open("#", "_blank")} className="linkedin-button">LinkedIn</button>
          <button onClick={() => window.open("#", "_blank")} className="twitter-button">Twitter</button>
        </div>
      </div>
      <div className="md:w-7/12 order-1 md:order-2 mt-0 md:mt-0" style={{ margin: "0", padding: "0" }}>
        <img src={backgroundImage} alt="Background" className="object-cover w-full h-full rounded-r-md" />
      </div>
    </div>
  );
}

export default Connect;
