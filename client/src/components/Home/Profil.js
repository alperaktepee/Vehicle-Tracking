import React from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";
import ProfileItem from "./ProfileItem";
import ImageUploader from "./ImageUploader";

const Profil = () => {
  const user = [
    {
      ad: "Alper",
      soyad: "Aktepe",
      email:"alperaktepe98@gmail.com",
      car:"Opel Corsa",
  
    }
  ];


  let profilContent = user.map((user) => (
    <ProfileItem
      key={user.email}
      ad={user.ad}
      soyad={user.soyad}
      email={user.email}
      car={user.car}

    />
    ));

  return (
    <div>
      <Navbar />
  {/* <ImageUploader /> */}
  <ImageUploader />
    
      {profilContent}
     
      <Footer />

    </div>
  );
};

export default Profil;
