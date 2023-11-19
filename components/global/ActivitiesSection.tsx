import React from 'react';
import SectionsHeader from './SectionsHeader';

type Props = {};

function ActivitiesSection({}: Props) {
  return (
    <section className="flex">
      <div className="absolute bg-[#EEE7DA] w-full h-[65%] z-[-1]"></div>
      <SectionsHeader
        tag="Activities"
        title="Discover Memorable Activities with us"
        desc="Here we will share with you all the activities we organize in Marrakesh and its sightseeings."
        src="src"
        isFlexCol={true}
      />
      <div className="flex gap-2 items-center w-full justify-center">
        <div className="relative top-[20%] w-[40vw]">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5b64999be2ccd16cbfe99bbc/1561726949906-09OSZAETOZ4VLLTXUE7A/IMG_20181127_223509_311.jpg"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;
