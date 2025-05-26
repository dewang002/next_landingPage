import HeroPage from '@/components/HeroPage'
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
    </div>
  )
}

export default Home