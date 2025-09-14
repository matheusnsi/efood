import RestaurantsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'
import { useEffect, useState } from 'react'
import { Restaurante } from '../../models/Restaurant'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Hero />
      <RestaurantsList restaurants={restaurantes} />
    </>
  )
}

export default Home
