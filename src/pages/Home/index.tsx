import RestaurantsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'
import { useGetRestaurantesQuery } from '../../services/api'
import Loading from '../../components/Loading'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (!restaurantes) {
    return <Loading />
  }

  return (
    <>
      <Hero />
      <RestaurantsList restaurants={restaurantes} />
    </>
  )
}

export default Home
