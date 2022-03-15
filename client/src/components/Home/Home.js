
import React from "react";
import Navbar from "./Navbar";
import './Home.css'
import Footer from "./Footer";


const Home = () => {


  return (
    <div className="main_container">
      <Navbar />

     <div className="homepage">
     <div className="hero-image">
     <div className="description">
 <h1>Aracanızın Anlık Konumunu Öğrenin</h1>
 <h2>Ayrıca aracınızla ilgili tüm bilgileri aracım sekmesinden öğrenebilirsiniz</h2>

</div>
     </div>
     <div className="benefits_container"> 
     <div className="benefits">
       <div>  <img src={require("./Images/track.png")} className="benefits_img" alt="Benefits" /></div>
<h2>Gerçek Zamanlı Takip</h2>
<p>7/24 gerçek zamanlı GPS izleme ile filo konumlarınıza erişin. Yazılım gerekmez, mobil veya masaüstü için web tabanlı konsol.</p>
     </div>
     <div className="benefits">
       <div>  <img src={require("./Images/kolayyukleme.png")} className="benefits_img" alt="Benefits" /></div>
<h2>Kolay Yükleme</h2>
<p>Mobil uygulamamızı yükleyin ve gitmeye hazırsınız. Tüm sürücülerinizin ihtiyacı olan bu. Magic Links ile filo oluşturma süper hızlıdır ve tek tıklamayla kolaydır.</p>
     </div>
     <div className="benefits">
       <div>  <img src={require("./Images/2seconds.png")} className="benefits_img" alt="Benefits" /></div>
<h2>Her 2 Saniyede Bir Konum Güncelleme</h2>
<p>Uygulama, %100 doğru ve kilometresiz kayıp kayıtları için her 2 saniyede bir konumu yakalayacak şekilde ayarlanabilir.</p>
     </div>
     <div className="benefits">
       <div>  <img src={require("./Images/nocontract.png")} className="benefits_img" alt="Benefits" /></div>
<h2>Sözleşme Yok</h2>
<p>Kilitli sözleşmeler veya iptal ücreti yok. 40 günlük tam para iade garantisi.</p>
     </div>
     <div className="benefits">
       <div>  <img src={require("./Images/secure.png")} className="benefits_img" alt="Benefits" /></div>
<h2>Güvenli Veri Depolama</h2>
<p>
Her şey bulutumuzda senkronize edildi ve saklandı. Doğrudan dünya haritasından erişilebilen istatistiklerle sürüş geçmişi.</p>
     </div>
     <div className="benefits">
       <div>  <img src={require("./Images/specialfeatures.png")} className="benefits_img" alt="Benefits" /></div>
<h2>İşletme sınıfı özellikler</h2>
<ul>
  <li>Sürücü Puanı</li>
  <li>Önleyici Bakım Planlaması</li>
  <li>İş Sevkiyatı</li>
  <li>Coğrafi Sınırlar, Uyarılar, Analizler</li>
  <li>Yazdırılabilir Uyumlu Raporlar</li>

</ul>
     </div>
     </div>
     </div>
<Footer />
    </div>
   
  );
};

export default Home;
