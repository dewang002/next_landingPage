import HeroPage from '@/components/HeroPage'
import ServiceArea from '@/components/ServiceArea'
import Stories from '@/components/Stories'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HeroPage/>
      <Stories />
      <ServiceArea />
    </div>
  )
}

export default Home