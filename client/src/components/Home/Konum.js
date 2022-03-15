import React from "react";
import ItemKonum from "./ItemKonum";
import Navbar from "./Navbar";


const Konum = () => {
  const aracKonum = [
    {
      marka: "Opel",
      model: "Corsa",
      yil: 2008,
      imei: 482940284930293,
      kontak: "Kapalı",
      lat: 38.6167376,
      lng: 27.4044075,
    },
  ];
  let aracKonumu = aracKonum.map((arac) => (
    <ItemKonum key={arac.imei} lat={arac.lat} lng={arac.lng} />
  ));

  return (
    <div>
      <Navbar />
      {aracKonumu}
    </div>
  );
};

export default Konum;
