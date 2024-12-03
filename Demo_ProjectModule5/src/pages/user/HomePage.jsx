import React from "react";
import Header from "../../layout/Header";
import SlideHero from "../../layout/SlideHero";

export default function HomePage() {
  return (
    <div>
      <Header></Header>
      <SlideHero />
      <h3 className="text-center text-4xl m-[50px]">
        Something special for the holidays
      </h3>

      <div>
        <div>
          <img src="" alt="" />
          <p>Women's Handbags</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>Women's Small Leathergoods</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>Men's Bags</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>Men's Sneakers</p>
        </div>
      </div>
    </div>
  );
}
