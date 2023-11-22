import React from 'react';
import Tag from './section/Tag';
import Title from './section/Title';
import Desc from './section/Desc';
import ViewMore from './section/ViewMore';

type Props = {};

function CafesRestaurantsSection({}: Props) {
  return (
    <section className="flex flex-col gap-16 p-10">
      <div className="container mx-auto pt-12 space-y-4">
      <div
        className='flex items-end'>
        <div className="flex-1 space-y-6">
          <Tag tag="Chill & food places"/>
          <Title title="Cafes & Restaurants"/>
          <Desc desc="Discover a world of delectable delights and charming ambiance in our thoughtfully selected selection of cafes and restaurants." />
        </div>
        
          <ViewMore src={"#"} value={"View More"}/>
        
      </div>
    </div>
      <div className="flex gap-2 items-center w-full justify-center">
        {[
          '/images/restaurant.jpg',
          '/images/food1.jpg',
          '/images/food1.jpg'
        ].map((s, i) => (
          <div className="flex-1" key={i}>
            <img src={s} className="w-full aspect-square object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CafesRestaurantsSection;
