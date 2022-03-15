import React from "react";
import Navbar from "../Home/Navbar";
import AracItem from "../Aracim/AracItem";
import OpelCorsa from "../Home/Images/opelcorsa.jpg"
import Footer from "../Home/Footer";


const Araclarim = () => {
  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);
  // const [status, setStatus] = useState(null);
  // const getLocation = () => {
  //   if (!navigator.geolocation) {
  //     setStatus('Geolocation is not supported by your browser');
  //   } else {
  //     setStatus('Locating...');
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setStatus(null);
  //       setLat(position.coords.latitude);
  //       setLng(position.coords.longitude);
  //     }, () => {
  //       setStatus('Unable to retrieve your location');
  //     });
  //   }
  // }
  const araclar = [
    {
      marka: "Opel",
      model: "Corsa",
      renk: "Beyaz",
      yil: 2008,
      imei: 482940284930293,
      kontak: "Kapalı",
      img: <img src={OpelCorsa} className="imgopel" alt="opel" />
  
    }
  ];



  let aracContent = araclar.map((araclar) => (
    <AracItem
      key={araclar.imei}
      image={araclar.img}
      marka={araclar.marka}
      model={araclar.model}
      renk={araclar.renk}
      yil={araclar.yil}
      imei={araclar.imei}
      kontak={araclar.kontak}
    />
    
  ));

  return (
    <div>
      <Navbar />

      {aracContent}
      <Footer />
    </div>
  );
};

export default Araclarim;
