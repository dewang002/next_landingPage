import Faq from '@/components/Faq'
import Featured from '@/components/Featured'
import Footer from '@/components/Footer'
import Founder from '@/components/Founder'
import HeroPage from '@/components/HeroPage'
import Options from '@/components/Options'
import Quality from '@/components/Quality'
import Reviews from '@/components/Reviews'
import ServiceArea from '@/components/ServiceArea'
import Stories from '@/components/Stories'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HeroPage />
      <Stories />
      <ServiceArea />
      <Reviews />
      <Founder />
      <Featured />
      <Quality />
      <Faq />
      <Options />
      <Footer />
    </div>
  )
}

export default Home