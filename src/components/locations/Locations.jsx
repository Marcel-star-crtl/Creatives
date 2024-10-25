
import React from 'react';
import './locations.css';
import Buea from "../../assets/Douala.png"
import Douala from "../../assets/Buea.png"
import Bamenda from "../../assets/Bamenda.png"


const Locations = () => {
  return (
    <div className="location section__padding" id="locations">
      <div className="location-form">
        <div className='location-info'>
          <div className="image-container">
            <img src={Buea} alt="goshen lights Logo" className="logo-image" />
            <h1>Buea</h1>
            <p>Nestled against the backdrop of Mount Cameroon, Buea's creative spirit is undeniable. The goshen lights Creative Evening in Buea offers fertile ground for your artistic vision to flourish. Collaborate with a supportive network of fellow creators and innovators. <br/> Share your unique perspective and witness your creative spark erupt into a roaring flame. This is where you'll transform the challenges you face solo into collaborative triumphs, propelling your creative journey forward with newfound momentum.</p>
          </div>
          <div className="image-container">
            <img src={Douala} alt="goshen lights Logo" className="logo-image" />
            <h1>Douala</h1>
            <p>Douala's energy is contagious. It is a melting pot of artistic expression, and that's why goshen lights is bringing you a creative evening. The Creative Evening will connect you to a diverse range of creators, sparking a dynamic exchange of ideas. Attend the event and witness the magic that unfolds when creative minds from different disciplines come together. <br/> This is where your individuality thrives within a collaborative environment, and you'll discover new perspectives that will fuel groundbreaking innovation in your work.</p>
          </div>
          <div className="image-container">
            <img src={Bamenda} alt="goshen lights Logo" className="logo-image" />
            <h1>Bamenda</h1>
            <p>Bamenda's rich cultural heritage provides a robust foundation for creative exploration. Thus, the goshen lights Creative Evening is the perfect platform to elevate your creative voice and connect with a community that celebrates your unique perspective. <br/> Share your stories, collaborate on projects that draw inspiration from your city's heritage, and amplify the impact of your creative vision. Here, you'll find the support and encouragement to turn your artistic dreams into a powerful reality, enriching your creative journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
