import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import HeroRestaurant from '../../components/HeroRestaurant'
import { useGetRestauranteQuery } from '../../services/api'
import Loading from '../../components/Loading'

type Props = {
  id: number
}

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestauranteQuery(id!)

  if (!restaurante) {
    return <Loading />
  }

  return (
    <>
      <Header />
      <HeroRestaurant
        imagem={restaurante.capa}
        titulo={restaurante.titulo}
        tipo={restaurante.tipo}
      />
      <ProductsList pratos={restaurante.cardapio} />
    </>
  )
}

export default Perfil
