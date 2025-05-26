import Featured from '@/components/Featured'
import Founder from '@/components/Founder'
import HeroPage from '@/components/HeroPage'
import Quality from '@/components/Quality'
import Reviews from '@/components/Reviews'
import ServiceArea from '@/components/ServiceArea'
import Stories from '@/components/Stories'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HeroPage/>
      <Stories />
      <ServiceArea />
      <Reviews />
      <Founder />
      <Featured />
      <Quality />
    </div>
  )
}

export default Home