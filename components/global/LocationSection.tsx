import React from 'react';
import Tag from './section/Tag';
import Title from './section/Title';
import Desc from './section/Desc';
import ViewMore from './section/ViewMore';

type Props = {};

function LocationSection({}: Props) {
  return (
    <section className="flex h-fit w-full justify-between p-10">
      <div className="bg-gray-700 text-gray-100  w-full">
        <div className="container mx-auto pt-12 space-y-4">
          <div className="flex flex-col gap-6">
            <div className="flex-1 space-y-6">
              <Tag tag="Find Us" />
              <Title title="Our location" />
              <Desc desc="HXJF 36G Le Bled De Gre, Marrakesh" />
            </div>

            <ViewMore src={'#'} value={'Getting here'} />
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.958701007881!2d-8.029508225167087!3d31.580180374186604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef406677c6df%3A0x18affe19766f262!2sLe%20Bled%20De%20Gre!5e0!3m2!1sfr!2sma!4v1700360535975!5m2!1sfr!2sma"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default LocationSection;
