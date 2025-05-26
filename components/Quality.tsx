import { Leaf, ShieldCheck, Sparkles, Sliders } from 'lucide-react'
import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from './ui/card'

const features = [
  {
    icon: <Leaf className="h-6 w-6 text-green-600" />,
    title: 'Eco-Friendly Products',
    description: 'We use only safe and sustainable cleaning solutions.',
    footer: 'Better for your family & the planet.'
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
    title: 'Trusted & Vetted Staff',
    description: 'Background-checked, professionally trained employees.',
    footer: 'Your safety is our priority.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-yellow-500" />,
    title: 'Spotless Guarantee',
    description: 'If it’s not right, we’ll make it right.',
    footer: '100% satisfaction guaranteed.'
  },
  {
    icon: <Sliders className="h-6 w-6 text-purple-500" />,
    title: 'Customizable Plans',
    description: 'Tailored services to fit your schedule and needs.',
    footer: 'Flexible and convenient.'
  }
]

const Quality = () => {
  return (
    <section className="w-full py-16 px-6 flex flex-col items-center gap-10">
      <h1 className="text-2xl md:text-2xl text-center max-w-3xl font-semibold text-pink-600">
        We lead the industry through quality cleaning service, maximum safety & innovative technology.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-7xl">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col justify-between h-full">
            <CardHeader className="space-y-2">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                {feature.icon}
                {feature.title}
              </CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent />
            <CardFooter>
              <p className="text-sm text-neutral-500">{feature.footer}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Quality
