import React from 'react';
import SectionsHeader from './SectionsHeader';

type Props = {};

function HomePageHotelSection({}: Props) {
  return (
    <div className="flex p-16">
      <SectionsHeader
        tag="The hotel"
        title="Le Bled de Gre Hotel Where Tranquility Meets the Energy of Marrakech"
        desc="Whether you’re looking for an ideal value hotel or a starting point
      for exploring the wonderful city of Marrakech, Le Bled de Gre Hotel is
      the best choice! This pleasant haven of peace enjoys a strategic
      location just minutes from the city’s main points of interest, and
      offers a diverse culinary experience with its 3 restaurants: Karma, La
      Terazza and Saveurs d’Asie. Pamper yourself at our rejuvenating spa,
      indulge in traditional Moroccan charm with a contemporary touch, and
      relish the warm hospitality of our experienced team dedicated to your
      satisfaction."
      />
      <div>
        <div className="relative h-full max-h-[800px]">
          <img
            src="/images/pesine1.jpg"
            alt=""
            width={350}
            className="absolute bottom-[-30%] right-[-2rem]"
          />
          <img
            src="/images/greenView2.jpg"
            alt=""
            width={500}
            className="relative z-1 top-16 w-[50vw]"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePageHotelSection;
