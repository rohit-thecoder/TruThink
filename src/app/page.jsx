import Hero from '@/components/Home/Hero';
import HomeSlider from '@/components/Home/HomeSlider';
import HoverCarousel from '@/components/HoverCarousel';
import MagicTiles from '@/components/Magic';
import ScrollingCards from '@/components/ScrollingCards';
import ServiceKaHero from '@/components/Services/ServiceKaHero';
import SubServices from '@/components/Services/SubServices';
import React from 'react'

export default function page() {
  return (
    <div>
      {/* <HomeSlider/> */}
    {/* <Hero/> */}
    <SubServices/>
    <ServiceKaHero/>
    
    </div>
  );
}
