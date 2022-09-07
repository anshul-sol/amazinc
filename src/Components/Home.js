import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div>
      <img
        src="https://chameleoncollective.com/wp-content/uploads/2018/04/e-commerce-blog-post-scaled.jpg"
        alt=""
        className="w-full h-img -mb-24"
      />
      <div className="flex justify-center mr-1 ml-1">
        <Product
          id="85495632"
          title="2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10-core CPU and 16-core GPU, 16GB RAM, 512GB SSD) - Space Gray"
          price={2300}
          rating={5}
          image="https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SL1500_.jpg"
        />
        <Product
          id="41536972"
          title="LG 27LP615B-PU 27” Inch Full HD (1920 x 1080) IPS TV/Monitor with Dual 5W Built-in Speakers, HDMI Input, Dolby Audio, Wall Mountable, Remote Control - Black (2021)"
          price={160}
          rating={4}
          image="https://m.media-amazon.com/images/I/911yN9Q3qML._AC_SL1500_.jpg"
        />
        <Product
          id="25394712"
          title="Bose Smart Soundbar 900 Dolby Atmos with Alexa Built-In, Bluetooth connectivity - Black"
          price={900}
          rating={3}
          image="https://m.media-amazon.com/images/I/51FgQrmfdnS._AC_SL1500_.jpg"
        />
      </div>
      <div className="flex justify-center mr-1 ml-1">
        <Product
          id="98742368"
          title="JanSport Cross Town Backpack - School, Travel, or Work Bookbag with Water Bottle Pocket, Black"
          price={30}
          rating={5}
          image="https://m.media-amazon.com/images/I/81GAJWuhyLL._AC_SL1500_.jpg"
        />
        <Product
          id="01267473"
          title="Samsung MS14K6000AS/AA MS14K6000 Speed-Cooking-Microwave-ovens, 1.4 cu. ft, Stainless Steel"
          price={150}
          rating={2}
          image="https://m.media-amazon.com/images/I/7145Bip1RSL._AC_SL1500_.jpg"
        />
        <Product
          id="59814390"
          title="Apple Watch Series 7 (GPS + Cellular, 41mm) Green Aluminum Case with Clover Sport Band, Regular (Renewed)"
          price={300}
          rating={3}
          image="https://m.media-amazon.com/images/I/71r-jFmtfIL._AC_SL1500_.jpg"
        />
      </div>
      <div className="flex justify-center mr-1 ml-1">
        <Product
          id="58713694"
          title="Apple iPhone 12, 64GB, Green - Fully Unlocked (Renewed)"
          price={460}
          rating={5}
          image="https://m.media-amazon.com/images/I/71nnsAgAKhL._AC_SL1500_.jpg"
        />
        <Product
          id="02361294"
          title="Logitech MX Keys Advanced Wireless Illuminated Keyboard, Tactile Responsive Typing, Backlighting, Bluetooth, USB-C, Apple macOS, Microsoft Windows, Linux, iOS, Android, Metal Build - Graphite"
          price={120}
          rating={4}
          image="https://m.media-amazon.com/images/I/71ELb9vTikS._AC_SL1500_.jpg"
        />
        <Product
          id="98741010"
          title="TP-Link AC1750 Smart WiFi Router (Archer A7) -Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control, QoS"
          price={60}
          rating={4}
          image="https://m.media-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
