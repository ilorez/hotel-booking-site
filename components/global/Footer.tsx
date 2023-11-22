import Image from 'next/image';
import React from 'react';

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="w-full flex flex-col items-center py-8">
      <div className="w-[65%] flex flex-col items-center gap-10">
        <div className="flex-1 flex justify-center items-center text-2xl gap-2">
          <Image
            priority
            src="/icon/logo.svg"
            height={36}
            width={36}
            alt="hotel logo"
          />
          <p>
            <span>L</span>ebledegre
          </p>
        </div>
        <div className="flex justify-between w-full [&>div>ul]:gap-2 [&>div>ul]:flex [&>div>ul]:flex-col [&>div>ul>li:hover]:underline [&>div>ul>li]:cursor-pointer pb-6 border-b border-b-gray-500">
          <div>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Rooms</li>
              <li>Restaurants & Cafes</li>
              <li>Activities</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Privacy Policy</li>
              <li>About us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="[&>ul>li]:text-gray-500">
            <ul>
              <li>+212(0)-664-7224-88</li>
              <li>contact@lebledgre.com</li>
              <li>HXJF 36G Le Bled De Gre, Marrakesh</li>
            </ul>
          </div>
        </div>
        <div>&copy; 2023 Le Bled de Gre Hotel - All rights Reserved</div>
        <div>
          <ul className="flex gap-4  [&>li:hover]:scale-105 [&>li]:flex [&>li]:gap-2 [&>li]:items-center [&>li]:cursor-pointer">
            <li>
              <img src="/icon/fr.png" width={30} alt="francais icon"></img>
              <span>Français</span>
            </li>
            <li>
              <img src="/icon/eng.png" width={30} alt="english icon"></img>
              <span>English</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
