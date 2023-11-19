import React from 'react';
import SectionsHeader from './SectionsHeader';

type Props = {};

function CafesRestaurantsSection({}: Props) {
  return (
    <section className="flex flex-col gap-16 p-10">
      <SectionsHeader
        tag="Chill & food places"
        title="Cafes & Restaurants"
        desc="Discover a world of delectable delights and charming ambiance in our thoughtfully selected selection of cafes and restaurants."
        src="src"
      />
      <div className="flex gap-2 items-center w-full justify-center">
        {[
          '/images/restaurant.jpg',
          '/images/food1.jpg',
          '/images/food1.jpg'
        ].map((s, i) => (
          <div className="w-[20vw]">
            <img src={s} className="w-full aspect-[1/2] object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CafesRestaurantsSection;
