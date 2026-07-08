import React from "react";
import { FiMapPin } from "react-icons/fi";

const MapLocation: React.FC = () => {

  const googleMapUrl =
    "https://maps.app.goo.gl/oC2PNCvcrVhwBQY1A?g_st=aw";

  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13728.177102226655!2d76.86122706561159!3d30.66088171187675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f952cf2754257%3A0x9c6cc9cd4a38ee8a!2sKinderBloom%20OccupationalTherapy%20-%20best%20center%20for%20early%20intervention%2CAutism%2CADHD%2CSpeech%20therapy%20center%20in%20peermuchala%20tricity!5e0!3m2!1sen!2sin!4v1783524523357!5m2!1sen!2sin";


  return (
    <section className="map-section">

      <div className="map-container">

        <iframe
          title="KinderBloom Occupational Therapy Location"
          src={embedUrl}
          width="100%"
          height="400"
          style={{
            border: 0,
            borderRadius: "16px"
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />

      </div>


      <a
        href={googleMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="direction-btn"
      >
        <FiMapPin />
        Get Directions
      </a>


    </section>
  );
};


export default MapLocation;