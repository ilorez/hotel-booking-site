import React from 'react';

function HomePageTopSection() {
  return (
    <section className="w-full flex items-center justify-center text-3xl">
      <div className="flex flex-col items-center gap-6 p-10 [&>p]:text-center max-w-[80vw]">
        <p className="flex flex-col gap-1">
          <span>
            Marrakech is a touristic destination by excellence An enchanting
          </span>
          <span>imperial city ideal for culture lovers</span>{' '}
          <span>History & Discovery</span>
        </p>
        <p>
          It is a total escape, with year-round sunshine, breathtaking scenery,
          rich and authentic culture to discover through its restaurants,
          museums and historic sites
        </p>
      </div>
    </section>
  );
}

export default HomePageTopSection;
