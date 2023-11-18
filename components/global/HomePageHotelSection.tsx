import React from 'react';

type Props = {};

function HomePageHotelSection({}: Props) {
  return (
    <div className="flex p-16">
      <div className="flex-1 space-y-6 p-4">
        <div className=" flex gap-4 items-center">
          <div className="w-[100px] border-y border-black opacity-50"></div>
          <div className="text-lg">The hotel</div>
        </div>
        <h1 className="text-6xl max-w-4xl ">
          Lebledegre Hotel Where Tranquility Meets the Energy of Marrakech
        </h1>
        <p className="text-lg max-w-5xl ">
          Whether you’re looking for an ideal value hotel or a starting point
          for exploring the wonderful city of Marrakech, Lebledegre Hotel is the
          best choice! This pleasant haven of peace enjoys a strategic location
          just minutes from the city’s main points of interest, and offers a
          diverse culinary experience with its 3 restaurants: Karma, La Terazza
          and Saveurs d’Asie. Pamper yourself at our rejuvenating spa, indulge
          in traditional Moroccan charm with a contemporary touch, and relish
          the warm hospitality of our experienced team dedicated to your
          satisfaction.
        </p>
      </div>
      <div>
        <div className="relative h-full max-h-[800px]">
          <img
            src="https://hotel-amani.com/wp-content/uploads/2023/01/A00B4810-Copy2.jpg"
            alt=""
            width={350}
            className="absolute bottom-[-30%] right-[-2rem]  "
          />
          <img
            src="https://hotel-amani.com/wp-content/uploads/elementor/thumbs/MOROCCO-MARRAKECH-HOTEL-AMANI-POOL-WATER-e1666775815408-q96carjq408wioi56nasjnyeb23adhrb0kfwbqy0kw.jpg"
            alt=""
            width={500}
            className="relative z-1"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePageHotelSection;
